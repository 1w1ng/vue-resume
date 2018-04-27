<template>
  <div id="preview" class="scroll">
    <div class="header">
      <h2 class="name">{{resume.profile.name || '姓名'}}</h2>
      <ul class="list">
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-call"></use>
          </svg>
          <span>{{resume.contacts.phone || '手机'}}</span>
        </li>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-mail"></use>
          </svg>
          <span>{{resume.contacts.mail || 'mail'}}</span>
        </li>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-wechat"></use>
          </svg>
          <span>{{resume.contacts.wechat || 'wechat'}}</span>
        </li>
      </ul>
    </div>
    <div class="main">

      <section class="profile">
        <div class="info-title">
          <h2 class="title">个人信息</h2>
        </div>
        <ul class="info">
          <li>城&nbsp;&nbsp;市:
            <span>{{resume.profile.city || '城市'}}</span>
          </li>
          <li>年&nbsp;&nbsp;龄:
            <span>{{resume.profile.age || '年龄'}}</span>
          </li>
          <li>性&nbsp;&nbsp;别:
            <span>{{resume.profile.sex || '性别'}}</span>
          </li>
          <li class="letter-space">Github:
            <span>{{resume.contacts.github || 'github'}}</span>
          </li>
        </ul>
      </section>

      <section class="work-history" v-if="filter(resume.companyHistory).length > 0">
        <div class="info-title">
          <h2 class="title">工作经历</h2>
        </div>
        <ul v-for="(item,index) in resume.companyHistory" class="preview-list">
          <li class="preview-title">
            <p class="company">{{item.company}}</p>
            <p class="time">{{item.time}}</p>
          </li>
          <li class="preview-content">
            <p>{{item.content}}</p>
          </li>
        </ul>
      </section>

      <section class="skills" v-if="filter(resume.skill).length > 0">
        <div class="info-title">
          <h2 class="title">技能清单</h2>
        </div>
        <ul v-for="(item,index) in resume.skill" :key="index" class="preview-list">
          <li class="preview-title">
            <p class="company">{{item.name}}</p>
          </li>
          <li class="preview-content">
            <p>{{item.content}}</p>
          </li>
        </ul>
      </section>

      <section class="projects" v-if="filter(resume.project).length > 0">
        <div class="info-title">
          <h2 class="title">项目经验</h2>
        </div>
        <ul v-for="(item,index) in resume.project" :key="index" class="preview-list">
          <li class="preview-title">
            <p class="company">{{item.name}}</p>
          </li>
          <li class="preview-content">
            <p>{{item.content}}</p>
          </li>
        </ul>
      </section>

      <section class="education" v-if="filter(resume.educationHistory).length > 0">
        <div class="info-title">
          <h2 class="title">学习经历</h2>
        </div>
        <ul v-for="(item,index) in resume.educationHistory" :key="index" class="preview-list">
          <li class="preview-title">
            <p>{{item.school}}</p>
            <p>{{item.degree}}</p>
            <p>{{item.duration}}</p>
          </li>
          <li class="preview-content">
            <p>{{item.content}}</p>
          </li>
        </ul>
      </section>
  
    </div>
  </div>
</template>


<style lang="scss">
#preview{
  word-wrap: break-word;
  word-break: break-all;
}
#preview .header {
  height: 25%;
  margin: 0 0 32px 0;
  width: 100%;
  background-color: #ddd;
  h2{
    padding: 24px 0;
    text-align: center;
  }
  .list{
    display: flex;
    justify-content: space-around;
    margin:24px 0;
  }
  .icon{
    color:#333;
  }
}
#preview .main {
  margin: 0 48px;
  padding: 16px;
}
.info-title {
  vertical-align: middle;
  border-bottom: 1px solid #ccc;
}
.info-title .title {
  color: #fd4c5b;;
  font-size: 16px;
  vertical-align: middle;
}
.profile ul.info {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 16px 8px;
  font-family: "YouYuan", "microsoft yahei", "sans-serif";
}
.profile .info li {
  display: block;
  margin-bottom: 8px;
  font-size: 16px;
  width: 50%;
}
.preview-list{
  display: block;
  margin: 16px 8px;
  .preview-content p{
    white-space: pre-wrap;
  }
}
.preview-list .preview-title{
  font-family: Arial, "Microsoft YaHei";
  font-weight: 600;
  margin-bottom: 16px; 
}
.preview-title > p{
  display: inline-block;
  width: 210px;
}
</style>

<script>
export default{
  props: ['resume'],
  methods:{
    filter(array){
      return array.filter(item => !this.isEmpty(item))
    },
    isEmpty(object){
      let empty = true
      for (let key in object) {
        if (object[key]) {
          empty = false
          break
        }
      }
      return empty
    }
  }
}
</script>