<template>
  <div class="selector-container">
      <div class="loading-div" v-if="onLoad">
          <loading-component></loading-component>
      </div>
      <div class="selector" v-else>
          <div class="refresh">
              <button class="btn">刷新</button>
          </div>
          <ul class="users">
              <li v-for="user in users" :userid="user.id" @click="connect">
                <a >{{ user.name }}</a>
                <div class="mask"></div>
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
                /*position: ;*/
                /*top: 0;*/
                /*left: 0;*/
                width: 100%;
                height: 50px;
                border-bottom: $border;
                button{
                    position: absolute;
                    right: 0;
                    margin: 10px;
                }
            }
            .users{
                overflow: auto;
                height: 600px;
                list-style: none;
                padding: 10px 0;
                li{
                    margin: 10px auto;
                    width: 200px;
                    height: 100px;
                    border: $border;
                    border-radius: 5px;
                    text-align: center;
                    background-color: #363636;
                    position: relative;
                    a{
                        display: block;
                        width: 100%;
                        height: 100%;
                        color: #f0f0f0;
                        font-size: 25px;
                        line-height: 100px;
                        text-decoration: none;
                    }
                    .mask{
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        opacity:0.3;
                        /*兼容IE8及以下版本浏览器*/
                        filter: alpha(opacity=30);
                        z-index: 10;
                    }
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
        let eventTarget = evt.target.parentNode;
        let userId = eventTarget.getAttribute("userid")
        this.$router.push("/chat/" + userId)
      }
    },
    components: {
      LoadingComponent
    }
  }
</script>
