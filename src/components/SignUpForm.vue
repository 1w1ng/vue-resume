<template>
  <div>
    <form @submit.prevent="signUp">
      <div class="row">
        <input type="text" v-model="formData.username" required placeholder="请输入用户名">
      </div>
      <div class="row">
        <input type="password" v-model="formData.password" required placeholder="请输入密码">
      </div>
      <div class="actions">
        <span>{{errorMessage}}</span>
        <slot></slot>
        <input type="submit" value="注册">
      </div>
    </form>
  </div>
</template>

<script>
import AV from '../lib/leancloud'
import getErrorMessage from '../lib/getErrorMessage'
import getAVUser from '../lib/getAVUser'

export default {
  name:'SignUpForm',
  data(){
    return {
      formData: {
        username: '',
        password: ''
      },
      errorMessage:''
    }
  },
  created(){
  },
  methods:{
    signUp(){
      let {username, password} = this.formData
      var user = new AV.User();
      user.setUsername(username);
      user.setPassword(password);
      user.signUp().then(() =>{
        this.$emit('success',getAVUser())
      }, (error)=> {
        this.errorMessage = getErrorMessage(error)
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.row {
  margin: 20px;
  >input {
    width: 300px;
    height: 32px;
    border: 1px solid #ebecee;
  }
}
.actions {
  display: flex;
  justify-content: flex-end;
  margin: 15px 25px;
  >span {
    line-height: 37px;
    font-size: 16px;
    color: red;
  }
  >input {
    &:hover {
      background: #000;
      opacity: .45;
      color: #fff;
    }
    margin: 0 5px;
    cursor: pointer;
    border: none;
    padding: 10px 20px;
  }
}
</style>