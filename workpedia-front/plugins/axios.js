export default function ({ $axios, error: nuxtError, store }, inject) {
  $axios.onError((error) => {
    nuxtError({
      statusCode: error.response.status,
      message: error.message
    })
    return Promise.resolve(false)
  })
  $axios.setBaseURL('http://localhost:8000/api/')
  const token = store.state.auth.user.token
  $axios.setHeader('Authorization', token)
  $axios.setToken(token, 'Bearer')
}
