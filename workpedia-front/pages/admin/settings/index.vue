<template>
  <div class="container">
    <TopNavInfo
      dash-title="Settings"
    />
    <SettingsNavAdmin
      class="mt-5"
    />
    <main>
      <div class="row justify-content-center">
        <div class="col-12 col-md-5 mt-4">
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
      </div>
    </main>
    <h5
      class="text-center my-3"
    >
      Change Password
    </h5>
    <main class="row justify-content-center">
      <div class="col-12 col-md-5 mt-4">
        <form
          @submit.prevent="onUpdatePassword"
        >
          <div class="row">
            <div class="col">
              <AppControlInput
                v-model.trim="oldPassword"
                type="password"
                required
                @input="checkOldPassword"
              >
                Old password
              </AppControlInput>
              <small
                :class="[oldPassword.length <= 6 ? 'info-error' : 'info-success']"
              >
                {{ oldPasswordInfo }}
              </small>
            </div>
            <div class="col">
              <AppControlInput
                v-model="newPassword"
                type="password"
                required
                @input="checkNewPassword"
              >
                New password
              </AppControlInput>
              <small
                :class="[newPassword.length <= 6 || newPassword === oldPassword ? 'info-error' : 'info-success']"
              >
                {{ newPasswordInfo }}
              </small>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <AppControlInput
                v-model.trim="confirmPassword"
                type="password"
                required
                @input="checkConfirmPassword"
              >
                Confirm password
              </AppControlInput>
              <small
                :class="[confirmPassword !== newPassword ? 'info-error' : 'info-success']"
              >
                {{ confirmPasswordInfo }}
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
    </main>
    <FooterDash
      class="mt-5"
    />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import states from '~/static/data/states.js'
export default {
  name: 'Settings',
  layout: 'admin',
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
      states,
      oldPassword: '',
      newPassword: '',
      confirmPassword: '',
      oldPasswordInfo: '',
      newPasswordInfo: '',
      confirmPasswordInfo: ''
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
    ...mapActions('auth', ['updateUser', 'updatePassword']),
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
    checkOldPassword () {
      if (this.oldPassword.length <= 5) {
        this.oldPasswordInfo = 'Please add your old password'
        return false
      } else {
        this.oldPasswordInfo = ' '
        return true
      }
    },
    checkNewPassword () {
      if (this.newPassword.length <= 6) {
        this.newPasswordInfo = 'Please password should be 5 or more charcters'
        return false
      } else if (this.newPassword === this.oldPassword) {
        this.newPasswordInfo = 'New password Should not be same to old password'
        return false
      } else {
        this.newPasswordInfo = ' '
        return true
      }
    },
    checkConfirmPassword () {
      if (this.confirmPassword !== this.newPassword) {
        this.confirmPasswordInfo = 'Passwords should match'
        return false
      } else {
        this.confirmPasswordInfo = ''
        return true
      }
    },
    onUpdatePassword () {
      if (this.checkOldPassword() && this.checkNewPassword() && this.checkConfirmPassword()) {
        const payload = {
          oldPassword: this.oldPassword,
          newPassword: this.newPassword
        }
        this.updatePassword(payload)
        this.oldPassword = ''
        this.newPassword = ''
        this.confirmPassword = ''
      } else {
        console.log('E no work')
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
    }
  }
}
</script>

<style scoped>
.container, .container-sm, .container-md, .container-lg {
  max-width: 1050px;
}
.signin-btn{
  background-color: #251E8C;
}
</style>
