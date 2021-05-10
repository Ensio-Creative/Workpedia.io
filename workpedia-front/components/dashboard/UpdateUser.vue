<template>
  <div>
    <form
      class="mb-5"
      @submit.prevent="onSubmit"
    >
      <div class="row">
        <div class="col">
          <AppControlInput
            v-model.trim="firstName"
            type="text"
            required
            @input="checkFirstName"
          >
            First Name
          </AppControlInput>
          <small
            :class="[firstName.length < 3 ? 'info-error' : 'info-success']"
          >
            {{ firstNameInfo }}
          </small>
        </div>
        <div class="col">
          <AppControlInput
            v-model.trim="lastName"
            type="text"
            required
            @input="checklastName"
          >
            Last Name
          </AppControlInput>
          <small
            :class="[lastName.length <= 3 ? 'info-error' : 'info-success']"
          >
            {{ lastNameInfo }}
          </small>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <AppControlInput
            v-model="phone"
            type="number"
            required
            @input="checkPhone"
          >
            Phone
          </AppControlInput>
          <small
            :class="[phone.length === 11 ? 'info-success' : 'info-error']"
          >
            {{ phoneInfo }}
          </small>
        </div>
        <div class="col">
          <AppControlInput
            v-model.number="age"
            type="number"
            required
          >
            Age
          </AppControlInput>
        </div>
      </div>
      <AppControlInput
        v-model.trim="email"
        type="email"
        required
        @input="checkEmail"
      >
        Enter Email
      </AppControlInput>
      <small
        :class="[validEmail(email) ? 'info-success' : 'info-error']"
      >
        {{ infoTextEmail }}
      </small>
      <div class="row">
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
      </div>
      <AppControlInput
        v-model.trim="address"
        type="text"
        required
      >
        Address
      </AppControlInput>
      <!-- <small
        :class="[password.length <= 6 ? 'info-error' : 'info-success']"
      >
        {{ addressInfo }}
      </small> -->
      <AppButton
        type="submit"
        class="signin-btn mt-3"
      >
        Save update
      </AppButton>
    </form>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import states from '~/static/data/states.js'
export default {
  name: 'UpdateUser',
  data () {
    return {
      firstName: '',
      lastName: '',
      phone: '',
      age: '',
      email: '',
      address: '',
      stateSelect: '',
      city: '',
      infoTextEmail: '',
      firstNameInfo: '',
      lastNameInfo: '',
      addressInfo: '',
      cityInfo: '',
      phoneInfo: '',
      states
    }
  },
  computed: {
    ...mapState('auth', ['user'])
  },
  mounted () {
    this.firstName = this.user.firstName
    this.lastName = this.user.lastName
    this.phone = this.user.phone
    this.age = this.user.age.toString()
    this.email = this.user.email
    this.address = this.user.address
    this.stateSelect = this.user.state
    this.city = this.user.city
  },
  methods: {
    ...mapActions('auth', ['updateUser']),
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
    checkCity () {
      if (this.city.length < 3) {
        this.cityInfo = 'Put a Valid city'
        return false
      } else {
        this.cityInfo = ''
        return true
      }
    },
    onSubmit () {
      if (this.checkEmail) {
        const result =
        {
          firstName: this.firstName,
          lastName: this.lastName,
          phone: this.phone,
          age: this.age,
          email: this.email,
          state: this.stateSelect,
          city: this.city,
          address: this.address
        }
        this.updateUser(result)
        // console.log(result)
        return
      }
      console.log('Wrong pass')
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
.input-error{
  display: block;
  background-color: #E9E9E9;
  width: 100%;
  box-sizing: border-box;
  font: inherit;
  border: 1px solid red;
  border-radius: 8px;
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

.settings-nav{
  margin-top: 20px;
}

a {
  font-size: 18px;
  color: #251E8C;
}
.settings-nav-item:nth-child(1){
  border-right: 1px solid #251E8C;
}
a.nuxt-link-active{
  color: #000;
}
</style>
