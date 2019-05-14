import {get} from '@/utils/request'
const api = {
  article: {
    getInit: (data) => get('/api/user/login-test', data),
    articleList: (data) => get('/api/article/list', data),
    articleDetail: (data) => get('/api/article/details', data)
  },
  medicine: {
    medicineInfo: (data) => get('/api/medicine/info', data),
    medicineList: (data) => get('/api/medicine/list', data)
  },
  user: {
    userInfo: (data) => get('/api/user/init-info', data)
  }
}

export default {
  install (Vue) {
    Vue.prototype.$api = api
  }
}
