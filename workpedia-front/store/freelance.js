export const state = () => ({
  freelancing: [
    {
      _id: '1',
      title: 'Copy Writer',
      amount: '45',
      description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolor',
      category: 'writing',
      author: 'Great Adams',
      authorLocation: 'Location',
      authorDescription: 'This i will make a very good product for you Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut'
    },
    {
      _id: '9',
      title: 'Therpist',
      amount: '45',
      description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolor',
      category: 'lifestyle',
      author: 'Great Adams',
      authorLocation: 'Location',
      authorDescription: 'This i will make a very good product for you Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut'
    }
  ],
  freelancer: {}
})

export const mutations = {
  UPDATE_FREELANCER (state, payload) {
    state.freelancer = {
      ...state.freelancer,
      ...payload
    }
  }
}

export const actions = {
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
      commit('UPDATE_RESPONSES', res.message, { root: true })
      commit('UPDATE_FREELANCER', res.result)
      this.$router.push('/dashboard/freelance')
    } catch (error) {
      console.log(error)
    }
  },

  async updateFreelancerHandymen ({ commit, state }) {
    const freelancerId = state.freelancer._id
    try {
      if (state.freelancer.cvUrl && state.freelancer.thumbnailUrl) {
        const res = await this.$axios.$put(
          `freelance/update-freelancer/${freelancerId}`,
          state.freelancer
        )
        commit('UPDATE_RESPONSES', res.message, { root: true })
        commit('UPDATE_FREELANCER', res.result)
      }
    } catch (error) {
      console.log(error)
    }
  },

  async getFreelancer ({ commit, state, rootState }) {
    const userId = rootState.auth.user._id
    try {
      if (!state.freelancer.description) {
        const res = await this.$axios.$get(
          `freelance/get-freelancer-info/${userId}`
        )
        commit('UPDATE_RESPONSES', res.message, { root: true })
        commit('UPDATE_FREELANCER', res.result)
      }
      console.log('Did not work')
    } catch (error) {
      console.log(error.msg)
    }
  }
}
