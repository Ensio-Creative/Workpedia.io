<template>
  <div>
    <div class="container mt-5">
      <TopNavInfo
        dash-title="Jobs"
      />
      <div class="row justify-content-around">
        <div class="col-12 col-md-3">
          <div class="row justify-content-center">
            <div class="col-8 col-md-12 tutor-basic-info">
              <div
                class="user-img"
                :style="{backgroundImage: 'url('+ `${envVarable}/${user.imageUrl}` +')'}"
              />
              <h4 class="user-name">
                {{ fullName }}
              </h4>
              <!-- <p>Age: {{ user.age }}</p> -->
            </div>
            <div class="col-8 col-md-12 tutor-basic-info text-left">
              <h4 class="user-name">
                Description
              </h4>
              <p>{{ applicant.description }}</p>
            </div>
          </div>
        </div>
        <client-only>
          <div
            v-if="applicant.title"
            class="col-12 col-md-8 tab-colum"
          >
            <Qualifications
              class="mt-5"
            />
          </div>
        </client-only>
      </div>
    </div>
    <!-- Footer -->
    <FooterDash
      class="mt-4"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import FooterDash from '~/components/dashboard/FooterDash.vue'
import Qualifications from '~/components/dashboard/jobs/Qualifications.vue'
import TopNavInfo from '~/components/Navigation/dashboard/TopNavInfo.vue'
const vars = process.env.BASE_URL
export default {
  name: 'TutorDashboard',
  components: { TopNavInfo, Qualifications, FooterDash },
  layout: 'dashboard',
  data () {
    return {
      userName: '',
      envVarable: vars,
      applicantDescription: ''
    }
  },
  computed: {
    ...mapState('auth', ['user']),
    ...mapState('applicant', ['applicant']),
    fullName () {
      const name = this.user.firstName + ' ' + this.user.lastName
      return name
    }
  },
  mounted () {
    this.fetchApplicant()
  },
  methods: {
    ...mapActions('applicant', ['getApplicant']),
    fetchApplicant () {
      this.getApplicant()
    }
  }
}

</script>

<style scoped>
.container, .container-sm, .container-md, .container-lg {
  max-width: 1050px;
}
</style>
