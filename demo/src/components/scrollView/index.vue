<template>
  <div>
    <slot></slot>
    <span v-show="this.loading">正在加载</span>
  </div>
</template>
<script>
export default {
  name: 'scrollview',
  props: {
    flag: {
      type: Boolean,
      default: true
    }
  },
  components: {

  },
  data () {
    return {
      loading: false
    }
  },
  watch: { // 监听外边数据加载
    flag (newVal) {
      this.loading = !newVal
    }
  },
  computed: {

  },
  methods: {
    initEevent () {
      window.addEventListener('scroll', () => {
        // body的滚动高度 - 页面滚动条的top值 === 可见区域高度
        const scrollTop = document.documentElement.scrollTop// 滚动距离
        const bodyHeight = document.body.scrollHeight // 最大的高度
        const windowHeight = window.innerHeight// 可是高度
        // console.log(bodyHeight, scrollTop, windowHeight)
        if (bodyHeight - scrollTop - 20 <= windowHeight) {
          // console.log(this.flag)
          if (this.flag) {
            this.scrollBottom()
          }
        }
      })
    },
    scrollBottom () {
      this.$emit('onScrollBottom')
    }
  },
  created () {
  },
  mounted () {
    this.initEevent()
  }
}
</script>
<style scoped lang="scss">

</style>
