export default function ({ $axios, store }, inject) {
  $axios.onError((error) => {
    if (error.response.status === 500) {
      console.log('Error')
    }
  })
  $axios.setBaseURL('http://localhost:8000/api/')
  const token = store.state.auth.user.token
  $axios.setToken(token, 'Bearer')
}
