import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const state = () => ({
  isLoading: false,
  errors: []
})

export const mutations = {
  ERRORS (state, errors) {
    state.errors = errors
  },
  CLEAR_ERRORS (state) {
    state.errors = []
  },
  UPDATE_USER (state, payload) {
    state.auth.user = {
      ...state.user,
      ...payload
    }
  },
  UPDATE_LOADING (state, Loading) {
    state.isLoading = Loading
  }
}
