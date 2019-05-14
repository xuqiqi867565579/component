<template>
  <div class='navdetail-box'>
      <div class='nav-detail' v-for="(item, index) in categorys" :key="index" @click="change(index)">
        <img class="nav-img" :src="ind===index?item.imgs:item.img" alt="">
        <a href="javascript:;">{{item.name}}</a>
      </div>
  </div>
</template>

<script>
export default {
  name: 'MedicineMenu',
  data () {
    return {
      ind: 0,
      categorys: [{
        name: '发热感冒药',
        picKey: 'fr',
        img: require('@/assets/images/1.png'),
        imgs: require('@/assets/images/1_1.png')
      }, {
        name: '过敏药',
        picKey: 'gm',
        img: require('@/assets/images/2.png'),
        imgs: require('@/assets/images/2_1.png')
      }, {
        name: '肠胃药',
        picKey: 'cw',
        img: require('@/assets/images/3.png'),
        imgs: require('@/assets/images/3_1.png')
      }, {
        name: '咳嗽药',
        picKey: 'ks',
        img: require('@/assets/images/4.png'),
        imgs: require('@/assets/images/4_1.png')
      }, {
        name: '营养药',
        picKey: 'yy',
        img: require('@/assets/images/5.png'),
        imgs: require('@/assets/images/5_1.png')
      }, {
        name: '外用药',
        picKey: 'wy',
        img: require('@/assets/images/6.png'),
        imgs: require('@/assets/images/6_1.png')
      }, {
        name: '其他药物',
        picKey: 'qt',
        img: require('@/assets/images/7.png'),
        imgs: require('@/assets/images/7_1.png')
      }]
    }
  },
  created () {
  },
  methods: {
    change (index) {
      console.log(index)
      this.ind = index
      // console.log(this.categorys[index].name)
      this.$emit('change', index, this.categorys[index].name)
    }
  }
}
</script>

<style lang="scss" scoped>
  .nav-detail{
      @include wh(25%,80%);
      @include flex();
      .nav-img{
        @include wh(60px,60px);
        // border-radius: 50%;
        // background: pink;
      }
      a{
        margin: 5px;
        text-decoration: none;
        color: #333;
        flex: 1;
        line-height:44px;
        font-size: 13px;
      }
      &:nth-child(2){
        margin-top: 5px;
      }
    }
</style>
