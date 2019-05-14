<template>
  <footer>
    <router-link
      v-for="(val, ind) in footerNav"
      :key="ind"
      :to="val.path"
      active-class="active"
    >
      <span>
        <svg-icon
          :iconClass="$route.path === val.path ? val.svg + '_active' : val.svg"
        ></svg-icon>
        <b>{{ val.title }}</b>
      </span>
    </router-link>
  </footer>
</template>
<script>
export default {
  props: {},
  components: {},
  data() {
    return {
      footerNav: [
        {
          id: 1,
          title: "育儿助手",
          path: "/home",
          svg: "toolbox"
        },
        {
          id: 2,
          title: "爸妈医学",
          path: "/dad",
          svg: "ask"
        },
        {
          id: 3,
          title: "会员中心",
          path: "/mine",
          svg: "mine"
        }
      ]
    };
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style  lang="scss">
footer {
  @include wh(100%, 50px);
  @include border1px("top");
  background: #fff;
  @include flex(row);
  position: fixed;
  bottom: 0;
  a {
    flex: 1;
    span {
      padding-top: 10px;
      @include flex();
      b {
        flex: 1;
        font-size: 12px;
      }
    }
  }
  .active {
    color: red;
  }
}
</style>
