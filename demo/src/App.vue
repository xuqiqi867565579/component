<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
import {mapState, mapMutations} from 'vuex'
export default {
  name: 'App',
  data () {
    return {
    }
  },
  created () {
    this.getUserInformation()
  },
  computed: {
    ...mapState(['user'])
  },
  methods: {
    ...mapMutations(['getUser']),
    getUserInformation () {
      if (this.user) {
        this.$api.user.userInfo().then((res) => {
          return this.getUser(res.user)// 把数据传到了store中
        })
      }
    }
  }
}
</script>
<style>
</style>
