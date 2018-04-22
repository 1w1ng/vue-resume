<template>
  <div id="editor">
    <nav>
      <ol>
        <li v-for="i in [0,1,2,3,4,5,6]" v-bind:class="{active: currentTab === i}" v-on:click="currentTab = i">
            <svg class="icon" aria-hidden="true">
              <use v-bind:xlink:href="`#icon-${icons[i]}`"></use>
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
        <CallEditor v-bind:items="resume.call"/>
      </li>
      <li v-bind:class="{active: currentTab === 2}">
        <CompanyHistoryEditor v-bind:items="resume.companyHistory"/>
      </li>
      <li v-bind:class="{active: currentTab === 3}">
        <SkillEditor v-bind:items="resume.skill"/>
      </li>
      <li v-bind:class="{active: currentTab === 4}">
        <ProjectEditor v-bind:items="resume.project"/>
      </li>
      <li v-bind:class="{active: currentTab === 5}">
        <EducationHistoryEditor v-bind:items="resume.educationHistory"/>
      </li>
      <li v-bind:class="{active: currentTab === 6}">
        <h2>自我评价</h2>
        <el-form>
            <el-input type="textarea" class="success" size="small" :autosize="{ minRows: 4}" placeholder="请输入内容" v-model="resume.yourself.content">
            </el-input>
        </el-form>
      </li>
    </ol>
  </div>
</template>

<script>
import ProfileEditor from './ProfileEditor'
// import CompanyHistoryEditor from './CompanyHistoryEditor'
// import EducationHistoryEditor from './EducationHistoryEditor'
// import CallEditor from './CallEditor'
// import SkillEditor from './SkillEditor'
// import ProjectEditor from './ProjectEditor'
export default {
  props:['resume'],
  data(){
    return{
      currentTab: 0,
      icons: ['profile','contact','work','skills','project','education','evaluate'],
      title: ['基本信息','联系方式','工作经历','技能清单','项目经验','教育经历','自我评价']
    }
  },
  components: {
    ProfileEditor
    // ProfileEditor, CompanyHistoryEditor, EducationHistoryEditor, CallEditor, SkillEditor, ProjectEditor
  }
}
</script>


<style lang='scss'>
/*下拉按钮宽度*/
.el-input .el-select .el-input{
  width: 36px;
} 
/*第一个面板*/
#editor .panels li:nth-child(1){
  .el-form-item:nth-child(2) {
    margin-bottom: 40px;
  }
  .el-radio-button:nth-child(1){
    // width: 20px;
    position: absolute;
    left: 0;
    top: 40px;
  }
  .el-radio-button:nth-child(2){
    position: absolute;
    left: 32px;
    top: 40px;
  }
  /*birth*/
  .el-input-group:nth-child(1){
    width: 110px;
    position: absolute;
    left: 0;
    top: 40px;
  }
  .el-input-group:nth-child(2){
    width: 110px;
    position: absolute;
    margin-left: 4px;
    left: 110px;
    top: 40px;
  }.el-input-group{
    width: 34%;
  }
}
/*选择框*/
.el-select-dropdown{
    width: 100px;
}
/*第二个面板*/
#editor .panels li:nth-child(2),#editor .panels li:nth-child(3),#editor .panels li:nth-child(6){
  .el-form-item:nth-child(2) {
    margin-bottom: 40px;
  }
  /*birth*/
  .el-input-group:nth-child(1){
    width: 42%;
    position: absolute;
    left: 0;
    top: 40px;
  }
  .to{
    position: absolute;
    top: 40px;
    left: 50%;
    margin-left: -7px;
  }
  .el-input-group:nth-child(3){
    width: 42%;
    position: absolute;
    right: 0;
    top: 40px;
  }
} 
/*color*/
.el-select-dropdown__item.selected.hover,.el-select-dropdown__item.selected {
    background-color: #5A6167;
}
input:focus,textarea:focus{
  border-color: #409EFF !important;
}
.el-radio-button__inner:hover{
  color: #409EFF !important;
}
.is-active .el-radio-button__inner:hover{
  color: #fff !important;
}
textarea{
  margin-bottom: 10px;
}
#editor{
  display: flex;
  min-height: 100px;
  nav {
    background: #4D5054;
    width: 60px;
    height: 100%;
    ol li{
      cursor: pointer;
      text-align: center;
      padding: 16px 0;
      position: relative;
      border-bottom: 1px solid #444;
      span.hover-title{
        display: block;
        color: #eee;
        padding: 0.25em 0;
        left: 80%;
        transform: translateY(-0.75em);
        top: 50%;
        background: rgba(0, 0, 0, 0.5);
        position: absolute;
        width: 5em;
        border-radius: 3px;
        z-index: 1;
        display: none;
      }
      span.hover-title:after{
        content: '';
        border-top: 6px solid transparent;
        border-bottom: 6px solid transparent;
        border-right: 5px solid rgba(0, 0, 0, 0.5);
        position: absolute;
        left: 0;
        top: 50%;
        transform: translate(-5px,-6px);
      }
      .icon {
        width: 24px;
        height: 24px;
        fill: #fff;
        cursor: pointer;
      }
      &:hover .hover-title{
        display: block;
      }
      &.active{
        background: #fff;
        border-bottom: none;
        .icon{
          fill: #000;
        }
      }
      &.active:hover .hover-title{
        display: none;
      }
    }
  }
  .panels{
    flex: 1;
    text-align: center;
    li{
      padding: 0 20px;
      display: none;
      overflow: auto;
      height: 100%;
      &.active{
        display: block;
      }
      h2{
        margin: 10px 0 16px;
        font-size: 18px;
        font-weight: 500;
      }
      .el-form-item {
        margin-bottom: 0px;
      }
      .item{
        padding: 0 6px 6px;
        position: relative;
        margin: 4px 0 10px;
        transition: all .7s ease;
        &:hover{
          // box-shadow: 0 0 2px 1px rgba(0, 0, 0, .3);
        }
        &:hover .el-icon-delete{
          display: block;
        }
        .el-icon-delete{
          display: none;
          position: absolute;
          right: 4px;
          top: 12px;
          cursor: pointer;
        }
      }
      .add-block{
        margin: 10px 0;
      }
    }
  }
}
</style>