import axios from 'axios'

export default{
  getIndex,
  Index:Index,
}
// 请求实例
function getIndex(){
  return axios.get('/index.html')
}

function Index(){
  return{
    get:()=>{
      return axios.get('/index.html')
    }
  }
}