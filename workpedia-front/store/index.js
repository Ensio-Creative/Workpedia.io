import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const state = () => ({
  isLoading: false,
  resized: false,
  hasAccount: false,
  errors: '',
  responses: '',
  mobileDash: false
})

export const mutations = {
  ERRORS (state, errors) {
    state.errors = errors
  },
  RESIZE (state, resize) {
    state.resized = resize
  },
  MOBILE_DASH (state, value) {
    state.mobileDash = value
  },
  HAS_ACCOUNT (state, account) {
    state.hasAccount = account
  },
  UPDATE_RESPONSES (state, message) {
    state.responses = message
  },
  UPDATE_ERROR (state, message) {
    state.errors = message
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
  CLEAR_USER (state) {
    state.auth.user = {}
    state.tutors.tutor = {}
    state.hire.hire = {}
    state.applicant.applicant = {}
    state.freelance.freelancer = {}
  },
  UPDATE_LOADING (state, Loading) {
    state.isLoading = Loading
  }
}
