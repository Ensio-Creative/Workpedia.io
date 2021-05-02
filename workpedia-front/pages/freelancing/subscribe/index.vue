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
                  Subscribe to hire freelancers
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
export default {
  name: 'SubscribeToJobs',
  layout: 'auth',
  async asyncData ({ $axios }) {
    const res = await $axios.$get('freelance/get-settings')
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
    this.amount = this.result.hireAmount
  },
  methods: {
    ...mapActions('freelance', ['subscription']),
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
  /* border-radius: 20px 0px 0px 20px; */
}
.auth-columnl{
  background: #fff;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 35px;
  border-radius: 20px;
}

.sub-container{
  border-radius: 8px;
}
.btn-apply{
  background-color: #2B7DC4 !important;
  border-radius: 8px;
  color: #fff;
}
.btn-apply:hover{
  text-decoration: none;
}
</style>
