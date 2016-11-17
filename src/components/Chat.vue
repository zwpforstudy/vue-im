<template>
  <div class="chat-container">
    <h1>Chat-Room</h1>
    <div class="row" v-if="connSuccess">
      <!-- 左边 -->
      <div class="col-md-4 chat-left">
        <h2>在线用户:</h2>
        <p v-for="user in onlineUsers" class="bg-info">
          <a href="#" @click="say" :userid="user.id" :nickname="user.name">{{ user.name }}</a>
        </p>
      </div>

      <!-- 右边 -->
      <div class="col-md-8 chat-right">
        <!-- 聊天记录 -->
        <h2>我是 {{ currUser.nickname }}</h2>
        <h2>与 {{ speakToUser.nickname }} 聊天~</h2>
        <div class="chat-right-top">
          <h5>聊天记录</h5>
          <h5 v-for="msg in msgList"> {{ msg }}</h5>
        </div>

        <div class="chat-right-bottom">
          <input type="text" class="form-control" v-model="inputMsg"/>
          <br>
          <button type="button" class="btn btn-primary" @click="doSend">Send</button>
        </div>
      </div>
    </div>
    <h1 v-else>正在加载...</h1>
  </div>
</template>
<style>

</style>
<script type="text/javascript">
  import Config from '../../config/index'
  import {buildAuthMsg, buildTextMsg, buildDisconnectMsg} from '../websocket.util'
  export default{
    name: 'Chat',
    data: function () {
      let initData = {}
      let userId = this.$route.params.userId
      let websocketUrl = Config.dev.env.WS_LOCATION
      let msgList = []

      //1.创建socket连接
      let socket = new WebSocket(websocketUrl)
      socket.onopen = function (evt) {
        //1.连接建立时,发送一条授权消息
        socket.send(JSON.stringify(buildAuthMsg(userId)))
      }
      socket.onclose = function (evt) {
        console.log('关闭连接...')
      }
      socket.onmessage = function (evt) {
        let receiveMsg = evt.data
        let receiveMsgJson = JSON.parse(receiveMsg)
        if (receiveMsgJson.type === "1") {
          //授权指令消息
          if (receiveMsgJson.msg.auth) {
            //校验成功
            initData.connSuccess = true
            msgList.push("授权成功...")
          } else {
            // 授权失败,断开连接
            msgList.push('授权失败...');
            initData.socket.close()
          }
          return
        }

        if (receiveMsgJson.type === "3") {
          // 系统回执
          // console.log("-- 系统回执 --")
          return
        }

        if (receiveMsgJson.type === "100") {
          // 接收到的文本消息
          // console.log("-- 文本消息 --")
          let from = receiveMsgJson.from
          let msg = receiveMsgJson.msg.text
          let extra = receiveMsgJson.extra;

          console.log(JSON.stringify(extra));
          msgList.push("[" + extra.nickname + "]: " + msg)
          return
        }

        if (receiveMsgJson.type === '2') {
          // 系统通知
          // console.log("-- 系统通知 --")
          msgList.push('系统通知:' + receiveMsgJson.msg.text);
          return
        }

        msgList.push(receiveMsg)
      }
      socket.onerror = function (evt) {
        console.log('错误: ' + evt)
        initData.socket = null
      }

      //2.加载在线用户列表
      this.$http.get(Config.dev.env.API_HOST + 'v1/onlineusers').then((response) => {
        let respData = response.data
        initData.onlineUsers = respData.data
      }).catch((response) => {
        console.log("Api Err: " + JSON.stringify(response))
      })

      //3.聊天用户
      let speakToUser = {}
      speakToUser.nickname = '无'
      speakToUser.id = '-1'

      //4.当前用户
      let currUser = {}
      currUser.userId = userId
      this.$http.get(Config.dev.env.API_HOST + 'v1/userinfo?id=' + userId).then((response) => {
        let respData = response.data
        console.log('nickname: ' + respData.data.name)
        currUser.nickname= respData.data.name
      }).catch((response) => {
        console.log("Api Err: " + JSON.stringify(response))
      })

      initData.socket = socket
      initData.inputMsg = ''
      initData.msgList = msgList
      initData.connSuccess = false
      initData.onlineUsers = []
      initData.speakToUser = speakToUser
      initData.currUser = currUser
      return initData
    },
    methods: {
      doSend: function () {
        let textMsg = buildTextMsg(this.currUser.userId, this.speakToUser.id, this.inputMsg)
        this.socket.send(JSON.stringify(textMsg))
      },
      say: function (evt) {
        let userId = evt.target.getAttribute("userid")
        let nikeName = evt.target.getAttribute("nickname")
        this.speakToUser.nickname = nikeName
        this.speakToUser.id = userId
      }
    },
    beforeRouteLeave: function (to, from, next) {
      console.log('从 [' + from.path + ']离开，去往[' + to.path + '].')
      this.socket.send(JSON.stringify(buildDisconnectMsg(this.currUser.userId)))
      next()
    }
  }
</script>
