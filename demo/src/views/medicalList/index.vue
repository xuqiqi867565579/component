<template>
  <div class="nav-box">
    <!-- 下边是药品列表  他在medicalBox 里边的menu下边 -->
      <medicine-menu @change="menuChnage"></medicine-menu>
    <div class='medicine-list'>
      <scroll-view @onScrollBottom="onScrollBottom" :flag='flags' class='main-box'>
         <artical-list :list="detailList" titleName='common_name' description='specification'
        cover='' content_id='medicine_id'
        ></artical-list>
      </scroll-view>
    </div>
  </div>
</template>
<script>
import articalList from '@/components/articalList'
import medicineMenu from '@/views/medicalBox/components/Menu'
export default {
  props: {
  },
  components: {
    articalList,
    medicineMenu
  },
  data () {
    return {
      detailList: [],
      flags: true,
      query: {
        offset: 0,
        limit: 15,
        category_name: ''
      }
    }
  },
  computed: {
  },
  methods: {
    menuChnage (index, item) {
      this.query = Object.assign({}, this.query, {
        offset: 0,
        limit: 15,
        category_name: item
      })
      this.detailList = []
      this.getDetailList()// 点击的时候 ，筛选数据
    },
    // 儿童药箱详情
    getDetailList () {
      this.$api.medicine.medicineList(this.query).then((res) => {
        this.detailList = this.detailList.concat(res.map((ele) => {
          return {...ele, link: `/medicineDetail/${ele.medicine_id}`}
        }))
        this.flags = true
      })
    },
    onScrollBottom () {
      console.log('可以滚动了')
      this.flags = false
      this.query.offset += 1
      this.getDetailList()
    }
  },
  created () {
    this.getDetailList()
  },
  mounted () {
  }
}
</script>
<style lang="scss">
  .nav-box{
     @include wh(100%,auto);
  }
  .navdetail-box{
      @include wh(100%,auto);
      @include flex(row);
      justify-content: flex-start;
      flex-wrap: wrap;
  }
  .medicine-list{
    width:100%;
}
</style>
