<template>
  <div class="container">
    <TopNavInfo
      dash-title="Jobs"
    />
    <div class="row mt-4">
      <div class="col-6 job-info">
        <h2>Application for {{ application.jobId.title }}</h2>
        <p>{{ $moment(application.jobId.createdAt).fromNow() }}</p>
        <p>Duration: {{ application.jobId.duration }}</p>
        <p>Experience: {{ application.jobId.experience }}</p>
        <p>Amount: {{ application.jobId.amount }}</p>
        <p>Phone: {{ application.jobId.phone }}</p>
        <p>location: {{ `${application.jobId.state}, ${application.jobId.city}` }}</p>
        <p>Job Description: {{ application.jobId.description }}</p>
      </div>
      <div class="col-6 applicant-info">
        <h2>Applicant: {{ `${applicant.userId.firstName} ${applicant.userId.lastName}` }}</h2>
        <p>Title: {{ applicant.title || '' }}</p>
        <p>Institution {{ applicant.institution }}</p>
        <p>Qualification {{ applicant.qualifications }}</p>
        <p>Skills {{ applicant.skills }}</p>
        <p>Age: {{ applicant.userId.age }}</p>
        <p>Phone: {{ applicant.userId.age }}</p>
        <p>Location: {{ `${applicant.userId.state} ${applicant.userId.city}` }}</p>
      </div>
      <div
        v-if="hirer"
        class="col-8 mb-5"
      >
        <h2>Company Details</h2>
        <p>Company Name: {{ hirer.companyName }}</p>
        <p>Company Email: {{ hirer.companyEmail }}</p>
        <p>Company Phone: {{ hirer.companyPhone }}</p>
        <p>Company Web: {{ hirer.companyWeb }}</p>
        <p>Company Social: {{ `Facebook ${hirer.social.facebook}, Twitter: ${hirer.social.twittter}, LinkedIn: ${hirer.social.linkedIn}` }}</p>
        <p>Company Description: {{ hirer.companyDescription }}</p>
        <button class="btn btn-outline-success">
          Send Application
        </button>
      </div>
      <div
        v-if="user"
        class="col-12 company-info"
      >
        <h2>
          Admin Posted job {{ `${user.firstName} ${user.lastName}` }}
        </h2>
        <p>Phone: {{ user.phone }}</p>
        <p>Email: {{ user.email }}</p>
        <p>Address: {{ user.address }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SingleApplication',
  layout: 'admin',
  async asyncData ({ $axios, params }) {
    const { user, hirer, applicant, application } = await $axios.$get(`application/get-application/${params.application}`)
    return { user, hirer, applicant, application }
  }
}
</script>

<style scoped>
.container, .container-sm, .container-md, .container-lg {
  max-width: 1050px;
}
</style>
