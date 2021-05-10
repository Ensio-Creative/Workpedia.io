<template>
  <div class="container">
    <TopNavInfo
      dash-title="Dashboard"
    />
    <h2 class="welcom-text">
      Welcome {{ fullName }}!
    </h2>
    <div class="row row-cols-1 row-cols-md-2 g-4">
      <div
        class="col"
      >
        <div class="card info-containers">
          <div class="card-body">
            <h5 class="card-title">
              You joined us {{ $moment(user.createdAt).fromNow() }} we are glad your here!!!
            </h5>
          </div>
        </div>
      <!-- </div>
      <div
        class="col"
      >
        <div class="card info-containers2">
          <div class="card-body">
            <h5 class="card-title">
              Applied Jobs
            </h5>
            <p class="card-text text-white">
              0
            </p>
          </div>
        </div>
      </div>
      <div
        class="col"
      >
        <div class="card info-containers3">
          <div class="card-body">
            <h5 class="card-title">
              Hired Freelance/Handymen
            </h5>
            <p class="card-text text-white">
              0
            </p>
          </div>
        </div> -->
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
      class="mt-5"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Dashboard',
  // components: { FreelaceActivity, TutorActivity, JobsActivity },
  layout: 'dashboard',
  data () {
    return {
      activeTab: ''
    }
  },
  computed: {
    ...mapState('auth', ['user']),
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
.info-containers{
  background-color: #251E8C;
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
.activity-row{
  display: flex;
}
.activity-column{
  background-color: #FF9B17;
  height: 200px;
  width: 100%;
  text-align: left;
  color: #fff;
  margin: 5px;
  border-radius: 15px;
}
.activity-img{
  background-image: url('~assets/img/pexels-photo-4497733.jpeg');
  padding: 70px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.activity-column h3{
  padding-top: 10px;
  padding-left: 40px;
}
.activity-column:nth-child(2){
  background-color: #0DB47B;;
}

.activity-column:nth-child(3){
  background-color: #2B7DC4;
}

.card-text {
    margin-bottom: 0;
    font-size: 23px;
    font-weight: bold;
}

</style>
