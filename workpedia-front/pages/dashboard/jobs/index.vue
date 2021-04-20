<template>
  <div>
    <div class="container mt-5">
      <TopNavInfo
        dash-title="Jobs"
      />
      <div class="row justify-content-around">
        <div class="col-12 col-md-3">
          <div class="row">
            <div class="col-12 tutor-basic-info">
              <img src="~assets/img/avatar_c@2x.png" alt="" class="user-img rounded">
              <h4 class="user-name">
                {{ fullName }}
              </h4>
              <p>Age: {{ user.age }}</p>
            </div>
            <div class="col-12 tutor-basic-info text-left">
              <h4 class="user-name">
                Description
              </h4>
              <p>{{ applicant.description }}</p>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-8 tab-colum">
          <Qualifications
            class="mt-5"
          />
        </div>
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
export default {
  name: 'TutorDashboard',
  layout: 'dashboard',
  data () {
    return {
      userName: 'Great Adams',
      applicantDescription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam accusantium ut adipisci'
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
