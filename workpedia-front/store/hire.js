export const state = () => ({
  hire: {}
})

export const mutations = {
  UPDATE_HIRE (state, payload) {
    state.hire = {
      ...state.hire,
      ...payload
    }
  }
}

export const actions = {
  async registerHire ({ commit, rootState }, payload) {
    // const userId = rootState.auth.user._id
    const token = rootState.auth.user.token
    // payload = { ...payload, userId }
    try {
      const res = await this.$axios.$post(
        'hire/register-hire',
        payload
      )
      // update the the user and add the token from the state
      const user = { ...res.user, token }
      commit('UPDATE_USER', user, { root: true })
      commit('UPDATE_HIRE', res.result)
      console.log(res)
      // this.$router.push('/jobs')
    } catch (error) {
      console.log(error)
    }
  }
}
