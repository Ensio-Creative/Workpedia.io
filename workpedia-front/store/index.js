import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const state = () => ({
  isLoading: false,
  resized: false,
  hasAccount: false,
  errors: [],
  requestTutorInfo: {}
})

export const mutations = {
  ERRORS (state, errors) {
    state.errors = errors
  },
  RESIZE (state, resize) {
    state.resized = resize
  },
  HAS_ACCOUNT (state, account) {
    state.hasAccount = account
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
  },
  UPDATE_REQUEST_TUTOR (state, payload) {
    state.requestTutorInfo = {
      ...state.requestTutorInfo,
      ...payload
    }
  }
}
