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
    try {
      await this.$axios.$post(
        'auth/login',
        payload
      )
        .then((res) => {
          console.log(res)
          commit('updateUser', res.loadedUser)
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

  logUserOut ({ commit }, payload) {
    commit('clearUserInfo')
    localStorage.removeItem('token')
  }
}
