<template>
  <div
    class="container-fluid post-a-job"
  >
    <div class="row justify-content-center">
      <div class="col-5 bg-white mt-5 sub-container">
        <form
          @submit.prevent="onSubmit"
        >
          <div class="form-heading">
            <h2 class="my-4">
              Subscribe to apply for a job
            </h2>
          </div>
          <h4>Subscription for <strong>{{ fullName }}</strong></h4>
          <AppControlInput
            v-model="amount"
            type="text"
            disabled
          >
            Amount
          </AppControlInput>
          <small>NOTE THIS IS A YEARLY PAYMENT</small>
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
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'SubscribeToJobs',
  layout: 'auth',
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
  methods: {
    onSubmit () {
      console.log(this.amount)
    }
  }
}
</script>

<style scoped>
.sub-container{
  border-radius: 8px;
}
.btn-apply{
  background-color: #0DB47B !important;
  border-radius: 8px;
  color: #fff;
}
.btn-apply:hover{
  text-decoration: none;
}
</style>
