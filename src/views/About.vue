<template>
  <div class="about">
    <h1>This is an about page</h1>
    <el-button @click="ReqSuc">request success</el-button>
    <el-button @click="RquFail">request fail</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    ReqSuc() {
      // this.$api.getIndex()
      console.log(this.$api)
      // this.$api.Index.get();
      console.log(this.$api.Index())
      this.$api.Index().get();
    },
    RquFail() {
      this.axios("http://1234sicns.com");
    }
  }
};
</script>
