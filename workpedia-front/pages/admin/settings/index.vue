<template>
  <div class="container">
    <TopNavInfo
      dash-title="Settings"
    />
    <SettingsNavAdmin
      class="mt-5"
    />
    <div class="row justify-content-center mt-5">
      <div class="col-8">
        <UserImg />
      </div>
      <div class="col-8">
        <UpdateUser />
      </div>
      <div class="col-8">
        <h2>Change password</h2>
        <UpdatePassword />
      </div>
      <div class="col-8 mt-5">
        <AddAdmin />
      </div>
    </div>
    <FooterDash
      class="mt-5"
    />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import TopNavInfo from '@/components/Navigation/dashboard/TopNavInfo.vue'
import UserImg from '@/components/dashboard/UserImg.vue'
import UpdateUser from '@/components/dashboard/UpdateUser.vue'
import states from '~/static/data/states.js'
import SettingsNavAdmin from '~/components/admin/settings/SettingsNavAdmin.vue'
import FooterDash from '~/components/dashboard/FooterDash.vue'
import UpdatePassword from '~/components/dashboard/UpdatePassword.vue'
import AddAdmin from '~/components/auth/AddAdmin.vue'
export default {
  name: 'Settings',
  layout: 'admin',
  components: { TopNavInfo, UserImg, UpdateUser, SettingsNavAdmin, FooterDash, UpdatePassword, AddAdmin },
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
