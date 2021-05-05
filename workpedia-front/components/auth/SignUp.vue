<template>
  <div>
    <form
      @submit.prevent="onSubmit"
    >
      <div class="form-heading">
        <h2>Create account</h2>
        <p>Have an account ? <strong @click="$emit('changeComponent')">Login</strong> </p>
      </div>
      <div class="row">
        <div class="col-12">
          <AppControlInput
            v-model.trim="firstName"
            type="text"
            required
            placeholder="First name"
            @input="checkFirstName"
          />
          <small
            :class="[firstName.length < 3 ? 'info-error' : 'info-success']"
          >
            {{ firstNameInfo }}
          </small>
        </div>
        <div class="col-12">
          <AppControlInput
            v-model.trim="lastName"
            type="text"
            required
            placeholder="Last name"
            @input="checklastName"
          />
          <small
            :class="[lastName.length <= 3 ? 'info-error' : 'info-success']"
          >
            {{ lastNameInfo }}
          </small>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <AppControlInput
            v-model.trim="email"
            type="email"
            required
            placeholder="Email"
            @input="checkEmail"
          />
          <small
            :class="[validEmail(email) ? 'info-success' : 'info-error']"
          >
            {{ infoTextEmail }}
          </small>
        </div>
        <div class="col-12">
          <AppControlInput
            v-model="phone"
            type="number"
            required
            placeholder="Phone"
            @input="checkPhone"
          />
          <small
            :class="[phone.length === 11 ? 'info-success' : 'info-error']"
          >
            {{ phoneInfo }}
          </small>
        </div>
        <!-- <div class="col">
          <AppControlInput
            v-model="age"
            type="number"
            required
          >
            Age
          </AppControlInput>
        </div> -->
      </div>
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
            {{ infoTextPasswordRepeat }}
          </small>
        </div>
      </div>
      <!-- <div class="row">
        <div class="col">
          <label for="">State</label>
          <select
            v-model="stateSelect"
            class="form-select"
            aria-label="Default select example"
            required
          >
            <option
              v-for="state in states"
              :key="state"
              selected
              :value="state"
              required
            >
              {{ state }}
            </option>
          </select>
        </div>
        <div class="col">
          <AppControlInput
            v-model.trim="city"
            type="text"
            required
            @input="checkCity"
          >
            City
          </AppControlInput>
          <small
            :class="[city.length < 3 ? 'info-error' : 'info-success']"
          >
            {{ cityInfo }}
          </small>
        </div>
      </div> -->
      <!-- <AppControlInput
        v-model.trim="address"
        type="text"
        required
        placeholder="Address"
        @input="checkAddress"
      />
      <small
        :class="[address.length <= 6 ? 'info-error' : 'info-success']"
      >
        {{ addressInfo }}
      </small> -->
      <AppButton
        type="submit"
        class="signin-btn mt-3"
      >
        Sign up
      </AppButton>
    </form>
    <div class="sign-privacy">
      <p>By signing up for Workepdia, you agree to our <strong @click="$router.push('/privacy')">Privacy Policy</strong> & <strong>Terms of Service</strong> </p>
    </div>
    <!-- <div class="sign-up-options pt-3 mb-5 text-center">
      <a href="#" class="btn sign-options-btn">
        <img src="~assets/img/google-hangouts.svg" alt="">
        SIGN UP WITH GOOGLE
      </a>
      <a href="#" class="btn sign-options-btn">
        <img src="~assets/img/facebook2.svg" alt="">
      </a>
    </div> -->
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import states from '~/static/data/states.js'
export default {
  emits: ['changeComponent'],
  data () {
    return {
      firstName: '',
      lastName: '',
      phone: '',
      age: '',
      email: '',
      password: '',
      passwordRepeat: '',
      passwordField: 'password',
      address: '',
      stateSelect: '',
      city: '',
      infoTextPassword: '',
      infoTextPasswordRepeat: '',
      infoTextEmail: '',
      firstNameInfo: '',
      lastNameInfo: '',
      addressInfo: '',
      cityInfo: '',
      phoneInfo: '',
      states,
      error: ''
    }
  },
  computed: {
    changePasswordIcon () {
      const result = this.passwordField === 'password' ? 'far fa-eye' : 'far fa-eye-slash'
      return result
    }
  },
  methods: {
    ...mapActions('auth', ['signUp']),
    checkFirstName () {
      if (this.firstName.length < 3) {
        this.firstNameInfo = 'Add your first name'
        return false
      } else {
        this.firstNameInfo = ''
        return true
      }
    },
    checklastName () {
      if (this.lastName.length < 3) {
        this.lastNameInfo = 'Add your last name'
        return false
      } else {
        this.lastNameInfo = ''
        return true
      }
    },
    checkPhone () {
      if (this.phone.length < 11 || this.phone.length > 11) {
        this.phoneInfo = 'Phone should be 11 digits'
        return false
      } else {
        this.phoneInfo = ''
        return true
      }
    },
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
    checkPasswordRepeat () {
      if (this.passwordRepeat !== this.password) {
        this.infoTextPasswordRepeat = 'Password Must match'
        return false
      } else {
        this.infoTextPasswordRepeat = 'Match'
        return true
      }
    },
    switchVisibility () {
      this.passwordField = this.passwordField === 'password' ? 'text' : 'password'
    },
    checkCity () {
      if (this.city.length < 3) {
        this.cityInfo = 'Put a Valid city'
        return false
      } else {
        this.cityInfo = ''
        return true
      }
    },
    checkAddress () {
      if (this.address.length <= 6) {
        this.addressInfo = 'Add your address'
        return false
      } else {
        this.addressInfo = ''
        return true
      }
    },
    onSubmit () {
      this.error = ''
      if (!this.checkFirstName() && !this.checklastName() && !this.checkPhone()) {
        this.error = 'Please fill all fields'
        this.$toast.error('Please fill all fields')
      }
      if (!this.checkPassword() && !this.checkEmail() && !this.checkPasswordRepeat()) {
        this.error = 'Please fill all fields'
        this.$toast.error('Please fill all fields')
      }
      // if (!this.checkCity() && !this.checkAddress()) {
      //   this.error = 'Please fill all fields'
      //   this.$toast.error('Please fill all fields')
      // }
      if (!this.error.length) {
        const result =
        {
          firstName: this.firstName,
          lastName: this.lastName,
          phone: this.phone,
          email: this.email,
          password: this.password
        }
        this.signUp(result)
        // this.$emit('changeComponent')
        // console.log(result)
      }
    },
    validEmail (email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    },
    routeToTerms () {
      this.$router.push('/terms')
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
.input-error{
  display: block;
  background-color: #E9E9E9;
  width: 100%;
  box-sizing: border-box;
  font: inherit;
  border: 1px solid red;
  border-radius: 8px;
}

.password i {
  margin-left: -30px;
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
strong {
  cursor: pointer;
}
</style>
