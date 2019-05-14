import SvgIcon from '../components/svgIcon'
const req = require.context('@/assets/icon', false, /\.svg$/)
const requireAll = (requireContext) => {
  // console.log(requireContext.keys().map(requireContext))
  return requireContext.keys().map(requireContext)
}
requireAll(req)
// 这行代码就会去 file 文件夹（不包含子目录）下面的找所有文件名以 .file.js 结尾的文件能被 require 的文件。
// 就是说可以通过正则匹配引入相应的文件模块。
// // require.context有三个参数：
// directory：说明需要检索的目录
// useSubdirectories：是否检索子目录
// regExp: 匹配文件的正则表达式
export default {
  install (Vue) {
    Vue.component('svg-icon', SvgIcon)
  }
}
