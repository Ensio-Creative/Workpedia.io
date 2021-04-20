
export const actions = {
  async postJob ({ commit, rootState }, payload) {
    const userId = rootState.auth.user._id
    payload = { ...payload, userId }
    try {
      const postedJob = await this.$axios.$put(
        'admin/post-job',
        payload
      )
      commit('UPDATE_RESPONSES', postedJob.message, { root: true })
    } catch (error) {
      console.log(error)
    }
  },

  testDispatch ({ commit, rootState }) {
    console.log('Worked')
  }
}
