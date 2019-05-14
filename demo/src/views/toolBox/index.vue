<template>
  <div class="scroll-box">
    <Menu></Menu>
    <scroll-view
      @onScrollBottom="onScrollBottom"
      :flag="flags"
      class="main-box"
    >
      <tabs @handletab="handletab">
        <tab-pane label="精彩文章">
          <artical-list :list="list"></artical-list>
        </tab-pane>
        <tab-pane label="安全用药">
          <artical-list :list="list"></artical-list>
        </tab-pane>
      </tabs>
    </scroll-view>
  </div>
</template>
<script>
import { Tabs, TabPane } from "../../components/tabbar";
import articalList from "../../components/articalList";
import Menu from "../menu";
export default {
  props: {},
  components: {
    Tabs,
    TabPane,
    articalList,
    Menu
  },
  data() {
    return {
      type_id: 2,
      list: [],
      flags: true,
      offset: 0
    };
  },
  computed: {},
  methods: {
    handletab(ind) {
      this.list = [];
      this.offset = 0;
      this.type_id = ind === 0 ? 2 : 1;
      this.getList(ind);
    },
    getList() {
      console.log(this, "this");
      this.$api.article.getInit();
      this.$api.article
        .articleList({
          limit: 15, // 条数
          offset: this.offset * 15, // 开始值
          type_id: this.type_id
        })
        .then(res => {
          this.list = this.list.concat(
            res.map(ele => {
              return { ...ele, link: ele.url };
            })
          );
          this.flags = true;
        });
    },
    onScrollBottom() {
      console.log("可以滚动了");
      this.flags = false;
      this.offset += 1;
      this.getList();
    }
  },
  created() {
    this.getList();
  },
  mounted() {}
};
</script>
<style lang="scss">
.main-box {
  @include wh(100%, auto);
}
</style>
