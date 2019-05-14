<template>
  <div class="checkin">
    <div class="checkin-box">
      <span>今日已签到</span>
    </div>
    <div class='bottom-box'>
        <span class="check-in">
          <b>-您已连续签到
            <span class='days'>01</span>
            天-</b>
        </span>
        <span class='nextday'>明天继续签到可获得2积分</span>
        <div class='checkin-list'>
          <span>+1</span>
          <span>+2</span>
          <span>+3</span>
          <span>+4</span>
          <span>+5</span>
        </div>
    </div>
  </div>
</template>
<script>
// import axios from 'axios'
export default {
  props: {
  },
  components: {
  },
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
    checkIn () {
      // axios.post('/api/attendance/submit').then((res) => {
      //   console.log(res)
      // })
    }
  },
  created () {
    this.checkIn()
  },
  mounted () {
  }
}
</script>
<style scoped lang="scss">
  #app,
  html,
  body{
      width: 100%;
      height: 100%;
  }
  .checkin{
    @include wh(100%,100%);
    background: #FF4444;
    .checkin-box{
      margin:10px auto;
      text-align: center;
      @include wh(130px,130px);
      line-height: 130px;
      border-radius: 50%;
      border:1px solid gray;
    }
    .bottom-box{
      margin:20px auto;
      background: #fff;
      border-radius: 5px;
      text-align: center;
      @include wh(90%,auto);
      .check-in{
        @include flex();
        @include wh(100%,44px);
        b{
          font-size:16px;
          .days{
            color:#FF4444;
            font-weight: bold;
            font-size: 18px;
          }
        }
      }
      .nextday{
        margin:0 auto;
        @include wh(100%,44px);
        line-height: 44px;
        color:gray;
      }
      .checkin-list{
        @include wh(100%,44px);
        @include flex(row);
        span{
          margin:5px;
          @include wh(30px,30px);
          line-height:30px;
           border-radius: 50%;
           border:1px solid gray;
           background: gray;
           color:#fff;
        }
      }
    }
  }
</style>
