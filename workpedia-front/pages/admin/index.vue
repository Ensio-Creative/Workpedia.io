<template>
  <div class="container">
    <TopNavInfo
      dash-title="Dashboard"
    />
    <h2 class="welcom-text">
      Welcome!
    </h2>
    <div class="row row-cols-1 row-cols-md-2 g-4">
      <div
        class="col"
      >
        <div class="card info-containers-users">
          <div class="card-body">
            <h4 class="card-title">
              Users
            </h4>
            <p class="card-text text-white">
              {{ result.users }}
            </p>
          </div>
        </div>
      </div>
      <div
        class="col"
      >
        <div class="card info-containers">
          <div class="card-body">
            <h4 class="card-title">
              Tutors
            </h4>
            <p class="card-text text-white">
              {{ result.tutors }}
            </p>
          </div>
        </div>
      </div>
      <div
        class="col"
      >
        <div class="card info-containers2">
          <div class="card-body">
            <h4 class="card-title">
              Jobs
            </h4>
            <span class="card-text text-white jobs-card-text">
              Applicants: {{ result.applicants }}
            </span>
            <span class="card-text text-white jobs-card-text">
              Hirer: {{ result.hires }}
            </span>
          </div>
        </div>
      </div>
      <div
        class="col"
      >
        <div class="card info-containers3">
          <div class="card-body">
            <h4 class="card-title">
              Freelance/Handymen
            </h4>
            <p class="card-text text-white">
              {{ result.freelance }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="activity-row mt-4">
      <div
        class="activity-column"
        @click="activeTab = 'TutorActivity'"
      >
        <div class="activity-img" />
        <h3>Tutor</h3>
      </div>
      <div
        class="activity-column"
        @click="activeTab = 'JobsActivity'"
      >
        <div class="activity-img" />
        <h3>Jobs</h3>
      </div>
      <div
        class="activity-column"
        @click="activeTab = 'FreelaceActivity'"
      >
        <div class="activity-img" />
        <h3>Freelance</h3>
      </div>
    </div>
    <component :is="activeTab" /> -->
    <FooterDash
      class="fixed-bottom"
    />
  </div>
</template>

<script>
export default {
  name: 'AdminHome',
  layout: 'admin',
  async asyncData ({ $axios }) {
    const calculations = await $axios.get('admin/calculations-users')
    const result = calculations.data
    return { result }
  },
  data () {
    return {
      activeTab: ''
    }
  },
  computed: {
    fullName () {
      const userName = `${this.user.firstName} ${this.user.lastName}`
      return userName
    }
  }
}
</script>

<style scoped>
.container, .container-sm, .container-md, .container-lg {
  max-width: 1050px;
}
.welcom-text{
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 22px;
}
.info-containers-users{
  background-color: #0C0573;
  color: #fff;
  height: 180px;
}

.info-containers-users h3 {
  padding: 20px;
}
.info-containers{
  background-color: #FF9B17;
  color: #fff;
  height: 180px;
}

.info-containers h3 {
  padding: 20px;
}
.info-containers2 {
  background-color: #0DB47B;
  color: #fff;
  height: 180px;
}

.info-containers3 {
  background-color: #2B7DC4;
  color: #fff;
  height: 180px;
}
.info-containers:nth-child(4) {
  background-color: #0DB47B;
}
.welcome-message{
  padding-left: 40px;
}
.top-container h2{
  color: #fff;
  padding-top: 60px;
}

.card-title {
    margin-bottom: 4.75rem;
    font-weight: bold;
}

.card-text {
  margin-bottom: 0;
  font-size: 20px;
  font-weight: bold;
}

/* .jobs-card-text{
  display: flex;
} */
</style>
