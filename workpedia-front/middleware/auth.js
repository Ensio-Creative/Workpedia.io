export default function (context) {
  if (context.store.getters.isAuthenticated) {
    // context.redirect('/auth')
    console.log('context.store.state.auth.user.token')
  }
}
