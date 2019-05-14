<template>
  <div class="tabs-content">
    <el-sticky :top='0'>
      <nav class="tabs-header">
        <a href="javascript:;" v-for="(val,ind) in menu" @click="change(ind)" :key="ind">{{val}}</a>
        <b class="tab-borderbottom" :style="styles"></b>
      </nav>
    </el-sticky>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import elSticky from '@/components/elSticky'
export default {
  name: 'Tabs',
  data () {
    return {
      menu: [],
      active: 0
    }
  },
  components: {
    elSticky
  },
  computed: {
    styles () {
      const width = window.innerWidth / this.menu.length
      return {
        left: width * this.active + (width * 0.5) / 2 + 'px',
        width: width * 0.5 + 'px'
      }
    }
  },
  methods: {
    initMenu () {
      this.$children.map(child => {
        this.menu.push(child.label)
        // console.log(this.menu)
      })
      // 子组件实例
      this.$children[this.active].isShow = true
    },
    change (ind) {
      this.active = ind
      this.$children.forEach((child, index) => {
        if (index === ind) {
          this.$children[index].isShow = true
        } else {
          this.$children[index].isShow = false
        }
      })
      this.$emit('handletab', ind)
    }
  },
  created () {},
  mounted () {
    this.$children = this.$children.filter(child => {
      return child.$vnode.tag.indexOf('TabPane') !== -1
    })
    this.initMenu()
  }
}
</script>
<style  lang="scss">
.tabs-content{
  @include wh(100%, auto);
}
.tabs-header {
  @include wh(100%, 44px);
  @include flex(row);
  @include border1px("top");
  @include border1px('bottom');
  position: relative;
  a {
    flex: 1;
    @include wh(100%, auto);
    line-height:44px;
    color:#333;
    text-decoration: none;
  }
  .tab-borderbottom {
    position: absolute;
    bottom:0;
    height: 2px;
    border-bottom: 2px solid #ff4444;
    transition: left 0.5s linear;
  }
  .active {
    color: red;
  }
}
.content {
  width: 100%;
}
</style>
