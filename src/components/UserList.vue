<template>
  <div class="userlist-container">
    <h1>{{ msg }}</h1>
    <div class="users">
      <h1 v-if="onLoad">加载中</h1>
      <p v-for="user in users" class="bg-info">
        <a href="#" @click="connect" :userid="user.id">{{ user.name }}</a>
      </p>
    </div>
  </div>
</template>
<style>

</style>
<script type="text/javascript">
  import Config from '../../config/index'
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
    }
  }
</script>
