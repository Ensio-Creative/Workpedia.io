export const state = () => ({
  user: {}
})

export const mutations = {}

export const actions = {
  async login ({ commit }, payload) {
    try {
      const res = await this.$axios.$post(
        'auth/login',
        payload
      )
      if (res.isAdmin || res.isOperator) {
        commit('UPDATE_USER', res, { root: true })
        this.$router.push('/admin')
      }
      commit('UPDATE_USER', res, { root: true })
      // console.log(res)
      // commit('updateAlert', alert, { root: true })
      this.$router.push('/dashboard')
    } catch (error) {
      if (error.response.status === 422) {
        this.$toast.error(error.response.data.message)
      } else if (error.response.status === 404) {
        this.$toast.error(error.response.data.message)
      } else if (error.response.status === 401) {
        this.$toast.error(error.response.data.message)
      } else if (error.response.status === 402) {
        this.$toast.error(error.response.data.message)
      } else if (error.response.status === 400) {
        this.$toast.error(error.response.data.message)
      } else {
        this.$toast.error('Something went wrong')
      }
    }
  },

  async signUp ({ commit }, payload) {
    try {
      const res = await this.$axios.$put(
        'auth/signup',
        payload
      )
      this.$router.push('/auth/verify')
      this.$toast.success(res.message)
    } catch (error) {
      if (error.response.status === 422) {
        this.$toast.error(error.response.data.message)
      } else {
        this.$toast.error('Something went wrong')
      }
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
      commit('UPDATE_RESPONSES', res.message, { root: true })
      this.$toast.success(res.message)
      // console.log(res)
    } catch (error) {
      if (error.response.status === 422) {
        this.$toast.error(error.response.data.message)
      } else if (error.response.status === 404) {
        this.$toast.error(error.response.data.message)
      } else if (error.response.status === 401) {
        this.$toast.error(error.response.data.message)
      } else if (error.response.status === 402) {
        this.$toast.error(error.response.data.message)
      } else if (error.response.status === 400) {
        this.$toast.error(error.response.data.message)
      } else {
        this.$toast.error('Something went wrong')
      }
    }
  },

  async updatePassword ({ commit, state }, payload) {
    const _id = state.user._id
    try {
      const res = await this.$axios.$post(
        `user/${_id}/update-password`,
        payload
      )
      // console.log(res)
      this.$toast.success(res.message)
    } catch (error) {
      if (error.response.status === 422) {
        this.$toast.error(error.response.data.message)
      } else if (error.response.status === 400) {
        this.$toast.error(error.response.data.message)
      } else {
        this.$toast.error('Something went wrong')
      }
    }
  },

  async verify ({ commit, state }, payload) {
    try {
      const res = await this.$axios.$post(
        'auth/verify-user',
        payload
      )
      // console.log(res)
      // commit('UPDATE_RESPONSES', res.message, { root: true })
      this.$router.push('/auth')
      this.$toast.success(res.message)
    } catch (error) {
      // console.log(error.response.message)
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

  async forgot ({ commit, state }, payload) {
    try {
      await this.$axios.$post(
        'auth/forgot-password',
        payload
      )
      // console.log(res)
      // commit('UPDATE_RESPONSES', res.message, { root: true })
      // this.$toast.success(res.message)
      this.$router.push('/auth/resetPassword')
    } catch (error) {
      console.log(error.response.message)
      if (error.response.status === 422) {
        this.$toast.error(error.response.data.message)
      } else if (error.response.status === 404) {
        this.$toast.error(error.response.data.message)
      } else {
        this.$toast.error('Something went wrong')
      }
    }
  },

  async resetPassword ({ commit, state }, payload) {
    try {
      await this.$axios.$post(
        'auth/reset-password',
        payload
      )
      // console.log(res)
      // commit('UPDATE_RESPONSES', res.message, { root: true })
      this.$router.push('/auth')
      this.$toast.success('Password reset successful, now login!')
    } catch (error) {
      if (error.response.status === 422) {
        this.$toast.error(error.response.data.message)
      } else if (error.response.status === 404) {
        this.$toast.error(error.response.data.message)
      } else {
        this.$toast.error(error.response.data.message)
      }
      // console.log(error.response.status)
      // console.log(error.response.data.message)
    }
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
