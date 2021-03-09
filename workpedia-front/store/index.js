import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const state = () => ({
  isLoading: false,
  errors: []
})

export const mutations = {
  errors (state, errors) {
    state.errors = errors
  },
  clear_errors (state) {
    state.errors = []
  }
}
