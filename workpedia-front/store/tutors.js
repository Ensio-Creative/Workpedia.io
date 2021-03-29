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
  UPDATE_TUTOR_STATE (state, payload) {
    state.tutor = {
      ...state.tutor,
      ...payload
    }
  },
  UPDATE_START_INFO (state, payload) {
    state.tutor = {
      ...state.startInfo,
      ...payload
    }
  }
}

export const actions = {
  async startTutor ({ commit, rootState }, payload) {
    // States from the root
    const userId = rootState.auth.user._id
    const token = rootState.auth.user.token
    payload = { ...payload, userId }
    try {
      const res = await this.$axios.$patch(
        'tutors/start',
        payload
      )
      // update the the user and add the token from the state
      const user = { ...res.user, token }
      commit('UPDATE_USER', user, { root: true })
      // commit the start info
      commit('UPDATE_START_INFO', res.result)
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
      commit('UPDATE_TUTOR_STATE', res.result)
    } catch (error) {
      console.log(error)
    }
  }
}
