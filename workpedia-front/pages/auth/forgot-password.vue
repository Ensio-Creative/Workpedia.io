<template>
  <div class="container-fluid auth-container">
    <div class="row justify-content-center">
      <div class="col-12 col-lg-9 login-column">
        <div class="row inner-auth-row justify-content-center">
          <div class="col-6 col-lg-6 auth-column" />
          <div class="col-10 col-lg-6 auth-column">
            <form
              class="my-5"
              @submit.prevent="onSubmit"
            >
              <div class="form-heading">
                <h2>Forgotten password</h2>
                <p>Enter your email and a Code will be sent to you</p>
              </div>
              <AppControlInput
                v-model.trim="email"
                type="email"
                @input="checkEmail"
              >
                Enter Email
              </AppControlInput>
              <small
                :class="[validEmail(email) ? 'info-success' : 'info-error']"
              >
                {{ infoTextEmail }}
              </small>
              <AppButton
                type="submit"
                class="signin-btn mt-3"
              >
                Send
              </AppButton>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'ForgottenPassword',
  layout: 'auth',
  emits: ['changeComponent'],
  data () {
    return {
      email: '',
      password: '',
      infoTextPassword: '',
      infoTextEmail: ''
    }
  },
  methods: {
    ...mapActions('auth', ['forgot']),
    checkEmail () {
      if (!this.validEmail(this.email)) {
        this.infoTextEmail = 'Email should be valid'
        return false
      } else {
        this.infoTextEmail = 'Valid'
        return true
      }
    },
    onSubmit () {
      if (this.checkEmail) {
        const result = {
          email: this.email
        }
        // console.log(result)
        this.forgot(result)
        return
      }
      console.log('Wrong pass')
    },
    validEmail (email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    }
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
  height: 89vh;
}
.auth-column{
  background-image: url('~assets/img/pexels-photo-4497733.jpeg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 30px;
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
  padding: 30px;
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
  padding: 30px;
  border-radius: 20px 0px 0px 20px;
}
}
.form-heading{
  text-align: center;
}
.form-heading strong{
  color: #251E8C;
  cursor: pointer;
}

.signin-btn{
  background-color: #251E8C;
}
.sign-privacy{
  padding-top: 10px;
  text-align: center;
}
.sign-options-btn {
  border: 1px solid #BCBCBC;
  background: #FBFBFB;
  border-radius: 5px !important;
  font-weight: bold;
  font-size: 16px;
  letter-spacing: 0px;
  color: #707070;
}
.sign-options-btn img {
  float: left;
  padding: 5px;
  width: 29px;
  height: 29px;
}
.sign-options-btn:nth-child(2){
  background: #FBFBFB;
  border-radius: 5px !important;
  font-family: 'Roboto' !important;
}
</style>
