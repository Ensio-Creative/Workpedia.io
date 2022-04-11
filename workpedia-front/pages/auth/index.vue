<template>
  <div class="container-fluid auth-container">
    <div class="row justify-content-center">
      <div
        class="col-12 col-lg-9"
        :class="[ownAccount ? 'login-column' : 'sign-column']"
      >
        <div class="row inner-auth-row justify-content-center">
          <div class="col-10 col-lg-6 auth-column">
            <SignUp
              v-if="!ownAccount"
              @changeComponent="ownAccount = true"
            />
            <LogIn
              v-if="ownAccount"
              @changeComponent="ownAccount = false"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LogIn from '../../components/auth/LogIn.vue'
import SignUp from '../../components/auth/SignUp.vue'
export default {
  name: 'Auth',
  layout: 'auth',
  components: { SignUp, LogIn },
  middleware ({ store, redirect }) {
    // If the user is not authenticated
    if (store.state.auth.user.token) {
      return redirect('/')
    }
  },
  data () {
    return {
      ownAccount: false
    }
  },
  mounted () {
    this.ownAccount = this.$store.state.hasAccount
  },
  head: {
    title: 'workpedia.io - login/signup'
  }
}
</script>

<style scoped>
.inner-auth-row{
  border-radius: 20px;
  margin-bottom: 40px;
}
.sign-column{
  margin-top: 70px;
}
.login-column{
  margin-top: 70px;
  height: 89vh;
}
.auth-column{
  background: #fff;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  /* /* border: 1px solid #251E8C; */
  border-radius: 20px;
}
.auth-columnl{
  background: #fff;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 35px;
  border-radius: 20px;
}

/* @media screen and (max-width: 780px) {
  .auth-column{
  display: none;
  background-image: url('~assets/img/pexels-photo-4497733.jpeg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 45px;
      border-radius: 20px 0px 0px 20px;
}
.auth-column:nth-child(2){
  margin: auto;
  display: block;
  background: #fff;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 20px 20px 20px 20px;
}
} */
/* @media screen and (max-width: 980px) {
  .auth-column{
  display: none;
  background-image: url('~assets/img/pexels-photo-4497733.jpeg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 45px;
  border-radius: 20px 0px 0px 20px;
}
} */

</style>
