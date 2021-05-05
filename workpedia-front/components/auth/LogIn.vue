<template>
  <div>
    <form
      class="my-5"
      @submit.prevent="onSubmit"
    >
      <div class="form-heading mb-5">
        <img src="~/assets/img/Workpedia logo transparent (Blue).png" alt="">
      </div>
      <AppControlInput
        v-model.trim="email"
        type="email"
        placeholder="Email"
        @input="checkEmail"
      />
      <small
        :class="[validEmail(email) ? 'info-success' : 'info-error']"
      >
        {{ infoTextEmail }}
      </small>
      <div class="password">
        <input
          v-model.trim="password"
          :type="passwordField"
          class="input-password"
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
      </div>
      <NuxtLink
        to="/auth/forgot-password"
        class="text-center"
      >
        <p>Forgotten password ?</p>
      </NuxtLink>
      <AppButton
        type="submit"
        class="signin-btn mt-1"
      >
        Login
      </AppButton>
      <p class="text-center mt-4">
        Don't have an account ? <strong @click="$emit('changeComponent')">Sign up</strong>
      </p>
    </form>
    <!-- <div class="sign-privacy">
      <p>By signing up for Workepdia, you agree to our <strong>Privacy Policy</strong> & <strong>Terms of Service</strong> </p>
    </div> -->
    <!-- <div class="sign-up-options pt-3 mb-5 text-center">
      <a href="#" class="btn sign-options-btn">
        <img src="~assets/img/google-hangouts.svg" alt="">
        LOG IN WITH GOOGLE
      </a>
      <a href="#" class="btn sign-options-btn">
        <img src="~assets/img/facebook2.svg" alt="">
      </a>
    </div> -->
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  emits: ['changeComponent'],
  data () {
    return {
      email: '',
      password: '',
      passwordField: 'password',
      infoTextPassword: '',
      infoTextEmail: ''
    }
  },
  methods: {
    ...mapActions('auth', ['login']),
    checkEmail () {
      if (!this.validEmail(this.email)) {
        this.infoTextEmail = 'Email should be valid'
        return false
      } else {
        this.infoTextEmail = 'Valid'
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
    switchVisibility () {
      this.passwordField = this.passwordField === 'password' ? 'text' : 'password'
    },
    onSubmit () {
      if (this.checkPassword() && this.checkEmail()) {
        const result = {
          email: this.email,
          password: this.password
        }
        // console.log(result)
        this.login(result)
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
.form-heading{
  text-align: center;
}
.form-heading img{
  width: 83px;
}
p strong {
  cursor: pointer;
  color: #251E8C;
}
.signin-btn{
  background-color: #251E8C;
  padding: 1px;
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
</style>
