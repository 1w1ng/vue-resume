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
				<WorkExperienceEditor v-bind:workExperience="workExperience"/>
			</li>
			<li v-bind:class="{active: currentTab === 2}">
				<h2>教育背景</h2>
			</li>
			<li v-bind:class="{active: currentTab === 3}">
				<h2>个人技能</h2>
			</li>
			<li v-bind:class="{active: currentTab === 4}">
				<h2>项目经验</h2>
			</li>
			<li v-bind:class="{active: currentTab === 5}">
				<h2>联系方式</h2>
			</li>
			<!-- <li v-for="i in [0,1,2,3,4,5]" v-bind:class="{active:currentTab === i}">
				Tab {{i+1}}
			</li> -->
		</ol>
	</div>
</template>

<script>
import ProfileEditor from './ProfileEditor'
import WorkExperienceEditor from './WorkExperienceEditor'
export default {
	components:{ ProfileEditor,WorkExperienceEditor },
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
			]
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