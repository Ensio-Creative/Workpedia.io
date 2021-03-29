export default function (context) {
  if (!context.store.state.auth.user.token) {
    // context.redirect('/auth')
  } else {
    // context.redirect('/auth')
    console.log('We passed')
  }
}
