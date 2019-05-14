<template>
  <div v-show="isShow">
    <slot ></slot>
  </div>
</template>
<script>
export default {
  name: 'TabPane',
  props: {
    label: {
      type: String,
      default: '',
      required: true
    }
  },
  components: {

  },
  data () {
    return {
      isShow: false
    }
  },
  computed: {

  },
  methods: {

  },
  created () {

  },
  mounted () {

  }
}
</script>
<style  lang="scss">
</style>
