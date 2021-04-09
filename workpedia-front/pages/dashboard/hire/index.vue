<template>
  <div class="container">
    <TopNavInfo
      dash-title="Hire"
    />
    <HireNav />
    <!-- Companies info -->
    <div class="row justify-content-around">
      <div class="col-12 col-md-3">
        <div class="row">
          <div class="col-12 tutor-basic-info">
            <img src="~assets/img/avatar_c@2x.png" alt="" class="user-img rounded">
            <h4 class="user-name">
              {{ companyName }}
            </h4>
          </div>
          <div class="col-12 tutor-basic-info text-left">
            <h4 class="user-name">
              Description
            </h4>
            <p>{{ companyDescription }}</p>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-8 tab-colum mb-4">
        <CompanyInfo
          class="mt-4"
        />
      </div>
    </div>
    <!-- Footer -->
    <FooterDash />
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Hire',
  layout: 'dashboard',
  data () {
    return {
      companyName: 'Max limited',
      companyWeb: 'www.maxlimited.com',
      companyDescription: 'quidem exercitationem illum commodi atque eum nisi labore consequuntur nulla? Illum, quis dignissimos!'
    }
  },
  computed: {
    ...mapState('hire', ['hire'])
  }
}
</script>

<style scoped>
.container, .container-sm, .container-md, .container-lg {
  max-width: 1050px;
}

</style>
