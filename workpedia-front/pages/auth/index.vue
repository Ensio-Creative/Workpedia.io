<template>
  <div class="container-fluid auth-container">
    <div class="row justify-content-center">
      <div class="col-12 col-lg-9 login-column">
        <div class="row inner-auth-row justify-content-center">
          <div class="col-6 col-lg-6 auth-column" />
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
export default {
  layout: 'auth',
  middleware: 'checkIfLogin',
  name: 'Auth',
  data () {
    return {
      ownAccount: false
    }
  },
  mounted () {
    this.ownAccount = this.$store.state.hasAccount
  }
}
</script>

<style scoped>
.inner-auth-row{
  border-radius: 20px;
  margin-top: 40px;
}
.login-column{
  margin-top: 70px;
  height: 135vh;
}
.auth-column{
  background-image: url('~assets/img/pexels-photo-4497733.jpeg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 45px;
  /* border-radius: 20px 0px 0px 20px; */
}
.auth-column:nth-child(2){
  background: #fff;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  /* border-radius: 0px 20px 20px 0px; */
}
.auth-columnl{
  background: #fff;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 35px;
  border-radius: 20px;
}

@media screen and (max-width: 780px) {
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
}
@media screen and (max-width: 980px) {
  .auth-column{
  display: none;
  background-image: url('~assets/img/pexels-photo-4497733.jpeg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 45px;
  border-radius: 20px 0px 0px 20px;
}
}

</style>
