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
  async getApplicant ({ commit, state, rootState }) {
    const userId = rootState.auth.user._id
    try {
      if (!state.applicant.description) {
        const res = await this.$axios.$get(
          `applicant/get-applicant-info/${userId}`
        )
        commit('UPDATE_APPLICANT', res.result)
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
  },

  async subscription ({ commit, rootState, state }, amount) {
    try {
      const applicantId = state.applicant._id
      const email = rootState.auth.user.email
      const payload = {
        email,
        callback_url: `${process.env.BASE_URL}/api/pay/apply-subscription`,
        amount,
        purpose: 'Jobs Subscription',
        category: 'Jobs',
        applicantId
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

  // Request to increste applychance
  async registerApplicant ({ commit, rootState }, formData) {
    try {
      const userId = rootState.auth.user._id
      const token = rootState.auth.user.token
      const payload = { ...formData, userId }
      // console.log(userId)
      const res = await this.$axios.$post(
        'applicant/register-applicant',
        payload
      )
      // update the the user and add the token from the state
      const user = { ...res.user, token }
      commit('UPDATE_USER', user, { root: true })
      commit('UPDATE_APPLICANT', res.result)
      this.$toast.success(res.message)
      this.$router.push('/dashboard/jobs')
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

  // REquest to send application
  async sendApplication ({ commit, state }, payload) {
    try {
      const applicantId = state.applicant._id
      payload = {
        ...payload, applicantId
      }
      const res = await this.$axios.$post(
        'application/send-application',
        payload
      )
      this.$toast.success(res.message)
      commit('UPDATE_APPLICANT', res.applicant)
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

  async updateApplicant ({ commit, state }, payload) {
    const applicantId = state.applicant._id
    try {
      const res = await this.$axios.$put(
        `applicant/update-applicant/${applicantId}`,
        payload
      )
      this.$toast.success(res.message)
      commit('UPDATE_APPLICANT', res.result)
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
