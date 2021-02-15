<template>
  <div>
    <form @submit.prevent="onSubmit">
      <div class="form-heading">
        <h2>Create account</h2>
        <p>Have an account? <strong @click="$emit('changeComponent')">Login</strong> </p>
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
      <AppControlInput
        v-model.trim="password"
        type="password"
        @input="checkPassword"
      >
        Password
      </AppControlInput>
      <small
        :class="[password.length <= 6 ? 'info-error' : 'info-success']"
      >
        {{ infoTextPassword }}
      </small>
      <AppButton
        type="submit"
        class="signin-btn mt-3"
      >
        Sign up
      </AppButton>
    </form>
    <div class="sign-privacy">
      <p>By signing up for Workepdia, you agree to our <strong>Privacy Policy</strong> & <strong>Terms of Service</strong> </p>
    </div>
    <div class="sign-up-options pt-3 mb-5 text-center">
      <a href="#" class="btn sign-options-btn">
        <img src="~assets/img/google-hangouts.svg" alt="">
        SIGN UP WITH GOOGLE
      </a>
      <a href="#" class="btn sign-options-btn">
        <img src="~assets/img/facebook2.svg" alt="">
      </a>
    </div>
  </div>
</template>

<script>

export default {
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
    onSubmit () {
      if (this.checkPassword() && this.checkEmail) {
        const result =
        {
          email: this.email,
          password: this.password
        }
        console.log(result)
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
.form-heading strong{
  color: #251E8C;
  cursor: pointer;
}
.input-error{
  display: block;
  background-color: #E9E9E9;
  width: 100%;
  box-sizing: border-box;
  font: inherit;
  border: 1px solid red;
  border-radius: 8px;
}
.info-success{
  color: green;
}
.info-error{
  color: red;
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
