<template>
  <div>
    <div v-html="list.content
    ">{{list.content}}</div>
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
      id: '',
      list: []
    }
  },
  computed: {

  },
  methods: {
    getList () {
      this.$api.article.articleDetail({
        content_id: this.id
      }).then((res) => {
        this.list = res
      })
    }
  },
  created () {
    this.id = this.$route.params.id
    this.getList()
  },
  mounted () {
  }
}
</script>
<style scoped lang="">
</style>
