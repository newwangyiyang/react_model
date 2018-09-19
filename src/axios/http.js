import axios from 'axios'
import qs from 'qs'

axios.defaults.timeout = 8000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// axios.defaults.baseURL = 'https://www.tdaifu.cn:8443/taodoctor/rest/';
//POST传参序列化
axios.interceptors.request.use((config) => {
  if (config.method === 'post') {
    config.data = qs.stringify(config.data);
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});
//code状态码200判断
axios.interceptors.response.use((res) => {
  if (res.status !== 200) {
    return Promise.reject(res);
  }
  return res.data;
}, (error) => {
  return Promise.reject(error);
});

export default axios;