import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    user: {}
  },
  mutations: { // 同步的  对应的是commit  $store.state.commit
    getUser (state, payload) { // payload 相当于redux 中的action
      state.user = payload
      // console.log(payload)
    }
    // set_info (state, payload) {
    //   state.user = payload
    // },
    // changeAge (state, newAge) {
    //   state.user.age += newAge
    // }
  }
  // 处理异步逻辑
  // actions: {  对应的是dispatch  $store.state.dispatch
  //   changeAge (context, newAge) {
  //     setTimeout(() => {
  //       context.commit('changeAge', newAge)
  //     }, 2000)
  //   }
  // }
})
export default store
