import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
Vue.use(Vuex)

const store = () => {
  return new Vuex.Store({
    modules: {
      app
    }
  })
}

export default store
