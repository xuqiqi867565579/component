<template>
  <div class='icon-list'>
    <a v-for='(val,ind) in icons' :key=ind href="javascript:;">
      <svg-icon :iconClass='val'></svg-icon>
      <p>{{val}}</p>
    </a>
  </div>
</template>
<script>
export default {
  props: {
  },
  components: {
  },
  data () {
    return {
      icons: []
    }
  },
  computed: {
  },
  methods: {
    getIcons () {
      const req = require.context('@/assets/icon', false, /\.svg$/)
      this.icons = req.keys().map((path) => {
        return path.substr(2).replace('.svg', '')
      })
    }
  },
  created () {
    this.getIcons()
  },
  mounted () {
  }
}
</script>
<style  lang="scss">
</style>
