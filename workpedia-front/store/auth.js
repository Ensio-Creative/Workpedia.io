export const state = () => ({
  user: {},
  token: ''
})

export const mutations = {
  updateUser (state, payload) {
    state.user = {
      ...state.user,
      ...payload
    }
  },
  updateUserToken (state, payload) {
    state.token = payload
  },
  clearUserInfo (state) {
    state.user = null
    state.token = ''
  }
}

export const actions = {
  async login ({ commit }, payload) {
    try {
      await this.$axios.$post(
        'auth/login',
        payload
      )
        .then((res) => {
          console.log(res)
          commit('updateUser', res.loadedUser)
          commit('updateUserToken', res.token)
          // console.log(res)
          // commit('updateAlert', alert, { root: true })
          this.$router.push('/dashboard')
        })
    } catch (error) {
      console.error(error.message)
      commit('errors', error, { root: true })
    }
  },

  async signUp ({ commit }, payload) {
    const res = await this.$axios.$put(
      'auth/signup',
      payload
    )
    console.log(res)
  },

  logOutUser ({ commit }, payload) {
    commit('clearUserInfo')
    localStorage.removeItem('token')
    this.$router.push('/')
  }
}
