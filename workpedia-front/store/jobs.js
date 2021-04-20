export const state = () => ({
  jobs: []
})

export const mutations = {
  UPDATE_JOBS (state, payload) {
    state.jobs = [
      ...state.jobs,
      ...payload
    ]
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
      commit('UPDATE_RESPONSES', postedJob.message, { root: true })
    } catch (error) {
      console.log(error)
    }
  },

  async updateJob ({ commit }, payload) {
    try {
      const postedJob = await this.$axios.$post(
        `jobs/update-job/${payload.id}`,
        payload
      )
      commit('UPDATE_RESPONSES', postedJob.message, { root: true })
    } catch (error) {
      console.log(error)
    }
  }

}
