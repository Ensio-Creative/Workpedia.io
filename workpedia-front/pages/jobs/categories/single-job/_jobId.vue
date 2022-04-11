<template>
  <div>
    <section
      v-if="fliteredJobs"
      class="categorie mt-5 mb-5"
    >
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-12 col-lg-10">
            <div class="row">
              <div
                class="col-12 col-md-12 col-lg-12 popular-column"
              >
                <div class="popular-column-heading">
                  <i class="fas fa-suitcase" />
                  <h3>{{ fliteredJobs.title }}</h3>
                  <p>{{ `${fliteredJobs.city}, ${fliteredJobs.state} ` }}</p>
                </div>
                <div class="popular-durations">
                  <span class="gray-background">
                    <h6>{{ $moment(fliteredJobs.createdAt).format('LL') }}</h6>
                  </span>
                  <span class="gray-background">
                    <h6>{{ fliteredJobs.duration }}</h6>
                  </span>
                  <span class="gray-background">
                    <h6>NGN {{ fliteredJobs.amount }}</h6>
                  </span>
                </div>
                <div class="popular-text mt-3 mb-4">
                  <h4>Job Description</h4>
                  <p>
                    {{ fliteredJobs.description }}
                  </p>
                </div>
                <button
                  v-b-modal.modal-lg
                  type="button"
                  class="btn btn-apply text-center"
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- <Testimony /> -->
    <!-- News Letter -->
    <NewsLetter />
    <!-- Footer -->
    <Footer />
    <!-- Model code -->
    <!-- The modal -->
    <b-modal
      v-if="fliteredJobs"
      id="modal-lg"
      size="lg"
      :cancel-disabled="true"
      :ok-disabled="true"
    >
      <template #modal-title>
        <h5
          id="staticBackdropLabel"
          class="modal-title"
        >
          Application for {{ fliteredJobs.title }}
        </h5>
      </template>
      <div class="contact-info">
        <!-- User img -->
        <div class="contact-detail">
          <div
            class="user-img"
            :style="{backgroundImage: 'url('+ `${envVarable}/${user.imageUrl}` +')'}"
          />
        </div>
        <div class="contact-detail">
          <!-- User name -->
          <h5><strong>{{ fullName }}</strong></h5>
          <!-- User Description -->
          <p>{{ address }}</p>
          <!-- User location -->
          <small class="gray">{{ user.address }} Nigeria</small>
        </div>
      </div>
      <form
        @submit.prevent="onSubmit"
      >
        <!-- Map the user info from vuex -->
        <div class="row">
          <div class="col">
            <AppControlInput
              v-model.trim="email"
              type="text"
              required
            >
              Email
            </AppControlInput>
            <!-- <small
              :class="[city.length < 3 ? 'info-error' : 'info-success']"
            >
              {{ cityInfo }}
            </small> -->
          </div>
          <div class="col">
            <AppControlInput
              v-model.trim="phone"
              type="text"
              required
            >
              Phone
            </AppControlInput>
            <!-- <small
              :class="[city.length < 3 ? 'info-error' : 'info-success']"
            >
              {{ cityInfo }}
            </small> -->
          </div>
        </div>
        <div class="row">
          <p>NOTE: We added your CV</p>
        </div>
      </form>
      <template #modal-footer="{ cancel}">
        <!-- Emulate built in modal footer ok and cancel button actions -->
        <b-button size="sm" variant="primary" @click="cancel()">
          Cancel
        </b-button>
        <b-button size="sm" variant="primary" @click="onSubmit(fliteredJobs._id, fliteredJobs.companyId, fliteredJobs.userId)">
          Submit
        </b-button>
      </template>
    </b-modal>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import AppControlInput from '~/components/auth/UI-Components/AppControlInput.vue'
import Footer from '~/components/common/Footer.vue'
import NewsLetter from '~/components/common/NewsLetter.vue'
const vars = process.env.BASE_URL
export default {
  name: 'SingleJob',
  components: { NewsLetter, Footer, AppControlInput },
  data () {
    return {
      routeUrl: this.$route.params.jobId,
      email: '',
      envVarable: vars,
      phone: '',
      amount: 1000000 // in kobo
    }
  },
  computed: {
    // Change the code to from using fliters
    ...mapState('jobs', ['jobs']),
    ...mapState('auth', ['user']),
    ...mapState('applicant', ['applicant']),
    fliteredJobs () {
      const result = this.jobs.find(job => job._id === this.routeUrl)
      return result
    },
    fullName () {
      const name = this.user.firstName + ' ' + this.user.lastName
      return name
    },
    address () {
      const address = `${this.user.city} ${this.user.state}`
      return address
    }
  },
  mounted () {
    this.email = this.user.email
    this.phone = this.user.phone
  },
  methods: {
    ...mapActions('applicant', ['sendApplication']),
    onSubmit (jobID, companyID, userID) {
      if (!this.user.token) {
        this.$router.push('/auth')
        this.$toast.info('Please sign up')
      }
      if (this.user.isApplicant && this.applicant.applyChance > 0) {
        // console.log({ job: jobId, Company: companyId, USer: userId })
        const payload = {
          jobId: jobID,
          companyId: companyID,
          userId: userID
        }
        this.sendApplication(payload)
      }
      if (this.user.isApplicant && !this.applicant.applyChance > 0) {
        this.$router.push('/jobs/subscribe')
      }
      if (!this.user.isApplicant) {
        this.$router.push('/jobs/register-applicant')
      }
    }
  }
}
</script>

<style scoped>
.btn-apply{
  background-color: #251E8C;
  padding: 10px;
  border-radius: 8px;
  color: #fff;
  margin-bottom: 40px;
}

.btn-apply:hover{
  text-decoration: none;
}
.modal-body {
  padding: 1rem 3rem !important;
}

.contact-info{
  display: flex;
}
.contact-info p{
  margin: 0px !important;
}
.contact-info img{
  width: 56px;
  height: 56px;
  box-sizing: border-box;
  background-clip: content-box;
  border: 2px solid transparent;
  border-radius: 49.9%;
}
.contact-detail:nth-child(2) {
  padding-left: 16px;
}
.contact-info small{
  color: rgba(0,0,0,.5);
}
</style>
