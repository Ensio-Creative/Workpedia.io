<template>
  <div
    class="container-fluid post-a-job"
  >
    <div class="row justify-content-center">
      <div class="col-5 bg-white mt-5 sub-container">
        <form>
          <div class="form-heading">
            <h2 class="my-4">
              Subscribe to apply for a job
            </h2>
          </div>
          <AppControlInput
            v-model.trim="name"
            type="text"
            @input="checkEmail"
          >
            Name
          </AppControlInput>
          <AppControlInput
            v-model.trim="email"
            type="email"
            @input="checkEmail"
          >
            Enter Email
          </AppControlInput>
          <!-- <small
            :class="[validEmail(email) ? 'info-success' : 'info-error']"
          >
            {{ infoTextEmail }}
          </small> -->
          <AppControlInput
            type="text"
          >
            Phone
          </AppControlInput>
          <!-- <small
            :class="[password.length <= 6 ? 'info-error' : 'info-success']"
          >
            {{ infoTextPassword }}
          </small> -->
          <AppControlInput
            v-model="amount"
            type="text"
          >
            Amount
          </AppControlInput>
          <small>NOTE THIS IS A LIFE TIME PAYMENT</small>
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
export default {
  name: 'SubscribeToJobs',
  layout: 'auth',
  data () {
    return {
      name: '',
      email: '',
      phone: '',
      amount: '5000'
    }
  },
  methods: {
    checkEmail () {
      console.log(this.email)
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
</style>
