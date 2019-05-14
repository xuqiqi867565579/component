<template>
  <div class = "app">
    <main class = "main">
      <div>
        <div class='user-box'>
          <img class='user-pic' :src="user.avatar"/>
        <div>
          <p>{{user.nickname}}</p>
          <p>{{user.subscribe}}积分</p>
        </div>
        <div>
          <span type = 'button' class='btn'
          @click='checkIn'>签到</span>
        </div>
        </div>
        <ul class = 'user-list'>
          <li>
            <div>
              <svg-icon iconClass='toolbox'></svg-icon>
              <span>孩子信息</span>
            </div>
            <span>&gt;</span>
          </li>
          <li>
            <div>
              <svg-icon iconClass='toolbox'></svg-icon>
              <span>积分兑换</span>
            </div>
            <span>&gt;</span>
          </li>
          <li>
            <div>
              <svg-icon iconClass='ask'></svg-icon>
              <span>我的订单</span>
            </div>
            <span>&gt;</span>
          </li>
          <li>
            <div>
              <svg-icon iconClass='toolbox'></svg-icon>
              <span>分享海报</span>
            </div>
            <span>&gt;</span>
          </li>
        </ul>
      </div>
    </main>
    <el-footer></el-footer>
  </div>
</template>
<script>
import elFooter from '@/components/footernav'
import {mapState} from 'vuex'
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
    ...mapState(['user'])
  },
  methods: {
    checkIn () {
      this.$router.push('/checkin')
    }
  },
  created () {
  },
  mounted () {
  }
}
</script>
<style  lang="scss">
    .app{
        @include box_flex;
        @include direction(column);
        @include hidden;
        font-size: 14px;
    }
.main{
  @include wh(100%,100%);
  flex:1;
}
  .user-box{
    @include wh(100%,150px);
    display: flex;
    justify-content: space-between;
    padding:0 10px;
    color:#fff;
    background: #FF4444;
    align-items: center;
    .user-pic{
      border-radius: 50%;
      border:1px solid red;
      @include wh(60px,60px);
    }
    .btn{
      border-radius: 6px;
      @include wh(100px,60px);
      border:1px solid #fff;
      padding:6px
    }
  }
  .user-list{
    @include wh(100%,auto);
    li{
      @include wh(95%,44px);
      @include flex(row);
      border-bottom: 1px solid gray;
      text-indent:8px;
      justify-content: space-between;
      padding:0 10px;
      div{
        @include flex(row);
        justify-content: flex-start;
      }
    }
  }
</style>
