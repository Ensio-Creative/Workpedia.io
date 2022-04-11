export default function ({ $axios }, inject) {
  // const token = store

  // $axios.onError((error) => {
  //   console.log(error, token)
  // })

  // $axios.onResponse((res) => {
  //   // $toast.success(res)
  //   // console.log(res.data.message)
  // })
  $axios.setBaseURL(`${process.env.BASE_URL}/api/`)
  // $axios.defaults.headers.common.authorization = token ? `Bearer ${token}` : ''
  // $axios.setToken(token, 'Bearer')
}
