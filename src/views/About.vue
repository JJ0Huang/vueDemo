<template>
  <div class="about">
    <h1>This is an about page</h1>
    <el-button @click="ReqSuc">request success</el-button>
    <el-button @click="RquFail">request fail</el-button>
  </div>
</template>

<script>
export default {
  methods:{
    ReqSuc(){
      // this.axios('http://huangjiajian.top/index.html').then(res=>{console.log(res.request.responseText)})
      // 上面的方式也是可以的，下面的url写法是基于axios的baseURL的
      this.axios('/index.html').then(res=>{console.log(res.request.responseText)})
    },
    RquFail(){
      this.axios('http://1234sicns.com')
    }
  }
}
</script>
