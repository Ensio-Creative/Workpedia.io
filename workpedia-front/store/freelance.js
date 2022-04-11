export const state = () => ({
  freelancing: [],
  freelancer: {},
  freelanceCategory: []
})

export const mutations = {
  UPDATE_FREELANCER (state, payload) {
    state.freelancer = {
      ...state.freelancer,
      ...payload
    }
  },
  UPDATE_FREELANCING (state, payload) {
    state.freelancing = payload
  },
  UPDATE_FREELANCING_SETTING (state, payload) {
    state.freelanceCategory = payload
  }
}

export const actions = {
  async subscription ({ commit, rootState, state }, amount) {
    try {
      const userId = state.auth.user._id
      const email = rootState.auth.user.email
      const payload = {
        email,
        callback_url: `${process.env.BASE_URL}/api/pay/freelance-callback`,
        amount,
        purpose: 'Hire Subscription',
        category: 'Freelance',
        userId
      }
      const res = await this.$axios.$post(
        'pay/init-pay',
        payload
      )
      // const { data } = res
      // console.log(res)
      // this.$router.redirect(res.url)
      window.location.href = res.url
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
  async registerFreelancerHandymen ({ commit, rootState }, payload) {
    const userId = rootState.auth.user._id
    const token = rootState.auth.user.token
    payload = { ...payload, userId }
    try {
      const res = await this.$axios.$post(
        'freelance/register-freelancer',
        payload
      )
      // Add the token to the new user object
      const user = { ...res.user, token }
      commit('UPDATE_USER', user, { root: true })
      this.$toast.success(res.message)
      commit('UPDATE_FREELANCER', res.result)
      this.$router.push('/dashboard/freelance')
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

  async updateFreelancerHandymen ({ commit, state }, payload) {
    const freelancerId = state.freelancer._id
    try {
      const res = await this.$axios.$put(
        `freelance/update-freelancer/${freelancerId}`,
        payload
      )
      // commit('UPDATE_RESPONSES', res.message, { root: true })
      this.$toast.success(res.message)
      commit('UPDATE_FREELANCER', res.result)
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

  async getFreelancer ({ commit, state, rootState }) {
    const userId = rootState.auth.user._id
    try {
      if (!state.freelancer.title) {
        const res = await this.$axios.$get(
          `freelance/get-freelancer-info/${userId}`
        )
        commit('UPDATE_FREELANCER', res.result)
        this.$toast.success(res.message)
        return
      }
      console.log('Did not work')
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
