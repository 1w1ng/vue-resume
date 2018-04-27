<template>
  <div>
    <h2>联系方式</h2>
    <el-form class="contacts">
      <el-form-item label="手机">
        <el-input size="small" v-model="contacts.phone"></el-input>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input size="small" v-model="contacts.mail"></el-input>
      </el-form-item>
      <el-form-item label="微信">
        <el-input size="small" v-model="contacts.wechat"></el-input>
      </el-form-item>
      <el-form-item label="GitHub">
        <el-input size="small" v-model="contacts.github"></el-input>
      </el-form-item>
    </el-form>
  </div>  
</template>
<script>
export default {
  props: ['contacts']
}
</script>