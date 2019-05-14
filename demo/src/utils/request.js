import axios from "axios";

const request = axios.create({
  baseURL: "", // 设置统一的
  timeout: 1000
});
// 添加请求拦截器
request.interceptors.request.use(
  function(config) {
    // 在发送请求之前做些什么
    // console.log('loading...')
    return config;
  },
  function(error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);
// 添加响应拦截器
request.interceptors.response.use(
  function(response) {
    // 对响应数据做点什么
    // console.log("loading关闭");
    return response.data;
  },
  function(error) {
    // 对响应错误做点什么
    const status = error.response.status;
    if (status >= 500) {
      alert("服务器繁忙");
    } else if (status >= 400) {
      alert(error.response.message);
    }
    return Promise.reject(error);
  }
);
// const get = (url, data) =>
//   request.get(url, {
//     params: data
//   });

const get = (url, data) => {
  console.log(url, data, "url");
  return request.get(url, {
    params: data
  });
};
const post = (url, data) =>
  request.get(url, {
    params: data
  });
export { get, post };
