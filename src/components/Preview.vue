<template>
  <div id="preview" class="scroll" v-on:mouseenter="enter" v-on:mouseleave="leave">
    <div class="bg" v-bind:class="animation">
      <ul>
        <li v-for="i in [0,1,2,3,4,5]"
        v-bind:class="{active:themeTab === theme[i]}"
        v-on:click="themeTab = theme[i]">
        {{themeText[i]}}
        </li>
      </ul>
    </div>
    <div class="show" v-bind:class="themeTab">
      <header>
        <h1 v-if="resume.profile.name">{{resume.profile.name}}</h1>
      </header>
      <div class="resume-content">
        <section v-if="!isEmpty(resume.profile)">
          <h2 class="title">基本信息</h2>
          <div v-if="resume.profile.name" class="name">
            <span>姓名</span>
            <i>：</i>
            <p>{{resume.profile.name}}</p>
          </div>
          <div v-if="resume.profile.sex">
            <span>性别</span>
            <i>：</i>
            <p class="sex">{{resume.profile.sex}}</p>
          </div>
          <div v-if="resume.profile.city">
            <span>所在城市</span>
            <i>：</i>
            <p class="city">{{resume.profile.city}}</p>
          </div>
          <div v-if="resume.profile.age">
            <span>年龄</span>
            <i>：</i>
            <p>{{resume.profile.age}}</p>
          </div>
        </section>
        <section class="company" v-if="filter(resume.companyHistory).length > 0">
          <h2 class="title">工作经历</h2>
          <ul>
            <li v-for="companyHistory in filter(resume.companyHistory)">
              <div v-if="companyHistory.company">
                <span>公司</span>
                <i>：</i>
                <p>{{companyHistory.company}}</p>
              </div>
              <div v-if="companyHistory.timeStart">
                <span>在职时间</span>
                <i>：</i>
                <p>{{companyHistory.timeStart}}——{{companyHistory.timeEnd}}</p>
              </div>
              <div v-if="companyHistory.job">
                <span>职位</span>
                <i>：</i>
                <p>{{companyHistory.job}}</p>
              </div>
              <div v-if="companyHistory.content">
                <span>工作内容</span>
                <i>：</i>
                <p>{{companyHistory.content}}</p>
              </div>
            </li>
          </ul>
        </section>
        <section class="education" v-if="filter(resume.educationHistory).length > 0">
          <h2 class="title">教育经历</h2>
          <ul>
            <li v-for="educationHistory in filter(resume.educationHistory)">
              <div v-if="educationHistory.school">
                <span>学校</span>
                <i>：</i>
                <p>{{educationHistory.school}}</p>
              </div>
              <div v-if="educationHistory.durationStart">
                <span>时间</span>
                <i>：</i>
                <p>{{educationHistory.durationStart}}——{{educationHistory.durationEnd}}</p>
              </div>
              <div v-if="educationHistory.degree">
                <span>学位</span>
                <i>：</i>
                <p>{{educationHistory.degree}}</p>
              </div>
              <div v-if="educationHistory.major">
                <span>专业</span>
                <i>：</i>
                <p>{{educationHistory.major}}</p>
              </div>                   
              <div v-if="educationHistory.content">
                <span>奖项及其他</span>
                <i>：</i>
                <p>{{educationHistory.content}}</p>
              </div>
            </li>
          </ul>
        </section>

        <section v-if="!isEmpty(resume.yourself)">
          <h2 class="title">自我评价</h2>
          <div v-if="resume.yourself.content">{{resume.yourself.content}}</div>
        </section>

        <section v-if="filter(resume.skill).length > 0">
          <h2 class="title">技能清单</h2>
          <ul>
            <li v-for="skill in filter(resume.skill)">
              <p v-if="skill.list">{{skill.list}}</p>
            </li>
          </ul>
        </section>

        <section class="project" v-if="filter(resume.project).length > 0">
          <h2 class="title">项目经验</h2>
          <ul>
            <li v-for="project in filter(resume.project)">
              <div v-if="project.name">
                <span>项目名称</span>
                <i>：</i>
                <p>{{project.name}}</p>
              </div>
              <div v-if="project.timeStart">
                <span>时间</span>
                <i>：</i>
                <p>{{project.timeStart}}——{{project.timeEnd}}</p>
              </div>                   
              <div v-if="project.content">
                <span>项目内容</span>
                <i>：</i>
                <p>{{project.content}}</p>
              </div>
            </li>
          </ul>
        </section>

        <section v-if="filter(resume.call).length > 0">
          <h2 class="title">联系方式</h2>
          <ul>
            <li v-for="call in filter(resume.call)">
              <div v-if="call.phone">
                <span>电话</span>
                <i>：</i>
                <p>{{call.phone}}</p>
              </div>
              <div v-if="call.mail">
                <span>邮箱</span>
                <i>：</i>
                <p>{{call.mail}}</p>
              </div>                   
              <div v-if="call.qq">
                <span>QQ</span>
                <i>：</i>
                <p>{{call.qq}}</p>
              </div>
              <div v-if="call.wechat">
                <span>微信</span>
                <i>：</i>
                <p>{{call.wechat}}</p>
              </div>
              <div v-if="call.other">
                <p>{{call.other}}</p>
              </div>                    
            </li>
          </ul>
        </section>  
      </div>
    </div>
  </div>
</template>


<style lang="scss">

@-webkit-keyframes leave-top{from{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);z-index:0}to{-webkit-transform:translate3d(0,-100%);transform:translate3d(0,-100%);z-index:-1}}
@-moz-keyframes leave-top{from{-moz-transform:translate3d(0,0,0);transform:translate3d(0,0,0);z-index:0}to{-moz-transform:translate3d(0,-100%);transform:translate3d(0,-100%);z-index:-1}}
@keyframes leave-top{from{-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);transform:translate3d(0,0,0);z-index:0}to{-webkit-transform:translate3d(0,-100%,0);-moz-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0);z-index:-1}}
@-webkit-keyframes enter-top{from{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0);z-index:0}to{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);z-index:0}}
@-moz-keyframes enter-top{from{-moz-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0);z-index:0}to{-moz-transform:translate3d(0,0,0);transform:translate3d(0,0,0);z-index:0}}
@keyframes enter-top{from{-webkit-transform:translate3d(0,-100%,0);-moz-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0);z-index:0}to{-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);transform:translate3d(0,0,0);z-index:0}}
.leave-top {
  -webkit-animation: leave-top .5s ease-out;
  -moz-animation: leave-top .5s ease-out;
  animation: leave-top .5s ease-out;
}
.enter-top {
  -webkit-animation: enter-top .5s ease-in;
  -moz-animation: enter-top .5s ease-in;
  animation: enter-top .5s ease-in;
}
#preview{
  width: 96%;
  position: relative;
  color: #48576A;
  .bg{
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    ul{
      width: 100%;
      display: flex;
      li{
        display: inline-block;
        text-align: center;
        cursor: pointer;
        line-height: 26px;
        flex:1;
        border-top: 3px solid transparent; 
        transition: border-top .6s;
        &:hover,&.active{
          border-top: 3px solid #13CE66;
        }
      }
    }   
  }
  .enter-top{
    z-index: 1;
  }
  .show{
    margin: 10%;
    word-wrap: break-word;
    word-break: break-all;
    header {
      border-bottom: none;
      h1{
        text-align: center;
        font-weight: 600;
        font-size: 24px;
        display: none;
      }
    }
    
    i{
      font-style: normal;
    }
    div>p{
      display: inline-block;
    }
  }
  h3{
    text-align: center;
    font-size: 22px;
    padding-bottom: 10px;
  }
  h2.title{
    font-size: 18px;
    font-weight: 400;
    margin: 20px 0 6px -12px;
    color: #48576A;
  }
  .first{
    h2{
        border-bottom: 1px solid #ccc;
    }
  }
  .second{
      header h1{
          display: block;
      }
      .name{
          display: none;
      }
      h2{
          font-weight: 600;
      }
      div{
          margin-bottom: 4px;
          span{
              font-weight: 600;
          }
      }
  }
  .third{
      margin: 0;
      h2.title{
          margin-left: 0;
      }
      header{
          background: #F4F6F6;
          border-bottom: 2px solid #F4F6F6;
          h1{
              display: block;
              text-align: left;
              margin: 0;
              padding: 8%;
          }
      }
      .name{
          display: none;
      }
      section:nth-child(1)>p:nth-of-type(1){
          display: none;
      }
      .resume-content{
          padding:0 8%;
          h2{
              font-family: inherit;
              font-weight: 700;
              line-height: 1.1;
          }
          section.company ul,section.education ul,section.project ul{
              border-left: 1px solid #48576A;
              padding-left: 14px;
              li{
                  position: relative;
              }
              li::after{
                  content: '';
                  width: 8px;
                  height: 8px;
                  border-radius: 50%;
                  background: #48576A;
                  position: absolute;
                  top: 0;
                  left: -18.5px;
              }
          }
          div{
              span{
                  display: block;
                  font-family: Lato, sans-serif;
                  font-weight: 700;
                  margin: 4px 0;
              }
              i{
                  display: none;
              }
          }
      }
  }
  .fourth{
      margin: 0;
      h2.title{
          margin-left: 0;
      }
      header{
          background: #F4F6F6;
          border-bottom: 2px solid #F4F6F6;
          h1{
              display: block;
              text-align: left;
              margin: 0;
              padding-left: 8%;
              padding-top: 50px;
              padding-bottom: 60px;
          }
      }
      .name{
          display: none;
      }
      section:nth-child(1){
          h2{
              display: none;
          }
          div span,i{
              display: none;
          }
          .sex{
              position: absolute;
              left: 8%;
              top: 110px;
          }
          .city{
              font-size: 18px;
              position: absolute;
              left: 8%;
              top: 90px;
          }
          .birth{
              position: absolute;
              left: 14%;
              top: 110px;
          }
      }
      section:nth-child(1)>p:nth-of-type(1){
          display: none;
      }
      .resume-content{
          padding:0 8%;
          h2{
              font-family: inherit;
              font-weight: 700;
              line-height: 1.1;
          }
          div{
              span{
                  display: block;
                  font-family: Lato, sans-serif;
                  font-weight: 700;
                  margin: 4px 0;
              }
              i{
                  display: none;
              }
          }
      }
  }
  .fifth{
      h2{
          border-bottom: 1px solid #ccc;
          font-weight: 600;
      }
      div{
          margin-bottom: 4px;
          span{
              font-weight: 600;
          }
      }
  }
  .sixth{
      margin: 0;
      h2.title{
          margin-left: 0;
          padding-bottom: 12px;
          border-bottom: 1px solid #ccc;
      }
      .resume-content{
          padding:4% 8% 0;
          h2{
              font-family: inherit;
              font-weight: 700;
              line-height: 1.1;
          }
          div{
              span{
                  display: block;
                  font-family: Lato, sans-serif;
                  font-weight: 700;
                  margin: 4px 0;
              }
              i{
                  display: none;
              }
          }
      }
  }
  li{
      margin-bottom: 14px;
  }
  p{
      line-height: 22px;
      span{
          font-weight: 500;
      }
  }
} 
</style>

<script>
export default {
data(){
  return{
    theme: ['first','second','third','fourth','fifth','sixth'],
    themeText: ['样式一','样式二','样式三','样式四','样式五','样式六'],
    themeTab: 'first',
    animation: ''
  }
},
props: ['resume'],
methods: {
    filter(array){//遍历数组书每一个对象
          return array.filter(item=>!this.isEmpty(item))
      },
    isEmpty(obj){//如果对象中键值全为空，则返回false
      let empty = true;
      for(let key in obj){
          if(obj[key]){
                empty = false
                break
          }
      }
      return empty
    },
    enter(){
        this.animation = 'enter-top'
    },
    leave(){
        this.animation = 'leave-top'
    }
},
//   computed: {
//       toHtml: function(){
//           function turn(str){
//               return ((str.replace(/<(.+?)>/gi,"&lt;$1&gt;")).replace(/ /gi,"&nbsp;")).replace(/\n/gi,"<br>")
//           }
//           console.log(this.resume)
//           return {
//               education: turn(this.resume.educationHistory.content),
//               skill: turn(this.resume.skill.list),
//               company: turn(this.resume.companyHistory.content),
//               call: turn(this.resume.call.other),
//               yourself: turn(this.resume.yourself.content)
//           }
//       }
//   }
}
</script>