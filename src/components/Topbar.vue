<template>
  <div id="topbar">
    <div class="wrapper">
      <span class="logo">Resumer</span>

      <div class="actions">
        <div v-if="logined" class="userActions">
          <span class="welcome">Hello，{{user.username}}</span>
          <el-button type="danger" href="#" @click.prevent="signOut">登出</el-button>
        </div>
        <div v-else class="userActions">
          <el-button type="primary" href="#" @click.prevent="signUpDialogVisible = true" size="small">注册</el-button>
          <MyDialog title="注册" :visible="signUpDialogVisible" @close="signUpDialogVisible = false">
            <SignUpForm @success="signIn($event)"/>
          </MyDialog>
          <el-button href="#" @click.prevent="signInDialogVisible = true" size="small">登录</el-button>
          <MyDialog title="登录" :visible="signInDialogVisible"
            @close="signInDialogVisible = false">
            <SignInForm @success="signIn($event)"/>
          </MyDialog>
        </div>
        <el-button type="primary" v-on:click="preview" size="small">预览</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import MyDialog from './MyDialog'
import SignUpForm from './SignUpForm'
import SignInForm from './SignInForm'
import AV from '../lib/leancloud'
export default {
  name: 'Topbar',
  data(){
    return{
      signUpDialogVisible: false,
      signInDialogVisible: false,
    }
  },
  // computed:{
  //   user(){
  //     return this.$store.state.user
  //   },
  //   logined(){
  //     return this.user.id
  //   }
  // },
  components:{
    MyDialog,
    SignUpForm,
    SignInForm
  },
  methods:{
    signOut(){
      AV.User.logOut()
      this.$store.commit('removeUser')
    },
    signIn(user){
      this.signUpDialogVisible = false
      this.signInDialogVisible = false
      this.$store.commit('setUser', user)
    },
    preview(){
      this.$emit('preview')
    }
  }
}
</script>

<style scoped lang="scss">
  #topbar{
    background:#ffffff;
    box-shadow:0 1px 3px 0 rgba(0,0,0,0.25);
    >.wrapper{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 16px;
      font-size: 20px;
    }
    .logo{
      font-size:24px;
      color:#000000;
    }
  }
  .actions{
    display: flex;
    .userActions{
      margin-right: 2em;
      .welcome{
        margin-right: 2em;
        color:#999;
      }
    }
  }
</style>

