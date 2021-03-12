export default function ({ $axios, store }, inject) {
  $axios.onError((error) => {
    if (error.response.status === 500) {
      console.log('Error')
    }
  })
  $axios.setBaseURL('http://localhost:8000/')
}
