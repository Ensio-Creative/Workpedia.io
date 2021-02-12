import Vue from 'vue'
import Vuex from 'vuex'

// import actions from './actions'
// import state from './state'
// import mutations from './mutations'

Vue.use(Vuex)

// const createStore = () => {
//   return new Vuex.Store({
//     // modules: { auth, admin, user },
//     state,
//     actions,
//     mutations
//   })
// }
// export default createStore

export const state = () => ({
  counter: 0
})

export const mutations = {
  increment (state) {
    state.counter++
  }
}
