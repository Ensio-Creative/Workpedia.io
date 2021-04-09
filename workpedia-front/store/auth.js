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
    try {
      const res = await this.$axios.$put(
        'auth/signup',
        payload
      )
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  },

  async updateUser ({ commit, state }, payload) {
    const userId = state.user._id
    const token = state.user.token
    try {
      const res = await this.$axios.$put(
        `user/update/${userId}`,
        payload
      )
      const updatedUser = res.result
      const storedUser = { ...updatedUser, token }
      commit('UPDATE_USER', storedUser, { root: true })
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  },

  async updatePassword ({ commit, state }, payload) {
    const _id = state.user._id
    try {
      const res = await this.$axios.$post(
        `user/${_id}/update-password`,
        payload
      )
      console.log(res)
    } catch (error) {
      console.log(error)
    }
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
