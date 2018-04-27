<template>
  <div>
    <h2>基本信息</h2>
    <el-form class="profile">
      <el-form-item label="姓名">
        <el-input size="small" v-model="profile.name"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-radio-group size="small" v-model="profile.sex">
          <el-radio-button label="男"></el-radio-button>
          <el-radio-button label="女"></el-radio-button >
        </el-radio-group>
      </el-form-item>
      <el-form-item label="所在城市">
        <el-input size="small" v-model="profile.city"></el-input>
      </el-form-item>
      <el-form-item label="年龄">
        <el-input size="small" v-model="profile.age"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: ['profile']
}
</script>