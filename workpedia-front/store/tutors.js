export const state = () => ({
  tutor: {},
  startInfo: {},
  fetchedTutors: [
    {
      _id: '1',
      tutorTitle: 'Web dev',
      author: 'Great Adams',
      courseCategory: 'Front-end',
      tutorCategory: 'computer-sciences'
    }
  ]
})

export const mutations = {
  updateTutorState (state, payload) {
    state.tutor = {
      ...state.tutor,
      ...payload
    }
  },
  updateStartInfo (state, payload) {
    state.tutor = {
      ...state.startInfo,
      ...payload
    }
  }
}

export const actions = {
  async startTutor ({ commit, rootState }, payload) {
    const userId = rootState.auth.user._id
    payload = { ...payload, userId }
    try {
      const res = await this.$axios.$patch(
        'tutors/start',
        payload
      )
      commit('updateStartInfo', res.result)
      this.$router.push('/dashboard/tutor')
    } catch (error) {
      console.log(error)
    }
  },

  async updateTutor ({ commit, state, rootState }, payload) {
    const userId = rootState.auth.user._id
    payload = { ...payload, userId }
    try {
      const res = await this.$axios.$put(
        `tutors/update-tutor/${state.tutor._id}`,
        payload
      )
      commit('updateTutorState', res.result)
    } catch (error) {
      console.log(error)
    }
  }
}
