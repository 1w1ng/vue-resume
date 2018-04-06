<template>
	<div id="editor">
		<nav>
			<ol>
				<li v-for="i in [0,1,2,3,4,5]" v-bind:class="{active: currentTab === i}" v-on:click="currentTab = i">
					<svg class="icon" aria-hidden="true">
						<use v-bind:xlink:href="`#icon-${icons[i]}`"></use>
					</svg>
				</li>
			</ol>
		</nav>
		<ol class="panes">
			<li v-bind:class="{active: currentTab === 0}">
				<ProfileEditor v-bind:profile="profile"/>
			</li>
			<li v-bind:class="{active: currentTab === 1}">
				<ArrayEditor v-bind:items="workExperience" v-bind:labels="{company:'公司',content:'工作内容'}" title="工作经历"/>
			</li>
			<li v-bind:class="{active: currentTab === 2}">
				<ArrayEditor v-bind:items="educationBg" v-bind:labels="{school:'学校',duration:'时间',degree:'学位'}" title="教育背景"/>
			</li>
			<li v-bind:class="{active: currentTab === 3}">
				<ArrayEditor v-bind:items="skills" v-bind:labels="{name:'技能特长',content:'技能描述'}" title="技能清单"/>
			</li>
			<li v-bind:class="{active: currentTab === 4}">
				<ArrayEditor v-bind:items="projects" v-bind:labels="{name:'项目名称',content:'项目描述'}" title="项目经验"/>
			</li>
			<li v-bind:class="{active: currentTab === 5}">
				<h2>联系方式</h2>
			  <el-form>
		      <el-form-item label="QQ">
			      <el-input v-model="contacts.qq"></el-input>
		      </el-form-item>
		      <el-form-item label="微信">
			      <el-input v-model="contacts.wechat"></el-input>
		      </el-form-item>
		      <el-form-item label="邮箱">
			      <el-input v-model="contacts.email"></el-input>
		      </el-form-item>
					<el-form-item label="电话">
			      <el-input v-model="contacts.phone"></el-input>
		      </el-form-item>
	      </el-form>
			</li>
		</ol>
	</div>
</template>

<script>
import ProfileEditor from './ProfileEditor'
import ArrayEditor from './ArrayEditor'
export default {
	components:{ ProfileEditor,ArrayEditor },
  data() {
    return {
      currentTab: 0,
      icons: ["profile", "work", "education", "skills", "project", "contact"],
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
  },
	methods:{

	},
	created(){

	}
}
</script>


<style lang="scss">
#editor {
  min-height: 100px;
  display: flex;
  > nav {
    background: #66b1ff;
    width: 80px;
    > ol > li {
      padding: 16px 0;
      text-align: center;
      > .icon {
        width: 24px;
        height: 24px;
        fill: #fff;
      }
      &.active {
        background: #fff;
        > .icon {
          fill: #000;
        }
      }
    }
  }
  > .panes {
		flex:1;
		.container{
			position: relative;
			.el-icon-circle-close-outline{
				position: absolute;
				right: 0;
				top:0;
			}
		}
    > li {
      display: none;
			padding: 32px;
			height: 100%;
			overflow: auto;
      &.active {
        display: block;
      }
    }
  }
}
</style>