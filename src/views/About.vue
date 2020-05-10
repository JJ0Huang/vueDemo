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
      // alert('test');
      this.axios('http://huangjiajian.top/index.html')
    },
    RquFail(){
      this.axios('http://123456pp.com')
    }
  }
}
</script>
