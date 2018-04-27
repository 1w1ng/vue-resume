<template>
  <div id="app" v-bind:class="{previewMode: previewMode}">
    <Topbar class="topbar" v-on:preview="preview" :resume.sync="resume"/>
    <main>
      <Editor v-bind:resume="resume" class="editor" :resume.sync="resume"/>
      <Preview v-bind:resume="resume" class="preview"/>
    </main>
    <el-button id="exit-preview" :plain="true" size="small" type="danger" v-on:click="exitPreview">
      退出预览
    </el-button>
    <el-button id="print" :plain="true" size="small" type="warning" v-on:click="print">
      打印简历
    </el-button>
  </div>
</template>

<script>

  import Topbar from './components/Topbar'
  import Editor from './components/Editor'
  import Preview from './components/Preview'


  export default {
  data(){
    return{
      previewMode: false,
      resume: {
        profile: {
          name: '',
          sex: '',
          city: '',
          age: ''
        },
        contacts: {
          phone: '',
          mail:'',
          wechat: '',
          github:''
        },
        companyHistory: [
          {company: '',time: '',content: ''}
        ],
        skill: [
          {name: '',content: ''}
        ],
        project: [
          {name: '',content: ''}
        ],
        educationHistory: [
          {school: '',degree: '',duration: ''}
        ]
      }
    }
  },
  components: {
    Topbar, Editor, Preview
  },
  methods: {
    preview(){
      this.previewMode = true
    },
    exitPreview(){
      this.previewMode = false
    },
    print(){
      window.print()
    },
    getTime(time){
      let year = time.getFullYear()
      let month = time.getMonth()
      let day = time.getDay()
      return 1
      return year+'-'+month
    }
  }
}
</script>

<style lang="scss">
  #app{
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    height: 100vh;
    flex-direction: column;
    background: #eaebec;
  }
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
  .topbar{
    position: relative;
    box-shadow: 0 0 3px hsla(0,0,0,0.5);
    z-index: 1;
  }
  #app main {
    display: flex;
    flex: 1;
    > .editor{
      min-width: 35%;
      margin: 16px 8px 16px 16px;
      background:#fff;
      border-radius: 4px;
      overflow: hidden;
      box-shadow: 0 0 3px hsla(0,0,0,0.5);
    }
    > .preview{
      flex: 1;
      background: #fff;
      margin: 16px 16px 16px 8px;
      overflow: auto;
      border-radius: 4px;
      box-shadow: 0 0 3px hsla(0,0,0,0.5);
    }
  }

  .previewMode{
    #topbar{
      display: none;
    }
    #exit-preview{
      display: inline-block;
      position: fixed;
      right: 32px;
      bottom: 32px;
    }
    main{
      #editor{
        display: none;
      }
      #preview{
        max-width: 800px;
        margin: 32px auto;
      }
    }
  }
  #exit-preview,#print{
    display: none;
  }
</style>