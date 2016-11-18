<template>
  <div class="userlist-container">
    <!--<h4>{{ msg }}</h4>-->
    <div class="loading-div" v-if="onLoad">
      <loading-component></loading-component>
    </div>
    <ul class="users">
      <li v-for="user in users" class="bg-info">
        <a href="#" @click="connect" :userid="user.id">{{ user.name }}</a>
      </li>
    </ul>
  </div>
</template>
<style lang="scss">
  .userlist-container{
    width: 600px;
    height: 60%;
    margin: 150px auto;
    border: 1px solid #f0f0f0;
    padding: 20px;
    h4{
      margin-bottom: 20px;
    }
    #loading-div{
      width:54px;
      height:25px;
    }
    .users{
      font-size: 0;
      list-style: none;
      li{
        display: inline-block;
        *display: inline;
        *zoom: 1;
        width: 100px;
        height: 30px;
        line-height: 30px;
        margin-right: 10px;
        font-size: 20px;
        text-align: center;
        background-color: #00d6b2;
        a{
          text-decoration: none;

        }
      }
    }
  }
</style>
<script type="text/javascript">
  import Config from '../../config/index'
  import LoadingComponent from './loading.vue'

  export default {
    name: "UserList",
    data: function () {
      let initData = {}
      let users = []

      this.$http.get(Config.dev.env.API_HOST + 'v1/users').then((response) => {
        let respData = response.data
        initData.users = respData.data
        initData.onLoad = false
      }).catch((response) => {
        console.log("Api Err: " + JSON.stringify(response))
      })

      initData.title = '可用用户列表'
      initData.users = users
      initData.onLoad = true
      return initData
    },
    methods: {
      connect: function (evt) {
        let eventTarget = evt.target
        let userId = eventTarget.getAttribute("userid")
        this.$router.push("/chat/" + userId)
      }
    },
    components: {
      LoadingComponent
    }
  }
</script>
