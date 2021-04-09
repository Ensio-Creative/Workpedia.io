<template>
  <div class="container">
    <TopNavInfo
      dash-title="Settings"
    />
    <div class="settings-nav">
      <div
        class="row"
      >
        <NuxtLink
          v-for="links in nav"
          :key="links.url"
          class="col text-center settings-nav-item"
          :to="links.url"
        >
          {{ links.title }}
        </NuxtLink>
      </div>
    </div>
    <main class="row justify-content-center">
      <div class="col-5 mt-4">
        <form
          @submit.prevent="onSubmit"
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
                :class="[oldPassword.length <= 5 ? 'info-error' : 'info-success']"
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
                :class="[newPassword.length <= 5 || newPassword === oldPassword ? 'info-error' : 'info-success']"
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
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Settings',
  layout: 'dashboard',
  data () {
    return {
      nav: [
        {
          title: 'User settings',
          url: '/dashboard/settings'
        },
        {
          title: 'Update Password',
          url: '/dashboard/settings/password'
        }
      ],
      oldPassword: '',
      newPassword: '',
      confirmPassword: '',
      oldPasswordInfo: '',
      newPasswordInfo: '',
      confirmPasswordInfo: ''
    }
  },
  methods: {
    ...mapActions('auth', ['updatePassword']),
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
      if (this.newPassword.length <= 5) {
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
    onSubmit () {
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
    }
  }
}
</script>

<style  scoped>
.container, .container-sm, .container-md, .container-lg {
  max-width: 1050px;
}
.settings-nav{
  margin-top: 20px;
}
.signin-btn{
  background-color: #251E8C;
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
