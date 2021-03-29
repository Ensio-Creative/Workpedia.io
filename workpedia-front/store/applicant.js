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
  async applyForJobs ({ commit, rootState }, payload) {
    const userId = rootState.auth.user._id
    const token = rootState.auth.user.token
    payload = { ...payload, userId }

    const res = await this.$axios.$post(
      'apply-for-jobs/register',
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
  }
}
