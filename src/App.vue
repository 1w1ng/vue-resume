<template>
  <div id="app" v-bind:class="{previewMode: previewMode}">
    <header>
      <Topbar class="topbar" v-on:preview="preview"/>
    </header>
    <main>
      <Editor v-bind:resume="resume" class="editor"/>
      <Preview v-bind:resume="resume" class="preview"/>
    </main>
    <el-button id="exit-preview" :plain="true" size="small" type="danger" v-on:click="exitPreview">
      Exit
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

  import AV from './lib/leancloud'
  import getAVUser from './lib/getAVUser'


  export default {
  name: 'app',
  data(){
    return{
      previewMode: false,
      resume: {
        profile: {
          name: '',
          sex: '',
          city: '',
          birthYear: '',
          birthMonth: ''
        },
        companyHistory: [
          {company: '',timeStart: '',timeEnd: '',job: '',content: ''}
        ],
        educationHistory: [
          {school: '',durationStart: '',durationEnd: '',degree: '',major: '',content: ''}
        ],
        skill: [
          {list: ''}
        ],
        project: [
          {name: '',timeStart: '',timeEnd: '',content: ''}
        ],
        yourself:{content: ''},
        call: [
          {phone: '',mail:'',qq:'',wechat: '',other:''}
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
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  background: #EAEBEC;
}
.topbar{
  box-shadow: 0 0 3px hsla(0, 0, 0, .6);
  position: relative;
  z-index: 1;
}
.icon {
  width: 1em; height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
#app main{
  flex: 1;
  display: flex;
  background: #ddd;
  .editor{
    background: #fff;
    min-width: 30%;
    margin: 16px 8px 16px 16px;
    box-shadow: 0 0 3px hsla(0, 0, 0, .6);
    border-radius: 5px;
    overflow: hidden;
  }
  .preview{
    background: #fff;
    flex: 1;
    margin: 16px 16px 16px 8px;
    box-shadow: 0 0 3px hsla(0, 0, 0, .6);
    border-radius: 5px;
    overflow: auto;
  }
  &:hover+.previewMode #exit-preview{
    display: none;
  }
}
#app.previewMode{
  #topbar{
    display: none;
    color: #48576A;
  }
  #editor{
    display: none;
    color: #48576A;
  }
  #preview{
    max-width: 700px;
    margin: 20px auto;
    .bg{
      display: none;
    }
    &:hover div.bg{
      display: none;
    }
  }
  #exit-preview{
    display: block;
    position: fixed;
    top: 12px;
    left: 12px;
  }
  #print{
    display: block;
    position: fixed;
    top: 44px;
    left: 12px;
    margin-left: 0;
  }
}
#exit-preview,#print{
  display: none;
}
/*scroll*/
::-webkit-scrollbar {
    width: 4px; /*垂直方向滚动条宽度*/
}
      /*滚动条轨道*/
::-webkit-scrollbar-track {
    background-color: #eee;
} 
      /*滑块*/
::-webkit-scrollbar-thumb {
    background-color: #C2C1C3;
    border-radius: 2px;
}
@media print {
  #app.previewMode #print,#app.previewMode #exit-preview{
    display: none;
  }
}
@media (max-width: 768px){
  #app{
    .topbar{
      box-shadow: none;
      border-bottom: 1px solid #ccc;
      .el-button+.el-button{
        margin-left: 4px;
      }
    }
    main .editor{
      width: 100%;
      margin: 0;
      box-shadow: none;
      border-radius: 0;
      nav{
        width: 15%;
        max-width: 60px;
        ol li{
          border-bottom: 1px solid #34B76F;
          &.active{
            border-bottom: none;
            span.hover-title{
              display: none;
            }
            .icon{
              top: 0;
            }
            &:hover span.hover-title{
              display: none;
            }
          }
          .icon{
            position: relative;
            top: -10px;
          }
          span.hover-title{
            display: block;
            color: #eee;
            font-size: 12px;
            line-height: 14px;
            padding: 0;
            top: 34px;
            left: 50%;
            transform: translateX(-50%);
            background-color: transparent;
            position: absolute;
            z-index: 1;
            &::after{
              display: none;
            }
          }
          &.active span.hover-title{
            color: #000;
          }
        }
      }
      .panels li:nth-child(2),.panels li:nth-child(3),.panels li:nth-child(6){
        .el-select-dropdown{
          width: 100px;
        }
        .el-form-item:nth-child(2) {
          margin-bottom: 120px;
        }
        /*birth*/
        .el-input-group:nth-child(1){
          width: 100%;
          position: absolute;
          left: 0;
          top: 40px;
        }
        .to{
          position: absolute;
          top: 75px;
          left: 0;
          line-height: 40px;
          margin-left: 7px;
        }
        .el-input-group:nth-child(3){
          width: 100%;
          position: absolute;
          left: 0;
          top: 120px;
        }
      }
    }
    main .preview{
      display: none;
    }
  }
  #app.previewMode{
    #topbar{
      display: block;
      line-height: 28px;
      .actions{
        display: none;
      }
    }
    #preview{
      display: block;
      margin: 0;
      max-width: none;
      box-shadow: none;
      border-radius: 0;
    }
    #exit-preview{
      display: block;
      position: fixed;
      top: 12px;
      left: 100%;
      transform: translateX(-120%);
      z-index: 2;
    }
    #print{
      display: none;
    }
  }
}
</style>