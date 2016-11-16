<template>
  <div class="container">
    <!--<login></login>-->
    <div class="row">
      <div class="col-xs-6 col-md-4">
        <router-link to="/">{{ welcome }}</router-link>
      </div>
      <div class="col-xs-6 col-md-4">
        <router-link to="/userlist">{{ selector }}</router-link>
      </div>
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

<style>
</style>
