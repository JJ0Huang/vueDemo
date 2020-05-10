import axios from 'axios'
import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 默认配置
const TimeOut = 3000;
axios.defaults.timeout = TimeOut;

// 请求拦截
axios.interceptors.request.use(
  config => {
    // 发送请求前就开始显示‘加载中...’
    elementUI.Loading.service();
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 响应拦截
axios.interceptors.response.use(
  response => {
    elementUI.Loading.service().close();
    elementUI.Message.success('请求成功...')
    return response;
  },
  error => {
    elementUI.Loading.service().close();
    elementUI.Message.error('请求失败...')
    return Promise.reject(error);
  }
)