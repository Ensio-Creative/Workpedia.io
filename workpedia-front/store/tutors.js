export const state = () => ({
  tutor: {},
  startInfo: {},
  requestTutorInfo: {}
})

export const mutations = {
  UPDATE_TUTOR_STATE (state, payload) {
    state.tutor = {
      ...state.tutor,
      ...payload
    }
  },
  UPDATE_START_INFO (state, payload) {
    state.tutor = {
      ...state.startInfo,
      ...payload
    }
  },
  UPDATE_REQUEST_TUTOR (state, payload) {
    state.requestTutorInfo = {
      ...state.requestTutorInfo,
      ...payload
    }
  },
  CLEAR_REQUEST_TUTOR (state) {
    state.requestTutorInfo = {}
  }
}

export const actions = {
  async startTutor ({ commit, rootState }, payload) {
    // States from the root
    const userId = rootState.auth.user._id
    const token = rootState.auth.user.token
    console.log(userId, token)
    payload = { ...payload, userId }
    try {
      const res = await this.$axios.$patch(
        'tutors/start',
        payload
      )
      // update the the user and add the token from the state
      const user = { ...res.user, token }
      commit('UPDATE_USER', user, { root: true })
      // commit the start info
      commit('UPDATE_START_INFO', res.result)
      this.$router.push('/dashboard/tutor')
    } catch (error) {
      console.log(error)
    }
  },

  async updateTutor ({ commit, state, rootState }, payload) {
    const userId = rootState.auth.user._id
    payload = { ...payload, userId }
    try {
      const res = await this.$axios.$put(
        `tutors/update-tutor/${state.tutor._id}`,
        payload
      )
      commit('UPDATE_RESPONSES', res.message, { root: true })
      commit('UPDATE_TUTOR_STATE', res.result)
    } catch (error) {
      console.log(error)
      commit('UPDATE_RESPONSES', error.message, { root: true })
    }
  },

  async sendRequest ({ commit, state, rootState }, payload) {
    const userId = rootState.auth.user._id
    const request = state.requestTutorInfo
    payload = { ...payload, userId }
    const finalRequest = { ...payload, ...request }
    try {
      const res = await this.$axios.$post(
        `tutors/request-tutor/${userId}`,
        finalRequest
      )
      commit('UPDATE_RESPONSES', res.message, { root: true })
      commit('CLEAR_REQUEST_TUTOR')
      this.$router.push('/tutor')
    } catch (error) {
      console.log(error)
      commit('UPDATE_RESPONSES', error.message, { root: true })
    }
  },

  async getTutor ({ commit, state, rootState }) {
    const userId = rootState.auth.user._id
    try {
      if (!state.tutor.description) {
        const res = await this.$axios.$get(
          `tutors/get-tutor/${userId}`
        )
        console.log(res)
        commit('UPDATE_RESPONSES', res.message, { root: true })
        commit('UPDATE_TUTOR_STATE', res)
      }
    } catch (error) {
      commit('UPDATE_RESPONSES', error.message, { root: true })
      console.log(error)
    }
  }
}
