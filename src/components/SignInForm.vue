<template>
  <div>
    <form @submit.prevent="signIn">
      <div class="row">
        <input type="text" required v-model="formData.username" placeholder="请输入用户名">
      </div>
      <div class="row">
        <input type="password" required v-model="formData.password" placeholder="请输入密码">
      </div>
      <div class="actions">
        <span>{{errorMessage}}</span>
        <input type="submit" value="登录">
        <slot></slot>
      </div>
    </form>
  </div>
</template>

<script>
import AV from '../lib/leancloud'
import getErrorMessage from '../lib/getErrorMessage'
import getAVUser from '../lib/getAVUser'
export default {
  name: 'SignInForm',
  data(){
    return {
      formData: {
        username: '',
        password: ''
      },
      errorMessage: ''
    }
  },
  methods: {
    //登录
    signIn(){
      let {username, password} = this.formData
      AV.User.logIn(username,password).then(()=> {
        //登录成功，将返回的用户参数传递给父组件，调用success所对应的父组件方法
        this.$emit('success', getAVUser())
      }, (error)=> {
        //登录失败,将返回的参数传递给错误处理函数，将数据渲染到界面上
        this.errorMessage = getErrorMessage(error)
      });
    }
  }
}
</script>

<style lang="scss" scoped>
  .row{
    margin:20px;
    >input{
      width:300px;
      height:32px;
      border:1px solid #eee;
    }
  }

  .actions{
    display: flex;
    justify-content: flex-end;
    margin:15px 25px;
    >span{
      line-height: 37px;
      font-size: 16px;
      color:red;
    }
    >input{
      &:hover{
        background:#000;
        opacity: .45;
        color:#fff;
      }
      margin: 0 5px;
      cursor: pointer;
      border: none;
      padding: 10px 20px;
    }
  }
</style>
