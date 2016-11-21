<template>
  <div class="container">
      <div class="im-container">
        <router-view></router-view>
      </div>
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
    @import "./assets/scss/main.scss";
</style>
