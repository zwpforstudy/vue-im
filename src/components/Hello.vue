<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>技术栈:</h2>
    <ul>
      <li>vue-2.0.1</li>
      <li>vue-router-2.0.1</li>
      <li>vue-resource-1.0.3</li>
      <li>bootstrap-css-3.3.4</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'D&F webim'
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

</style>
