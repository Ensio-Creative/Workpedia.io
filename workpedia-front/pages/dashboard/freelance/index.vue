<template>
  <div>
    <div class="container mt-5">
      <TopNavInfo
        dash-title="Freelance/Handymen"
      />
      <div class="row justify-content-around">
        <div class="col-12 col-md-3">
          <div class="row justify-content-center">
            <div class="col-10 col-md-10 tutor-basic-info">
              <div
                class="user-img"
                :style="{backgroundImage: 'url('+ `${envVarable}/${user.imageUrl}` +')'}"
              />
              <h4 class="user-name">
                {{ fullName }}
              </h4>
            </div>
            <div class="col-10 col-md-10 tutor-basic-info text-left">
              <h4 class="user-name">
                Description
              </h4>
              <p>{{ freelancerDescription }}</p>
            </div>
          </div>
        </div>
        <client-only>
          <div
            v-if="freelancer.title"
            class="col-12 col-md-8 tab-colum"
          >
            <div class="tab">
              <div
                class="tab-items"
              >
                <a
                  href="#"
                  @click="activeTab = 'FreelanceDetails'"
                >
                  Freelance Details
                </a>
              </div>
            </div>
            <keep-alive>
              <component
                :is="activeTab"
                class="mt-4"
                @changeComponent="activeTab = 'Upload'"
              />
            </keep-alive>
          </div>
        </client-only>
      </div>
      <FooterDash
        class="mt-4"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import FreelanceDetails from '~/components/dashboard/freelance/FreelanceDetails.vue'
import Upload from '~/components/dashboard/freelance/Upload.vue'
import FooterDash from '~/components/dashboard/FooterDash.vue'
import TopNavInfo from '~/components/Navigation/dashboard/TopNavInfo.vue'
const vars = process.env.BASE_URL
export default {
  name: 'FreelanceDashboard',
  components: { FreelanceDetails, Upload, FooterDash, TopNavInfo },
  layout: 'dashboard',
  data () {
    return {
      userName: '',
      envVarable: vars,
      activeTab: 'FreelanceDetails'
    }
  },
  computed: {
    ...mapState('auth', ['user']),
    ...mapState('freelance', ['freelancer']),
    fullName () {
      const name = this.user.firstName + ' ' + this.user.lastName
      return name
    },
    freelancerDescription () {
      const description = this.freelancer.description
      return description
    }
  },
  mounted () {
    this.fetchFreelancer()
  },
  methods: {
    ...mapActions('freelance', ['getFreelancer']),
    fetchFreelancer () {
      this.getFreelancer()
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
  padding-top: 20px;
}
.tab {
    padding-top: 20px;
}
.tab-items{
  display: inline;
  padding: 20px;
}
.tab-items:hover{
  border-bottom: 1px solid var(--bg-dark-blue);
}
.tab-items:focus{
  border-bottom: 1px solid var(--bg-dark-blue);
}
.tab-items a {
  color: var(--bg-dark-blue);
  text-decoration: none;
  margin-top: 10px;
}
</style>
