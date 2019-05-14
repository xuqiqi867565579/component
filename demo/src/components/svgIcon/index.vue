<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="`#icon-${this.iconClass}`"></use>
  </svg>
</template>

<script>
export default {
  name: 'svg-icon',
  props: {
    iconClass: {
      type: String,
      required: true
    },
    className: {
      type: String
    }
  },
  computed: {
    svgClass () {
      if (this.className) {
        return 'svg-icon ' + this.className
      } else {
        return 'svg-icon'
      }
    }
  }
}
</script>

<style lang='scss'>
.svg-icon {
      @include wh(20px,20px)
  }
</style>
