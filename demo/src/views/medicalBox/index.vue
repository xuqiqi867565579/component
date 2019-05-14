<template>
  <div>
    <!-- <div v-for="(val,ind) in MdicineDetailList" :key="ind"> -->
        <h3>{{MdicineDetailList.medicine_name}}</h3>
        <p class="indication">{{MdicineDetailList.indication}}</p>
    <!-- </div> -->
    <div class='medical-detail'>
      <tabs>
      <tab-pane label="基本信息">
        <p>通用名:{{MdicineDetailList.medicine_name}}</p>
        <p>商品名称:{{MdicineDetailList.medicine_name}}</p>
        <p>分类名称:{{MdicineDetailList.category_name}}</p>
        <p>分类名称:{{MdicineDetailList.category_name}}</p>
        <p>药物成分:{{MdicineDetailList.drug_category}}</p>
      </tab-pane>
      <tab-pane label="注意事项">
        <p>注意事项:{{MdicineDetailList.interactions}}</p>
      </tab-pane>
      <tab-pane label="用法用量">
        <div>用量:
          <p>{{MdicineDetailList.precautions}}</p>
        </div>
      </tab-pane>
    </tabs>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import {Tabs, TabPane} from '../../components/tabbar'
export default {
  props: {
  },
  components: {
    Tabs,
    TabPane
  },
  data () {
    return {
      id: '',
      MdicineDetailList: []
    }
  },
  computed: {

  },
  methods: {
    getmMdicineDetail () {
      axios.get('/api/medicine/details', {
        params: {
          medicine_id: this.id
        }
      }).then((res) => {
        this.MdicineDetailList = res.data
        console.log(this.MdicineDetailList)
      }).catch((err) => {
        console.log(err)
      })
    }
  },
  created () {
    this.id = this.$route.params.id
    console.log(this.id)
    this.getmMdicineDetail()
  },
  mounted () {

  }
}
</script>
<style  lang="scss">
// .indication{
//   text-indent: 18px;
// }
// .medical-detail{
//   @include wh(100%,auto);
//   border:1px solid gray;
// }
</style>
