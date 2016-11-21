<template>
   <div class="home-container">
       <div class="top">
           <h2>项目说明</h2>
           <div class="illustrates">
               <h4>技术栈:</h4>
               <ul>
                   <li>vue-2.0.1</li>
                   <li>vue-router-2.0.1</li>
                   <li>vue-resource-1.0.3</li>
                   <li>bootstrap-css-3.3.4</li>
               </ul>
           </div>

       </div>
       <div class="bottom">
           <button type="button" class="btn btn-lg btn-chat" @click="bootstrap">进入聊天</button>
       </div>
   </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'D&F webim'
    }
  },
  methods: {
      bootstrap: function(evt){
          let eventTarget = evt.target;
          this.$router.push("/selector/");
      }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import "../assets/scss/main.scss";
  @import "../assets/scss/wp.scss";

  .home-container{
      .top{
          padding: 20px;
          height: 500px;
          border-bottom: 2px solid #999999;
          h2{
              margin-bottom: 30px;
          }
          .illustrates{
            h4{
              margin-bottom: 15px;
            }
            ul{
              margin-left: 40px;
            }
          }
      }
      .bottom{
          height: 150px;
          position: relative;
          .btn-chat{
              display: block;
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%,-50%);
              &:focus{
                  outline: none;
              }
          }
      }
  }
</style>
