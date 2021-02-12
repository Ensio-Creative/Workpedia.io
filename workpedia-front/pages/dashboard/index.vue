<template>
  <div class="container mt-5">
    <div class="container top-container">
      <h2>Dashboard</h2>
      <h3> <strong>Welcome!!!</strong> Adams</h3>
    </div>
    <div class="activity-row mt-4">
      <div
        class="activity-column"
        @click="activeTab = 'TutorActivity'"
      >
        <h3>Tutor</h3>
      </div>
      <div
        class="activity-column"
        @click="activeTab = 'JobsActivity'"
      >
        <h3>Jobs</h3>
      </div>
      <div
        class="activity-column"
        @click="activeTab = 'FreelaceActivity'"
      >
        <h3>Freelance</h3>
      </div>
    </div>
    <component :is="activeTab" />
  </div>
</template>

<script>
import FreelaceActivity from '../../components/dashboard/activty/FreelaceActivity.vue'
import JobsActivity from '../../components/dashboard/activty/JobsActivity.vue'
import TutorActivity from '../../components/dashboard/activty/TutorActivity.vue'
export default {
  name: 'Dashboard',
  components: { FreelaceActivity, TutorActivity, JobsActivity },
  layout: 'dashboard',
  data () {
    return {
      activeTab: ''
    }
  }
}
</script>

<style scoped>
.top-container{
  background-color: #0C0573;
  height: 200px;
  border-radius: 15px;
  color: #fff;
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
.activity-column h3{
  padding-top: 150px;
  padding-left: 40px;
}
.activity-column:nth-child(2){
  background-color: #0DB47B;;
}

.activity-column:nth-child(3){
  background-color: #2B7DC4;
}

</style>
