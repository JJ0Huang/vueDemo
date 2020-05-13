import axios from 'axios'

export default{
  getIndex,
}
// 请求实例
function getIndex(){
  return axios.get('/index.html')
}