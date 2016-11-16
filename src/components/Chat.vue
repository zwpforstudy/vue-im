<template>
    <div class="chat">
      <h1>Chat-room</h1>
      <div class="msg">
        <h5 v-for="msg in msgList"> {{ msg }}</h5>
      </div>
      <input type="text" class="form-control" v-model="inputMsg"/>
      <br>
      <button type="button" class="btn btn-primary" @click="doSend">Send</button>
    </div>
</template>
<style>

</style>
<script>
    export default{
        name: 'Chat',
        data: function () {
            let initData = {}
            let userId = this.$route.params.userId
            let socket = new WebSocket('ws://echo.websocket.org/')
            let msgList = []

            socket.onopen = function(evt) {
              console.log('打开连接...')
            }
            socket.onclose = function(evt) {
              console.log('关闭连接...')
            }
            socket.onmessage = function(evt){
              let receiveMsg = evt.data
              console.log('Receive: ' + receiveMsg);
              msgList.push(receiveMsg)
            }
            socket.onerror = function(evt){
              console.log('错误: ' + evt)
            }

            initData.socket = socket
            initData.inputMsg = ''
            initData.msgList = msgList
            return initData
        },
        methods: {
          doSend: function(){
            console.log('Send: ' + this.inputMsg)
            this.socket.send(this.inputMsg)
          }
        }
    }
</script>
