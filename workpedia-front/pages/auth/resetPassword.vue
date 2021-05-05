<template>
  <div class="container-fluid auth-container">
    <div class="row justify-content-center">
      <div class="col-12 col-lg-9 login-column">
        <div class="row inner-auth-row justify-content-center">
          <div class="col-10 col-lg-6 auth-column">
            <form
              class="my-5"
              @submit.prevent="onSubmit"
            >
              <div class="form-heading mb-5">
                <!-- <img src="~/assets/img/Workpedia logo transparent (Blue).png" alt=""> -->
                <h2>Reset Password</h2>
                <p>Enter the code Sent to your email</p>
              </div>
              <AppControlInput
                v-model.trim="code"
                type="number"
                placeholder="Enter Code"
                @input="checkCode"
              />
              <small
                :class="[code.length <= 3 ? 'info-error' : 'info-success']"
              >
                {{ infoTextCode }}
              </small>
              <div class="row">
                <div class="col-12 password">
                  <input
                    id="password"
                    v-model="password"
                    class="input-password"
                    :type="passwordField"
                    required
                    placeholder="Password"
                    @input="checkPassword"
                  >
                  <i
                    v-if="passwordField === 'password'"
                    class="far fa-eye"
                    @click="switchVisibility"
                  />
                  <i
                    v-else
                    class="far fa-eye-slash"
                    @click="switchVisibility"
                  />
                  <small
                    :class="[password.length <= 6 ? 'info-error' : 'info-success']"
                  >
                    {{ infoTextPassword }}
                  </small>
                </div>
                <div class="col-12 password">
                  <input
                    v-model="passwordRepeat"
                    class="input-password"
                    :type="passwordField"
                    required
                    placeholder="Confirm password"
                    @input="checkPasswordRepeat"
                  >
                  <i
                    v-if="passwordField === 'password'"
                    class="far fa-eye"
                    @click="switchVisibility"
                  />
                  <i
                    v-else
                    class="far fa-eye-slash"
                    @click="switchVisibility"
                  />
                  <small
                    :class="[passwordRepeat !== password ? 'info-error' : 'info-success']"
                  >
                    {{ infoTextRepeat }}
                  </small>
                </div>
              </div>
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
      passwordField: 'password',
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
    switchVisibility () {
      this.passwordField = this.passwordField === 'password' ? 'text' : 'password'
    },
    onSubmit () {
      if (this.checkPassword() && this.checkCode()) {
        const result = {
          code: this.code,
          password: this.password,
          confirmPassword: this.passwordRepeat
        }
        // console.log(result)
        this.$store.commit('HAS_ACCOUNT', true)
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
/* .inner-auth-row{
  border-radius: 20px;
  margin-top: 40px;
}
.login-column{
  margin-top: 0px;
  height: 97vh;
} */

.auth-column{
  background: #fff;
  padding: 30px;
  border-radius: 20px;
}
.form-heading img{
  width: 83px;
  margin-bottom: 30px;
}
.input-password {
  margin: 10px 0;
  /* display: block; */
  background-color: #E9E9E9;
  width: 100%;
  box-sizing: border-box;
  font: inherit;
  padding: 10px;
  border: 0px;
  border-radius: 8px;
}
.input-password:focus {
  background-color: #E9E9E9;
  outline: none;
  border: 0px;
}

.password i {
  margin-left: -30px;
  cursor: pointer;
}
/* @media screen and (max-width: 780px) {
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
} */
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
