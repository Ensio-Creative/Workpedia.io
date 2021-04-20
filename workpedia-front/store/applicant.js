export const state = () => ({
  applicant: {}
})

export const mutations = {
  UPDATE_APPLICANT (state, payload) {
    state.applicant = {
      ...state.applicant,
      ...payload
    }
  }
}

export const actions = {
  async getApplicant ({ commit, state, rootState }) {
    const userId = rootState.auth.user._id
    try {
      if (!state.applicant.description) {
        const res = await this.$axios.$get(
          `applicant/get-applicant-info/${userId}`
        )
        console.log(res)
        commit('UPDATE_APPLICANT', res.result)
      }
    } catch (error) {
      console.log(error)
    }
  },

  async subscription ({ commit, rootState }) {
    const usersId = rootState.auth.user._id
    const token = rootState.auth.user.token
    const payload = {
      userId: usersId
    }
    // console.log(userId)
    const res = await this.$axios.$post(
      'applicant/subscribe',
      payload
    ).catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500
      }
    })
    // update the the user and add the token from the state
    const user = { ...res.user, token }
    commit('UPDATE_USER', user, { root: true })
    commit('UPDATE_APPLICANT', res.result)
    this.$router.push('/dashboard/jobs')
  },

  async updateApplicant ({ commit, state }, payload) {
    const applicantId = state.applicant._id
    try {
      const res = await this.$axios.$put(
        `applicant/update-applicant/${applicantId}`,
        payload
      )
      commit('UPDATE_RESPONSES', res.message, { root: true })
      commit('UPDATE_APPLICANT', res.result)
    } catch (error) {
      console.log(error)
    }
  }
}
