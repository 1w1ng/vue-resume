<template>
    <div class="page">
      <header>
        <!--顶部导航栏模块-->
        <Topbar/>
      </header>
      <main>
        <!--简历编辑模块-->
        <ResumeEditor/>
        <!--简历预览模块-->
        <ResumePreview/>
      </main>
    </div>
</template>

<script>

import 'normalize.css/normalize.css'
import './assets/reset.css'

import Topbar from './components/Topbar'
import ResumeEditor from './components/ResumeEditor'
import ResumePreview from './components/ResumePreview'

export default {
  name: 'app',
  data: function(){
    return {
      text: '你好'
    }
  },
  components: {Topbar, ResumeEditor, ResumePreview}
}
</script>

<style>
  .page{
     /*高度设置为浏览器可视化窗口高度，布局方式为flex，方向是垂直*/
    height: 100vh;
    display: flex;
    flex-direction: column;
    background: #EAEBEC;
  }
  .page>main{
    flex-grow: 1;  
  }
  .page>main{
    min-width: 1024px;
    max-width: 1440px;
    margin-top: 16px;
    margin-bottom: 16px;
    display: flex;
    justify-content: space-between;
    padding: 0 16px;
    width: 100%;
    align-self: center;
  }
  #resumeEditor{
    width: 35%;
    background: #444;
  }
  #resumePreview{
    flex-grow: 1;
    margin-left: 16px;
    background: #777;
  }
</style>
