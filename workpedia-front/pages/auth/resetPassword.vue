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
                <h2>Reset Password</h2>
                <p>Enter the code Sent to your email</p>
              </div>
              <AppControlInput
                v-model.trim="code"
                type="number"
                @input="checkCode"
              >
                Enter Code
              </AppControlInput>
              <small
                :class="[code.length <= 3 ? 'info-error' : 'info-success']"
              >
                {{ infoTextCode }}
              </small>
              <AppControlInput
                v-model.trim="password"
                type="password"
                @input="checkPassword"
              >
                Password
              </AppControlInput>
              <small
                :class="[password.length <=6 ? 'info-error' : 'info-success']"
              >
                {{ infoTextPassword }}
              </small>
              <AppControlInput
                v-model.trim="passwordRepeat"
                type="password"
                @input="checkPasswordRepeat"
              >
                Confirm password
              </AppControlInput>
              <small
                :class="[passwordRepeat !== password ? 'info-error' : 'info-success']"
              >
                {{ infoTextRepeat }}
              </small>
              <AppButton
                type="submit"
                class="signin-btn mt-3"
              >
                Reset password
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
  name: 'ResetPassword',
  layout: 'auth',
  emits: ['changeComponent'],
  data () {
    return {
      code: '',
      password: '',
      passwordRepeat: '',
      infoTextPassword: '',
      infoTextCode: '',
      infoTextRepeat: ''
    }
  },
  methods: {
    ...mapActions('auth', ['resetPassword']),
    checkCode () {
      if (this.code.length <= 3) {
        this.infoTextCode = 'Code should be added'
        return false
      } else {
        this.infoTextCode = ''
        return true
      }
    },
    checkPassword () {
      if (this.password.length <= 6) {
        this.infoTextPassword = 'Password should be above 6 characters'
        return false
      } else {
        this.infoTextPassword = 'Strong'
        return true
      }
    },
    checkPasswordRepeat () {
      if (this.passwordRepeat !== this.password) {
        this.infoTextRepeat = 'Passwords should be match'
        return false
      } else {
        this.infoTextRepeat = 'Matched'
        return true
      }
    },
    onSubmit () {
      if (this.checkPassword() && this.checkCode()) {
        const result = {
          code: this.code,
          password: this.password,
          confirmPassword: this.passwordRepeat
        }
        // console.log(result)
        this.resetPassword(result)
        return
      }
      console.log('Wrong pass')
    },
    validCode (Code) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(Code)
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
  height: 97vh;
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
