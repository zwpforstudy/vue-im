<template>
  <div class="container">
    <!--<login></login>-->
    <div class="header">
      <div class="logo">D&F</div>
      <ul class="nav">
        <li>
          <router-link to="/">首页</router-link>
        </li>
        <li>
          <router-link to="/userlist">进入聊天</router-link>
        </li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'app',
    data: function () {
      return {
        welcome: '首页',
        selector: '进入聊天'
      }
    }
  }
</script>

<style lang="scss">
  html,body,div,ul,ol,li,p,h1,h2,h3,h4,h5,h6{
    margin: 0;
    padding: 0;
  }
  html,body,.container{
    width: 100%;
    height: 100%;
  }

  .container{
    position: relative;
  }
  .header{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    font-size: 0;
    overflow: hidden;
    background-color: #111111;
    .logo,.nav{
      float: left;
    }
    .logo{
      color: #d6e9c6;
      font-size: 40px;
      line-height: 60px;
      padding: 0 20px;
    }
    .nav{
      margin-left: 100px;
      li{
        font-size: 0;
        line-height: 60px;
        display: inline-block;
        *display: inline;
        *zoom: 1;
        a{
          color: #9da0a4;
          font-size: 16px;
          padding: 0 20px;
          background-color: inherit;
          &:hover{
            color: #f0f0f0;
          }
        }
      }
    }
  }
</style>
