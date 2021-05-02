export const state = () => ({
  jobs: []
})

export const mutations = {
  UPDATE_JOBS (state, payload) {
    state.jobs = payload
  }
}

export const actions = {
  async getJobs ({ commit }) {
    try {
      const res = await this.$axios.$get(
        'jobs/get-jobs'
      )
      commit('UPDATE_RESPONSES', res.message, { root: true })
      commit('UPDATE_JOBS', res.results)
    } catch (error) {
      console.log(error)
    }
  },

  async postJob ({ commit, rootState }, payload) {
    const companyId = rootState.hire.hire._id
    payload = { ...payload, companyId }
    try {
      const postedJob = await this.$axios.$put(
        'jobs/post-job',
        payload
      )
      // commit('UPDATE_RESPONSES', postedJob.message, { root: true })
      this.$toast.success(postedJob.message)
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

  async updateJob ({ commit }, payload) {
    try {
      const postedJob = await this.$axios.$post(
        `jobs/update-job/${payload.id}`,
        payload
      )
      this.$toast.success(postedJob.message)
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
