export default function ({ $axios, store, $toast }, inject) {
  // $axios.onError((error) => {
  //   // console.log(error)
  // })
  $axios.onResponse((res) => {
    // $toast.success(res)
    // console.log(res.data.message)
  })
  $axios.setBaseURL(`${process.env.BASE_URL}/api/`)
  // $axios.setBaseURL('http://localhost:8000/api/')
  const token = store.state.auth.user.token
  $axios.setHeader('Authorization', token)
  $axios.setToken(token, 'Bearer')
}
