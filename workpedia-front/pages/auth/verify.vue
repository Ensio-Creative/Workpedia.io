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
              <div class="form-heading">
                <h2>Verify Email</h2>
                <p>Enter your email and code</p>
              </div>
              <AppControlInput
                v-model.trim="email"
                type="email"
                placeholder="Email"
                @input="checkEmail"
              />
              <small
                :class="[validemail(email) ? 'info-success' : 'info-error']"
              >
                {{ infoTextemail }}
              </small>
              <AppControlInput
                v-model.trim="code"
                type="number"
                placeholder="Code"
                @input="checkCode"
              />
              <small
                :class="[code.length <= 3 ? 'info-error' : 'info-success']"
              >
                {{ infoTextCode }}
              </small>
              <AppButton
                type="submit"
                class="signin-btn mt-3"
              >
                Verify
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
import AppButton from '~/components/auth/UI-Components/AppButton.vue'
import AppControlInput from '~/components/auth/UI-Components/AppControlInput.vue'
export default {
  name: 'Verify',
  layout: 'auth',
  components: { AppControlInput, AppButton },
  emits: ['changeComponent'],
  data () {
    return {
      email: '',
      code: '',
      infoTextCode: '',
      infoTextemail: ''
    }
  },
  methods: {
    ...mapActions('auth', ['verify']),
    checkEmail () {
      if (!this.validemail(this.email)) {
        this.infoTextEmail = 'Email should be valid'
        return false
      } else {
        this.infoTextEmail = 'Valid'
        return true
      }
    },
    checkCode () {
      if (this.code.length <= 3) {
        this.infoTextCode = 'Code should be added'
        return false
      } else {
        this.infoTextCode = ''
        return true
      }
    },
    onSubmit () {
      if (this.checkCode() && this.checkEmail()) {
        const result = {
          email: this.email,
          code: this.code
        }
        // console.log(result)

        this.$store.commit('HAS_ACCOUNT', true)
        this.verify(result)
        return
      }
      console.log('Wrong pass')
    },
    validemail (email) {
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
  height: 95vh;
}

.auth-column{
  background: #fff;
  padding: 30px;
  border-radius: 20px;
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
} */
/* @media screen and (max-width: 980px) {
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
