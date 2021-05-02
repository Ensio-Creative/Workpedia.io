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
    // console.log(userId, token)
    payload = { ...payload, userId }
    try {
      const res = await this.$axios.$patch(
        'tutors/start',
        payload
      )
      // update the the user and add the token from the state
      const user = { ...res.user, token }
      commit('UPDATE_USER', user, { root: true })
      this.$toast.success(res.message)
      // commit the start info
      commit('UPDATE_START_INFO', res.result)
      this.$router.push('/dashboard/tutor')
    } catch (error) {
      if (error.response.status === 422) {
        this.$toast.error(error.response.data.message)
      } else if (error.response.status === 404) {
        this.$toast.error(error.response.data.message)
      } else if (error.response.status === 401) {
        this.$toast.error(error.response.data.message)
      } else if (error.response.status === 400) {
        this.$toast.error(error.response.data.message)
      } else {
        this.$toast.error('Something went wrong')
      }
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
      this.$toast.success(res.message)
      commit('UPDATE_TUTOR_STATE', res.result)
    } catch (error) {
      if (error.response.status === 422) {
        this.$toast.error(error.response.data.message)
      } else if (error.response.status === 404) {
        this.$toast.error(error.response.data.message)
      } else if (error.response.status === 400) {
        this.$toast.error(error.response.data.message)
      } else {
        this.$toast.error('Something went wrong')
      }
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
      commit('CLEAR_REQUEST_TUTOR')
      this.$router.push('/tutor')
      this.$toast.success(res.message)
    } catch (error) {
      // console.log(error)
      if (error.response.status === 422) {
        this.$toast.error(error.response.data.message)
      } else if (error.response.status === 404) {
        this.$toast.error(error.response.data.message)
      } else if (error.response.status === 400) {
        this.$toast.error(error.response.data.message)
      } else {
        this.$toast.error('Something went wrong')
      }
    }
  },

  async getTutor ({ commit, state, rootState }) {
    const userId = rootState.auth.user._id
    try {
      if (!state.tutor.description) {
        const res = await this.$axios.$get(
          `tutors/get-tutor/${userId}`
        )
        // console.log(res)

        commit('UPDATE_TUTOR_STATE', res.tutor)
        this.$toast.success(res.message)
      }
    } catch (error) {
      // console.log(error)
      if (error.response.status === 422) {
        this.$toast.error(error.response.data.message)
      } else if (error.response.status === 404) {
        this.$toast.error(error.response.data.message)
      } else if (error.response.status === 400) {
        this.$toast.error(error.response.data.message)
      } else {
        this.$toast.error('Something went wrong')
      }
    }
  }
}
