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
  counter: 0,
  tutors: [
    {
      id: 1,
      tutorThumbnail: '@/assets/img/maths_e@2x.png',
      tutorTitle: 'Web dev',
      author: 'Great Adams',
      courseCategory: 'Front-end'
    },
    {
      id: 2,
      tutorThumbnail: '~/assets/img/biology.png',
      tutorTitle: 'Geography',
      author: 'Great Adams',
      courseCategory: 'Geo'
    },
    {
      id: 3,
      tutorThumbnail: 'https://unsplash.com/photos/m_HRfLhgABo',
      tutorTitle: 'English',
      author: 'Angela Tosin',
      courseCategory: 'Reading'
    },
    {
      id: 4,
      tutorThumbnail: '~assets/img/maths_e@2x.png',
      tutorTitle: 'Mathematics',
      author: 'Price Mark',
      courseCategory: 'Staticts'
    },
    {
      id: 5,
      tutorThumbnail: '~assets/img/maths_e@2x.png',
      tutorTitle: 'Computer science',
      author: 'Ifeanyichukwu LAwson',
      courseCategory: 'Programming'
    },
    {
      id: 6,
      tutorThumbnail: '~assets/img/maths_e@2x.png',
      tutorTitle: 'Computer science',
      author: 'Ifeanyichukwu LAwson',
      courseCategory: 'Programming'
    }
  ]
})

export const mutations = {
  increment (state) {
    state.counter++
  }
}
