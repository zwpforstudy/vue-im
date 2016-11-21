<template>
  <div class="selector-container">
      <div class="loading-div" v-if="onLoad">
          <loading-component></loading-component>
      </div>
      <div class="selector" v-else>
          <div class="refresh"></div>
          <ul class="users" >
              <li v-for="user in users" class="bg-info">
                <a href="#" @click="connect" :userid="user.id">{{ user.name }}</a>
              </li>
          </ul>
      </div>

  </div>
</template>
<style lang="scss">
    @import "../assets/scss/main.scss";
    .selector-container{

        .selector{

            .refresh{
                height: 50px;
            }
            .users{
                list-style: none;
                li{
                    height: 45px;
                    line-height: 45px;
                    padding: 0 10px;
                    border-bottom: $border;
                }
            }
        }
    }
</style>
<script type="text/javascript">
  import Config from '../../config/index'
  import LoadingComponent from './../components/loading.vue'

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
