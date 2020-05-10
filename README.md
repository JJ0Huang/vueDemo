# vueDemo
主要是运用了axios的拦截器
其中就配置了：
    axios.defaults.baseURL
    axios.defaults.timeout
    axios.interceptors.request
    axios.interceptors.response

其中，请求的URL和axios中的baseURL不一定一直都能用
若出现请求失败，请适当调整