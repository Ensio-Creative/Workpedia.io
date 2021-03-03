<template>
  <div>
    <div class="container mt-5">
      <div class="row justify-content-around">
        <div class="col-12 col-md-3">
          <div class="row">
            <div class="col-12 tutor-basic-info">
              <img src="~assets/img/avatar_c@2x.png" alt="" class="user-img rounded">
              <h4 class="user-name">
                {{ userName }}
              </h4>
            </div>
            <div class="col-12 tutor-basic-info text-left">
              <h4 class="user-name">
                Description
              </h4>
              <p>{{ tutorDescription }}</p>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-8 tab-colum">
          <div class="tab">
            <div
              class="tab-items"
            >
              <a
                href="#"
                @click="activeTab = 'Qulifications'"
              >
                Qulifications
              </a>
            </div>
            <div
              class="tab-items"
            >
              <a
                href="#"
                @click="activeTab = 'Skills'"
              >
                Skills
              </a>
            </div>
          </div>
          <keep-alive>
            <component
              :is="activeTab"
              class="mt-4"
            />
          </keep-alive>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Qulifications from '~/components/dashboard/jobs/Qulifications.vue'
import Skills from '~/components/dashboard/jobs/Skills.vue'
export default {
  name: 'FreelanceDashboard',
  components: { Qulifications, Skills },
  layout: 'dashboard',
  data () {
    return {
      userName: 'Great Adams',
      tutorDescription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam accusantium ut adipisci',
      activeTab: 'Qulifications'
    }
  }
}
</script>

<style scoped>
.tutor-basic-info{
  box-shadow: 0px 1px 2px 1px #00000029;
  border-radius: 8px;
  text-align: center;
  margin-top: 30px;
}
.tab-colum{
  box-shadow: 0px 1px 2px 1px #00000029;
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
  border-bottom: 1px solid #2B7DC4;
}
.tab-items:focus{
  border-bottom: 1px solid #2B7DC4;
}
.tab-items a {
  color: #0DB47B;
  text-decoration: none;
  margin-top: 10px;
}
</style>
