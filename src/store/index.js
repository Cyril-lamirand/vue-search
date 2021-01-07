import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    regions: [],
    departments: []
  },
  mutations: {
    SET_REGIONS(state, regions) {
      state.regions = regions
    },
    SET_DEPARTMENTS(state, departments) {
      state.departments = departments
    }
  },
  actions: {
    getRegions({ commit }) {
      axios.get('https://symfony-dsnj.herokuapp.com/api/region')
      .then(response => {
        commit('SET_REGIONS', response.data)
      })
    },
    getDepartments({ commit }) {
      axios.get('https://symfony-dsnj.herokuapp.com/api/department')
      .then(response => {
        commit('SET_DEPARTMENTS', response.data)
      })
    }
  },
  modules: {
  }
})
