<template>
  <div id="app" v-bind:class="{previewMode:previewMode}">
    <Topbar class="topbar" v-on:preview="preview"/>
    <main>
      <Editor v-bind:resume="resume" class="editor"/>
      <Preview v-bind:resume="resume" class="preview"/>
    </main>
    <el-button type="danger" id="exitPreview" v-on:click="exitPreview">退出预览</el-button>
  </div>
</template>

<script>
  import Topbar from './components/Topbar'
  import Editor from './components/Editor'
  import Preview from './components/Preview'
  export default {
    data(){
      return{
        previewMode:false,
        resume:{
          profile:{
            name:'',
            city:'',
            birth:''
          },
          workExperience:[
            {company:'',content:''},
          ],
          educationBg:[
            {school:'',duration:'',degree:''}
          ],
          skills:[
            {name:'',content:''}
          ],
          projects:[
            {name:'',content:''}
          ],
          contacts:{
            qq:'',
            wechat:'',
            email:'',
            phone:''
          }
        }
      }
    },
    methods:{
      preview(){
        this.previewMode = true 
      },
      exitPreview(){
        this.previewMode = false
      }
    },
    components: {
      Topbar,Editor,Preview
    },
    created(){
      this.$on('preview',() => {
        alert('你在秀尼玛呢')
      })
    }
  }
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  display:flex;
  flex-direction: column;
}
.topbar{
  position: relative;
  z-index: 1;
	box-shadow: 0 0 3px hsla(0,0,0,0.5);
	overflow: hidden;
}
.icon {
  width: 1em; height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
main{
  display: flex;
  flex:1;
  background:#ddd;
  > .editor{
    width: 40em;
    margin:16px 8px 16px 16px;
    background: #fff;
		box-shadow: 0 0 3px hsla(0,0,0,0.5);
		overflow: hidden;
  }
  > .preview{
    flex: 1;
    margin:16px 16px 16px 8px;
    background: #fff;
		box-shadow: 0 0 3px hsla(0,0,0,0.5);
		overflow: hidden;
  }
}
.previewMode > #topbar{
  display: none;
}
.previewMode #editor{
  display: none;
}
.previewMode #preview{
  max-width:800px;
  margin:16px auto;
}
#exitPreview{
  display: none;
}
.previewMode #exitPreview{
  display: inline-block;
  position: fixed;
  right: 16px;
  bottom: 16px;
}
</style>
