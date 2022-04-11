<template>
  <div class="container">
    <TopNavInfo
      dash-title="Hire"
    />
    <HireNav
      class="mt-5"
    />
    <!-- Companies info -->
    <div class="row justify-content-around">
      <div class="col-12 col-md-3">
        <div class="row justify-content-center">
          <div class="col-8 col-md-12 tutor-basic-info">
            <img src="~assets/img/avatar_c@2x.png" alt="" class="user-img rounded">
            <h4 class="user-name">
              {{ companyName }}
            </h4>
          </div>
          <div class="col-8 col-md-12 tutor-basic-info text-left">
            <h4 class="user-name">
              Description
            </h4>
            <p>{{ companyDescription }}</p>
          </div>
        </div>
      </div>
      <client-only>
        <div
          v-if="hire.companyDescription"
          class="col-12 col-md-8 tab-colum mb-4"
        >
          <CompanyInfo
            class="mt-4"
          />
        </div>
      </client-only>
    </div>
    <!-- Footer -->
    <FooterDash />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import FooterDash from '~/components/dashboard/FooterDash.vue'
import CompanyInfo from '~/components/dashboard/hire/CompanyInfo.vue'
import HireNav from '~/components/dashboard/hire/HireNav.vue'
import TopNavInfo from '~/components/Navigation/dashboard/TopNavInfo.vue'
export default {
  name: 'Hire',
  layout: 'dashboard',
  components: { FooterDash, TopNavInfo, CompanyInfo, HireNav },
  data () {
    return {
      companyName: '',
      companyWeb: '',
      companyDescription: ''
    }
  },
  computed: {
    ...mapState('hire', ['hire'])
  },
  mounted () {
    this.fetchCompany()
    this.companyName = this.hire.companyName
    this.companyWeb = this.hire.companyWeb
    this.companyDescription = this.hire.companyDescription
  },
  methods: {
    ...mapActions('hire', ['getHire']),
    fetchCompany () {
      this.getHire()
    }
  }
}
</script>

<style scoped>
.container, .container-sm, .container-md, .container-lg {
  max-width: 1050px;
}

</style>
