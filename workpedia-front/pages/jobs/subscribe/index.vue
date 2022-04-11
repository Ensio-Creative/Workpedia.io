<template>
  <div class="container-fluid auth-container">
    <div class="row justify-content-center">
      <div class="col-12 col-lg-9 login-column">
        <div class="row inner-auth-row justify-content-center">
          <div class="col-10 col-lg-6 auth-column">
            <form
              @submit.prevent="onSubmit"
            >
              <div class="form-heading">
                <h2 class="my-4">
                  Subscribe to apply for jobs
                </h2>
              </div>
              <h4><strong>{{ fullName }}</strong></h4>
              <AppControlInput
                v-model="amount"
                type="number"
                disabled
              >
                Amount
              </AppControlInput>
              <small>NOTE: You are given 5 chances to apply for jobs with this subscription.</small>
              <!-- <small
                :class="[password.length <= 6 ? 'info-error' : 'info-success']"
              >
                {{ infoTextPassword }}
              </small> -->
              <AppButton
                type="submit"
                class="btn-apply my-4"
              >
                Proceed to make payment
              </AppButton>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import AppButton from '~/components/auth/UI-Components/AppButton.vue'
import AppControlInput from '~/components/auth/UI-Components/AppControlInput.vue'
export default {
  name: 'SubscribeToJobs',
  components: { AppControlInput, AppButton },
  layout: 'auth',
  async asyncData ({ $axios }) {
    const res = await $axios.$get('jobs/get-settings')
    const { result } = res
    return { result }
  },
  data () {
    return {
      amount: '5000'
    }
  },
  computed: {
    ...mapState('auth', ['user']),
    fullName () {
      const name = this.user.firstName + ' ' + this.user.lastName
      return name
    }
  },
  mounted () {
    this.amount = this.result.applyAmount
  },
  methods: {
    ...mapActions('applicant', ['subscription']),
    onSubmit () {
      this.subscription(this.amount)
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
  height: 89vh;
}
.auth-column{
  background-color: #fff;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 30px;
  border-radius: 30px;
}

.sub-container{
  border-radius: 8px;
}
.btn-apply{
  background-color: var(--bg-dark-blue) !important;
  border-radius: 8px;
  color: #fff;
}
.btn-apply:hover{
  text-decoration: none;
}
</style>
