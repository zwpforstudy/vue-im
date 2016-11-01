<template>
  <div class="container">
    <!--<login></login>-->
    <div class="row">
      <div class="col-xs-6 col-md-4">
        <router-link to="/">首页</router-link>
      </div>
      <div class="col-xs-6 col-md-4">
        <router-link to="/login">登陆</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
  }
</script>

<style>
</style>
