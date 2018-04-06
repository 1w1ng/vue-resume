<template>
  <div id="topbar">
    <div class="logo">
      Resumer
    </div>
    <div class="actions">
      <el-button type="primary">注册</el-button>
      <el-button>登录</el-button>
      <el-button v-on:click="preview" type="primary" round>预览</el-button>
    </div>
  </div>
</template>

<style lang="scss">
  #topbar{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px;
    font-size:20px;
  }
</style>

<script>
  export default {
    methods:{
      preview(){
        this.$emit('preview')
      }
    }  
  }
</script>

