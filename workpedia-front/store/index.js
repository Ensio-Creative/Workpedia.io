import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const state = () => ({
  isLoading: false,
  resized: false,
  hasAccount: false,
  errors: '',
  responses: ''
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
  },
  UPDATE_JOBS (state, payload) {
    state.jobs.jobs = payload
  }
}

export const actions = {
  async nuxtServerInit ({ commit }) {
    try {
      const res = await this.$axios.$get(
        'jobs/get-jobs'
      )
      commit('UPDATE_RESPONSES', res.message)
      console.log(res.results.length)
      commit('UPDATE_JOBS', res.results)
      console.log(res.results.length)
    } catch (error) {
      console.log(error)
    }
  }
}
