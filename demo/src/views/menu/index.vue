<template>
  <div class='menu'>
    <nav>
      <a v-for ="(val,ind) in menu"
      :key=ind
      @click='clickList(val.id)'
      href='javascript:;'>
        <b>
          <svg-icon :iconClass='val.icon'></svg-icon>
        </b>
        <span>{{val.title}}</span>
      </a>
    </nav>
  </div>
</template>
<script>
export default {
  name: 'menus',
  props: {

  },
  components: {

  },
  data () {
    return {
      menu: [
        {
          id: 1,
          title: '儿童用药',
          icon: 'child'
        },
        {
          id: 2,
          title: '附近药店',
          icon: 'toolbox'
        },
        {
          id: 3,
          title: '智能医生',
          icon: 'doctor'
        }
      ]
    }
  },
  computed: {

  },
  methods: {
    clickList (id) {
      this.$router.push(`/navDetail/${id}`)
    }
  },
  created () {

  },
  mounted () {

  }
}
</script>
<style scoped lang="scss">
  .menu{
    margin-top: 10px;
    nav{
      @include wh(100%,auto);
      @include flex(row);
      a{
        flex:1;
        color:#333;
        padding:5px;
         @include flex();
        b{
          @include wh(60px,60px);
          border-radius: 100%;
           @include flex();
          img{
            @include wh(50%,auto)
          }
        }
        span{
          margin-top: 5px;
          font-size: 13px
        }
        &:nth-child(1) b{
          background-image: linear-gradient(#BA65EA,#CD62E3)
        }
        &:nth-child(2) b{
          background-image: linear-gradient(#fda947,#feb942)
        }
        &:nth-child(3) b{
          background-image: linear-gradient(#BA65EA,#CD62E3)
        }
      }
    }
  }
</style>
