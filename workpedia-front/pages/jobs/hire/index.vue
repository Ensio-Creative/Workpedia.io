<template>
  <div
    class="container-fluid post-a-job"
  >
    <div class="row justify-content-center">
      <div class="col-11 col-md-5 bg-white my-5 px-4 sub-container">
        <form @submit.prevent="onSubmit">
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
            @input="checkCompanyName"
          >
            Company Name*
          </AppControlInput>
          <small
            :class="[companyName.length <= 3 ? 'info-error' :'info-success']"
          >
            {{ infoTextname }}
          </small>
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
                type="email"
                placeholder="Email"
                required
                @input="checkEmail"
              >
                Company Email*
              </AppControlInput>
              <small
                :class="[validEmail(companyemail) ? 'info-success' : 'info-error']"
              >
                {{ infoTextEmail }}
              </small>
            </div>
          </div>
          <AppControlInput
            v-model="phone"
            type="number"
            placeholder="Phone"
            required
            @input="checkPhone"
          >
            Company Phone*
          </AppControlInput>
          <small
            :class="[phone.length === 11 ? 'info-success' : 'info-error']"
          >
            {{ phoneInfo }}
          </small>
          <div class="row">
            <div class="col">
              <AppControlInput
                v-model="facebook"
                type="text"
                placeholder="http://...."
              >
                Facebook
              </AppControlInput>
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
                rows="2"
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
import { mapActions } from 'vuex'
export default {
  name: 'PostAJobs',
  layout: 'auth',
  data () {
    return {
      companyName: '',
      infoTextname: '',
      companyWeb: '',
      companyemail: '',
      infoTextEmail: '',
      phone: '',
      phoneInfo: '',
      facebook: '',
      twitter: '',
      linkedIn: '',
      companyDescription: '',
      errors: []
    }
  },
  methods: {
    ...mapActions('hire', ['registerHire']),
    checkCompanyName () {
      if (this.companyName.length <= 3) {
        this.infoTextname = 'Please add Name'
        return false
      } else {
        this.infoTextname = ''
        return true
      }
    },
    checkEmail () {
      if (!this.validEmail(this.companyemail)) {
        this.infoTextEmail = 'Email should be valid'
        return false
      } else {
        this.infoTextEmail = 'Valid'
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
    onSubmit () {
      if (!this.checkPhone() && !this.checkEmail()) {
        return this.errors.push('Please Fill in every field')
      }
      if (!this.checkCompanyName() && !this.companyDescription) {
        return this.errors.push('Please Fill in every field')
      }
      if (!this.errors.length) {
        const payload = {
          companyName: this.companyName,
          companyWeb: this.companyWeb,
          companyEmail: this.companyemail,
          companyPhone: this.phone,
          social: {
            facebook: this.facebook,
            twitter: this.twitter,
            linkedIn: this.linkedIn
          },
          companyDescription: this.companyDescription
        }
        // console.log(payload)
        this.registerHire(payload)
        return payload
      } else {
        console.log('Errors everywhere man!!!')
      }
    },
    validEmail (email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    }
  }
}
</script>

<style scoped>
.sub-container{
  border-radius: 8px;
}
.btn-apply{
  background-color: #251E8C !important;
  border-radius: 8px;
  color: #fff;
}
</style>
