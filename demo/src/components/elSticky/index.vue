<template>
  <div class="sticky">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Sticky'
}
</script>

<style lang='scss' scoped>
.sticky {
  @include wh(100%,auto);
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  background: #fff;
  z-index: 99;
}
</style>
