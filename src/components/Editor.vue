<template>
  <div id="editor">
    <nav class="sidebar" v-cloak>
      <ol>
        <li class="animated" v-for="i in tabCount" v-bind:class="{active: currentTab === i}" v-on:click="currentTab = i" :key="i">
          <svg class="icon" v-bind:class="'icon-'+icons[i]">
            <use v-bind:xlink:href="'#icon-'+icons[i]"></use>
          </svg>
          <span class="hover-title">{{title[i]}}</span>
        </li>
      </ol>
    </nav>
    <ol class="panels">
      <li v-bind:class="{active: currentTab === 0}">
        <ProfileEditor v-bind:profile="resume.profile"/>
      </li>
      <li v-bind:class="{active: currentTab === 1}">
        <ContactEditor v-bind:contacts="resume.contacts"/>
      </li>
      <li v-bind:class="{active: currentTab === 2}">
        <WorkEditor v-bind:items="resume.companyHistory" v-bind:labels="{company:'公司',time:'时间',content:'工作内容'}" title="工作经历"/>
      </li>
      <li v-bind:class="{active: currentTab === 3}">
        <SkillEditor v-bind:items="resume.skill" v-bind:labels="{name:'技能名称',content:'技能描述'}" title="技能清单" />
      </li>
      <li v-bind:class="{active: currentTab === 4}">
        <ProjectEditor v-bind:items="resume.project" v-bind:labels="{name:'项目名称',content:'项目内容'}" title="项目经验" />
      </li>
      <li v-bind:class="{active: currentTab === 5}">
        <EducationEditor v-bind:items="resume.educationHistory" v-bind:labels="{school:'学校',degree:'学历',duration:'时间'}" title="学习经历"/>
      </li>
    </ol>
  </div>
</template>

<script>
import ProfileEditor from './ProfileEditor'
import ContactEditor from './ContactEditor'
import WorkEditor from './WorkEditor'
import SkillEditor from './SkillEditor'
import ProjectEditor from './ProjectEditor'
import EducationEditor from './EducationEditor'

export default {
  components: {
    ProfileEditor,ContactEditor,WorkEditor,SkillEditor,ProjectEditor,EducationEditor 
  },
  props:['resume'],
  data(){
    return{
      currentTab: 0,
      tabCount: this.initTabcount(),
      icons: ['profile','contact','work','skills','project','education'],
      title: ['基本信息','联系方式','工作经历','技能清单','项目经验','学习经历']
    }
  },
  methods:{
    initTabcount: function() {
      var count = [];
      for (var i = 0; i < 6; i++) {
        count[i] = i
      }
      return count
    }
  }
}
</script>


<style lang='scss'>
#editor{
  min-height: 100px;
  display: flex;
}
#editor>.sidebar {
  background: #727A82;
  width: 80px;
}
.sidebar>ol>li {
  height: 72px;
  /* padding: 16px 0; */
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items:center;
  flex: 1;
  cursor: pointer;
  transition: .5s;
}
.sidebar>ol>li:hover{
  background-color: #C7D2DD;
}
.sidebar>ol>li:first-child{
  margin-top: 16px;
}
.sidebar>ol>li>.icon {
  width: 24px;
  height: 24px;
  fill: #fff;
}
.sidebar .hover-title{
  margin-top: 5px;
  font-size: 12px;
  transition: .5s;
  display: none;
  animation-delay: 0s;
  animation-duration: 0.5s;
}
.sidebar:hover .hover-title{
  display: block;
  color:#eee;
}
.sidebar>ol>li.active {
  background: #fff;
}
.sidebar>ol>li.active>.icon {
  fill: #1F2D3D;
}
.panels {
  overflow: auto;
  flex: 1;
}
.panels h2{
  text-align: center;
  color:#606F7E;
  margin:12px 0 12px 0;
}
.panels>li {
  display: none;
  padding: 32px;
}
.panels>li.active {
  display: block;
}
.panels>li>el-form>el-input {
  width: 100%;
}
.one-work-history {
  position: relative;
}
.one-work-history>.el-icon-delete {
  position: absolute;
  right: 0;
  top: 16px;
  font-size: 12px;
  z-index: 1;
  cursor: pointer;
  &:hover{
    color:#888;
  }
}
.one-work-history+.add-block{
  margin:10px 0;
  text-align: center;
  margin: 0 auto;
}
</style>