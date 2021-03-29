export const state = () => ({
  user: {}
})

export const mutations = {
  CLEAR_USER (state) {
    state.user = {}
  }
}

export const actions = {
  async login ({ commit }, payload) {
    try {
      console.log(payload)
      await this.$axios.$post(
        'auth/login',
        payload
      )
        .then((res) => {
          console.log(res)
          commit('UPDATE_USER', res, { root: true })
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
    commit('CLEAR_USER')
    this.$router.push('/')
  }
}

export const getters = {
  isAuthenticated (state) {
    if (state.user.token) {
      return true
    } else {
      return false
    }
  }
}
