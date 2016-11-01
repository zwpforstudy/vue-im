<template>
  <div class="login-container">
    <!-- 错误提示信息 -->
    <div class="alert alert-danger" role="alert" v-show="err_status">
      <p class="text-center">{{ err_tips }}</p>
    </div>

    <!-- 登录表单 -->
    <form class="form-horizontal" role="form">
      <div class="form-group">
        <label for="username" class="col-sm-2 control-label">账户</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="username" placeholder="邮箱/手机/账号" v-model="inUsername">
        </div>
      </div>
      <div class="form-group">
        <label for="passwd" class="col-sm-2 control-label">密码</label>
        <div class="col-sm-10">
          <input type="password" class="form-control" id="passwd" placeholder="不小于6位的密码" v-model="inPasswd">
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <div class="checkbox">
            <label>
              <input type="checkbox"> 记住登录
            </label>
          </div>
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button type="submit" class="btn btn-default" :disabled="disableLoginBtn" @click.prevent="doLogin">登录</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        err_status: false,
        err_tips: 'Defaut tips',
        username: '',
        password: '',
        disableLoginBtn: true
      }
    },
    computed: {
      inUsername: {
        get: function () {
          return this.username
        },
        set: function (value) {
          this.username = value
          if (this.username !== '' && this.password !== '') {
            this.disableLoginBtn = false
          } else {
            this.disableLoginBtn = true
          }
        }
      },
      inPasswd: {
        get: function () {
          return this.password
        },
        set: function (value) {
          this.password = value
          if (this.username !== '' && this.password !== '') {
            this.disableLoginBtn = false
          } else {
            this.disableLoginBtn = true
          }
        }
      }
    },
    methods: {
      doLogin () {
        var loginBody = {}
        loginBody.username = this.username
        loginBody.password = this.password
        this.$http.post('http://localhost:9000/user/v1/login', loginBody).then(function (res) {
          if (res.body.code === 200) {
            var respBody = res.body.data
            console.log('userToken:' + respBody.userToken)
          } else {
            console.log('biz error')
            console.log(res.body.message)
          }
        }, function (res) {
          console.log('error')
          console.log(res)
        })
      }
    }
  }
</script>
<style>
  .login-container {
    margin-top: 160px;
    margin-bottom: 100px;
  }
</style>
