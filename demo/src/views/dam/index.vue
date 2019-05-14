<template>
  <div>
    <main class = "main">
      问爸妈
    </main>
    <el-footer></el-footer>
  </div>
</template>
<script>
import elFooter from '@/components/footernav'
export default {
  props: {

  },
  components: {
    elFooter
  },
  data () {
    return {

    }
  },
  computed: {

  },
  methods: {

  },
  created () {

  },
  mounted () {

  }
}
</script>
<style  lang="scss">
  *{
  margin: 0;
  padding: 0;
  list-style-type: none;
  text-decoration: none;
  box-sizing: border-box
}
#app,html,body,.app{
      @include wh(100%,100%);
      @include sizing;
    }
    .app{
        @include box_flex;
        @include direction(column);
        @include hidden;
    }
.main{
  @include wh(100%,100%);
  flex:1;
}
footer{
    @include wh(100%,50px);
    @include border1px('top');
    background:#fff;
    @include box_flex;
            @include justify(space-between);
            text-align: center;
            position: fixed;
            bottom:0;
           a {
               span{
                   padding-top:10px;
                   display:flex;
                   flex-direction: column;
                   justify-content: space-between;
                   align-items: center;
                   b{
                      font-size:12px;
                   }
           }
           }
           .active{
                color:red;
            }
        }
</style>
