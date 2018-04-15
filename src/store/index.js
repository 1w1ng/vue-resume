import Vuex from 'vuex'
import Vue from 'vue'
import objectPath from "object-path"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selected:'profile',
    user:{
      id:'',
      username:''
    },
    resume: {
      config: [
        { field: 'profile', icon: 'id' },
        { field: 'workHistory', icon: 'work' },
        { field: 'education', icon: 'book' },
        { field: 'projects', icon: 'heart' },
        { field: 'awards', icon: 'cup' },
        { field: 'contacts', icon: 'phone' },
      ],
      profile: {
        name: '黄传波',
        city: '武汉',
        title: '前端工程师',
        birthday: '1997-07-26'
      },
      workHistory: [
        {
          company: '鸡飞狗跳公司', content: `公司总部设在XXXX区，先后在北京、上海成立分公司。专注于移动XXX领域，主打产品XXXXX，它将资讯、报纸、杂志、图片、微信等众多内容，按照用户意愿聚合到一起，实现深度个性化 定制。`
        },
        {
          company: '狗急跳墙责任有限公司', content: `公司总部设在XXXX区，先后在北京、上海成立分公司。专注于移动XXX领域，主打产品XXXXX，它将资讯、报纸、杂志、图片、微信等众多内容，按照用户意愿聚合到一起，实现深度个性化 ` },
      ],
      education: [
        { school: '黄志诚警官大学', content: '本科' },
        { school: '韩琛古惑仔高中' },
      ],
      projects: [
        { name: 'project A', content: '文字' },
        { name: 'project B', content: '文字' },
      ],
      awards: [
        { name: 'awards A', content: '文字' },
        { name: 'awards B', content: '文字' },
      ],
      contacts: [
        { contact: 'phone', content: '13812345678' },
        { contact: 'qq', content: '12345678' },
      ],
    }
  },
  mutations: {
    switchTab(state,payload){
      state.selected = payload
    },
    updateResume(state,{path,value}){
      objectPath.set(state.resume, path, value)
    },
    setUser(state,payload){
      Object.assign(state.user,payload)
    },
    removeUser(state) {
      state.user.id = ''
    }
  }
})