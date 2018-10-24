import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false
  },
  getters:{
    loading: state => {
      return state.loading
    } 
  },
  mutations: {
    startLoad(state) {
      state.loading = true
    },
    endLoad(state) {
      state.loading = false
    }
  },
  actions: {

  }
})
