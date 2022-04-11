<template>
  <div>
    <form
      @submit.prevent="onSubmit"
    >
      <div class="row">
        <div class="col password">
          <input
            v-model="oldPassword"
            class="input-password"
            :type="passwordField"
            required
            placeholder="Old password"
            @input="checkOldPassword"
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
            :class="[oldPassword.length <= 6 ? 'info-error' : 'info-success']"
          >
            {{ oldPasswordInfo }}
          </small>
        </div>
        <div class="col password">
          <input
            v-model="newPassword"
            class="input-password"
            :type="passwordField"
            required
            placeholder="New password"
            @input="checkNewPassword"
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
            :class="[newPassword.length <= 5 || newPassword === oldPassword ? 'info-error' : 'info-success']"
          >
            {{ newPasswordInfo }}
          </small>
        </div>
      </div>
      <div class="row">
        <div class="col password">
          <input
            v-model="confirmPassword"
            class="input-password"
            :type="passwordField"
            required
            placeholder="Confirm password"
            @input="checkConfirmPassword"
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
</template>

<script>
import { mapActions } from 'vuex'
import AppButton from '../auth/UI-Components/AppButton.vue'
export default {
  name: 'UpdatePassword',
  components: { AppButton },
  data () {
    return {
      passwordField: 'password',
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
    switchVisibility () {
      this.passwordField = this.passwordField === 'password' ? 'text' : 'password'
    },
    checkOldPassword () {
      if (this.oldPassword.length <= 6) {
        this.oldPasswordInfo = 'Please add your old password'
        return false
      } else {
        this.oldPasswordInfo = ' '
        return true
      }
    },
    checkNewPassword () {
      if (this.newPassword.length <= 5) {
        this.newPasswordInfo = 'Please password should be 7 or more charcters'
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
        this.confirmPasswordInfo = 'Match'
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

<style lang="scss" scoped>
.signin-btn{
  background-color: #251E8C;
}
.password i {
  margin-left: -30px;
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
</style>
