<template>
  <div
    class="container-fluid post-a-job"
  >
    <div class="row justify-content-center">
      <div class="col-5 bg-white my-5 px-4 sub-container">
        <form>
          <div class="form-heading">
            <h2 class="my-4">
              Hire in Workpedia
            </h2>
          </div>
          <AppControlInput
            v-model.trim="companyName"
            type="text"
            placeholder="Name"
            required
          >
            Company Name*
          </AppControlInput>
          <!-- <small
            :class="[validEmail(email) ? 'info-success' : 'info-error']"
          >
            {{ infoTextEmail }}
          </small> -->
          <div class="row">
            <div class="col">
              <AppControlInput
                v-model.trim="companyWeb"
                type="text"
                placeholder="Optional"
              >
                Company Webpage
              </AppControlInput>
            </div>
            <div class="col">
              <AppControlInput
                v-model.trim="companyemail"
                type="text"
                placeholder="Email"
                required
              >
                Company Email*
              </AppControlInput>
              <!-- <small
                :class="[companyemail.length < 3 ? 'info-error' : 'info-success']"
              >
                {{ companyemailInfo }}
              </small> -->
            </div>
          </div>
          <!-- <small
            :class="[validEmail(email) ? 'info-success' : 'info-error']"
          >
            {{ infoTextEmail }}
          </small> -->
          <AppControlInput
            v-model="phone"
            type="text"
            placeholder="Phone"
            required
          >
            Company Phone*
          </AppControlInput>
          <!-- <small
            :class="[password.length <= 6 ? 'info-error' : 'info-success']"
          >
            {{ infoTextPassword }}
          </small> -->
          <div class="row">
            <div class="col">
              <AppControlInput
                v-model="facebook"
                type="text"
                placeholder="http://...."
              >
                Facebook
              </AppControlInput>
              <!-- <small
                :class="[password.length <= 6 ? 'info-error' : 'info-success']"
              >
                {{ infoTextPassword }}
              </small> -->
            </div>
            <div class="col">
              <AppControlInput
                v-model="twitter"
                type="text"
                placeholder="http://"
              >
                Twitter
              </AppControlInput>
            </div>
            <div class="col">
              <AppControlInput
                v-model.trim="linkedIn"
                type="text"
                placeholder="http://"
              >
                LinkedIn
              </AppControlInput>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <label for="">Company Description*</label>
              <textarea
                v-model="companyDescription"
                type="text"
                class="form-control mb-3"
                placeholder="Company Description"
                aria-label="First n ame"
                rows="3"
                required
              />
            </div>
          </div>
          <AppButton
            type="submit"
            class="btn-apply my-4"
          >
            Hire now!
          </AppButton>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostAJobs',
  layout: 'auth',
  data () {
    return {
      companyName: '',
      companyWeb: '',
      companyemail: '',
      phone: '',
      facebook: '',
      twitter: '',
      linkedIn: '',
      companyDescription: ''
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
