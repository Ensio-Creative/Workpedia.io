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
    const userId = rootState.auth.user._id
    const token = rootState.auth.user.token
    payload = { ...payload, userId }
    // console.log(payload, token)
    try {
      const res = await this.$axios.$post(
        'hire/register-hire',
        payload
      )
      // update the the user and add the token from the state
      const user = { ...res.user, token }
      commit('UPDATE_USER', user, { root: true })
      commit('UPDATE_HIRE', res.result)
      this.$router.push('/dashboard/hire')
      this.$toast.success(res.message)
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

  async updateHire ({ commit, state }, payload) {
    const hireId = state.hire._id
    try {
      const res = await this.$axios.$put(
        `hire/update-hire/${hireId}`,
        payload
      )
      commit('UPDATE_HIRE', res.result)
      this.$toast.success(res.message)
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

  async getHire ({ commit, state, rootState }) {
    const userId = rootState.auth.user._id
    try {
      if (!state.hire.companyDescription) {
        const res = await this.$axios.$get(
          `hire/get-hirer-info/${userId}`
        )
        commit('UPDATE_HIRE', res.result)
        this.$toast.success(res.message)
      }
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
  }
}
