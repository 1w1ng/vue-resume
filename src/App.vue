<template>
  <div>
    <div class="page">
      <header>
        <Topbar/>
      </header>
      <main>

      </main>
    </div>
  </div>
</template>

<script>
  import 'normalize.css/normalize.css'
  import './assets/reset.css'

  import Topbar from './components/Topbar'
  import icons from './assets/icons'

  import store from './store/index'
  import AV from './lib/leancloud'
  import getAVUser from './lib/getAVUser'

  document.body.insertAdjacentHTML('afterbegin', icons)

  export default {
    name: 'app',
    store,
    components: { Topbar},
    created(){
      document.body.insertAdjacentHTML('afterbegin', icons)
      let state = localStorage.getItem('state')
      if(state) {
        state = JSON.parse(state)
      }
      this.$store.commit('initState', state)
      this.$store.commit('setUser', getAVUser())
    }
  }
</script>

<style lang="scss">
  .page{
    height: 100vh;
    display: flex;
    flex-direction: column;
    background: #EAEBEC;
    >main{
      flex-grow: 1;  
    }
    /*设置响应式*/
    >main{
      min-width: 1024px;
      max-width: 1440px;
      margin-top: 16px;
      margin-bottom: 16px;
      display: flex;
      justify-content: space-between;
      padding: 0 16px;
      width: 100%;
      align-self: center;
    }
  }
</style>