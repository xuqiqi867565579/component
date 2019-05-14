<template>
  <div class="component-list">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    name: 'list'
  },
  components: {

  },
  data () {
    return {

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
<style scoped lang="scss">
  .compoent-list {
  .list-item {
    @include border1px(bottom);
    overflow: hidden;
    &:after {
      left: 10px;
    }
  }
  }
</style>
