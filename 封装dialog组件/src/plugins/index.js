import Dialog from '@/components/Dialog' //弹框
export default {
  install(Vue, options) {
    // console.log(options,'options')
    Vue.prototype.$dialog = (str) => {
      const classdialog = Vue.extend(Dialog) //生成类组件
      console.log(classdialog,'classdialog')
      const DialogCompontent = new classdialog({ 
        //组建实例化 
        propsData: {
          title: str,
        },
        mounted() {
            this.$destroy()
        }
      })
      console.log(DialogCompontent,'66666')
      // 生成虚拟dom
      DialogCompontent.$mount()
      document.body.appendChild(DialogCompontent.$el)
    }
  }
}
