<template>
  <div class="userlist-container">
    <h1>{{ msg }}</h1>
    <div class="users">
      <p v-for="user in users" class="bg-info">
        <a href="#" @click="connect" :userid="user.id">{{ user.name }}</a>
      </p>
    </div>
  </div>
</template>
<style>

</style>
<script>
    export default {
        name: "UserList",
        data () {
            return {
                msg: '可用用户',
                users: [
                {
                  name: "张飞",
                  id: 1
                },
                {
                  name: "关羽",
                  id: 2
                }
                ]
            }
        },
        methods: {
          connect: function(evt) {
            let eventTarget = evt.target
            let userId = eventTarget.getAttribute("userid")
            console.log(userId)
            this.$router.push("/chat/"+userId)
          }
        }
    }
</script>
