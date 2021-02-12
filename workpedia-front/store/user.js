export const state = () => ({
  user: {}
})

export const mutations = {
  login (state, payload) {
    state.user({
      payload,
      done: false
    })
  }
}
