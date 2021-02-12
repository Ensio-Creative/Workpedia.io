<template>
  <div>
    <form>
      <div class="form-heading">
        <h2>Login</h2>
        <p>Don't have an account? <strong @click="$emit('changeComponent')">Sign Up</strong> </p>
      </div>
      <AppControlInput
        v-model.trim="email"
        type="email"
      >
        Enter Email
      </AppControlInput>
      <AppControlInput
        v-model.trim="password"
        type="password"
      >
        Password
      </AppControlInput>
      <AppButton
        class="sign-btn mt-3"
        type="submit"
      >
        Login
      </AppButton>
    </form>
    <div class="sign-privacy">
      <p>By signing up for Workepdia, you agree to our <strong>Privacy Policy</strong> & <strong>Terms of Service</strong> </p>
    </div>
    <div class="sign-up-options pt-3 mb-5">
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
      password: null
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
