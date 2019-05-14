<template>
  <div class="app">
    <tool-box class="main"></tool-box>
    <el-footer></el-footer>
  </div>
</template>
<script>
import elFooter from "@/components/footernav";
import toolBox from "@/views/toolBox";
export default {
  props: {},
  components: {
    elFooter,
    toolBox
  },
  data() {
    return {
      act: 0,
      data: []
    };
  },
  computed: {},
  methods: {
    handleClick(ind) {
      this.$router.push(`/navDetail/:${ind}`);
    }
  },
  created() {}
};
</script>
<style  lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style-type: none;
  text-decoration: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -moz-tap-highlight-color: rgba(0, 0, 0, 0);
  -ms-tap-highlight-color: rgba(0, 0, 0, 0);
  -o-tap-highlight-color: rgba(0, 0, 0, 0);
}
html,
body,
#app {
  width: 100%;
  height: 100%;
}
.app {
  @include flex();
}
.main {
  @include wh(100%, auto);
  .header {
    width: 100%;
    @include flex(row);
    div {
      flex: 1;
      img {
        @include wh(50px, 50px);
      }
      p {
        width: 100%;
        font-size: 14px;
      }
    }
  }
}
</style>
