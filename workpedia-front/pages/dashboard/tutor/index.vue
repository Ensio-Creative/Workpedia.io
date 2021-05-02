<template>
  <div class="container">
    <TopNavInfo
      dash-title="Tutor"
    />
    <div class="row justify-content-around">
      <div class="col-12 col-md-3">
        <div class="row justify-content-center">
          <div class="col-8 col-md-12 tutor-basic-info">
            <img src="~assets/img/avatar_c@2x.png" alt="" class="user-img rounded">
            <h4 class="user-name">
              {{ fullName }}
            </h4>
            <h5 class="user-name">
              Age: {{ user.age }}
            </h5>
          </div>
          <div class="col-8 col-md-12 tutor-basic-info text-left">
            <h4 class="user-name">
              Description:
            </h4>
            <p>{{ tutorDescriptionInfo }}</p>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-12 col-md-8 tab-colum">
        <div class="tab">
          <div
            class="tab-items"
          >
            <a
              href="#"
              @click="activeTab = 'TutorDetails'"
            >
              Tutor Details
            </a>
          </div>
          <div
            class="tab-items"
          >
            <a
              href="#"
              @click="activeTab = 'TutorQulificatios'"
            >
              Qualifications
            </a>
          </div>
        </div>
        <keep-alive>
          <component
            :is="activeTab"
            class="mt-4"
            @changeComponent="activeTab = 'TutorQulificatios'"
          />
        </keep-alive>
      </div>
    </div>
    <FooterDash
      class="mt-5"
    />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import TutorDetails from '~/components/dashboard/tutor/TutorDetails.vue'
import TutorQulificatios from '~/components/dashboard/tutor/TutorQulificatios.vue'
export default {
  name: 'TutorDashboard',
  components: { TutorDetails, TutorQulificatios },
  layout: 'dashboard',
  data () {
    return {
      tutorDescription: '',
      activeTab: 'TutorDetails'
    }
  },
  computed: {
    ...mapState('auth', ['user']),
    ...mapState('tutors', ['tutor', 'startInfo']),
    fullName () {
      const name = `${this.user.firstName} ${this.user.lastName}`
      return name
    },
    tutorDescriptionInfo () {
      let description
      if (!this.tutor.description) {
        description = this.startInfo.description
      } else {
        description = this.tutor.description
      }
      return description
    }
  },
  mounted () {
    this.fetchTutor()
  },
  methods: {
    ...mapActions('tutors', ['getTutor']),
    fetchTutor () {
      this.getTutor()
    }
  }
}
</script>

<style scoped>
.container, .container-sm, .container-md, .container-lg {
  max-width: 1050px;
}
.tutor-basic-info{
  box-shadow: 0px 0px 1px 0px #00000029;
  border-radius: 8px;
  text-align: center;
  margin-top: 30px;
}
.tab-colum{
  box-shadow: 0px 0px 1px 0px #00000029;
  border-radius: 8px;
  margin-top: 30px;
}
.user-img{
  margin-top: 20px;
}
.user-name{
  padding-top: 5px;
  padding-bottom: 5px;
}
.tab {
    padding-top: 20px;
}
.tab-items{
  display: inline;
  padding: 20px;
}
.tab-items:hover{
  border-bottom: 1px solid #FF9B17;
}
.tab-items:focus{
  border-bottom: 1px solid #FF9B17;
}
.tab-items a {
  color: #FF9B17;
  text-decoration: none;
  margin-top: 10px;
}
</style>
