export const state = () => ({
  user: {}
})

export const mutations = {
  updateUser (state, payload) {
    state.user = {
      ...state.user,
      ...payload
    }
  },
  clearUserInfo (state) {
    state.user = {}
  }
}

export const actions = {
  async login ({ commit }, payload) {
    const res = await this.$axios.$post(
      'auth/login',
      payload
    )
    commit('updateUser', res.loadedUser)
    // console.log(res)
    this.$router.push('/dashboard')
  },

  async signUp ({ commit }, payload) {
    const res = await this.$axios.$put(
      'auth/signup',
      payload
    )
    console.log(res)
  },

  logUserOut ({ commit }, payload) {
    commit('clearUserInfo')
    localStorage.removeItem('token')
  }
}
