<template>
  <div>
    <div class="container mt-5">
      <div class="row justify-content-around">
        <div class="col-12 col-md-3">
          <div class="row">
            <div class="col-12 tutor-basic-info">
              <img src="~assets/img/avatar_c@2x.png" alt="" class="user-img rounded">
              <h4 class="user-name">
                {{ fullName }}
              </h4>
              <h4>Age: {{ user.age }}</h4>
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
          <Qualifications
            class="mt-4"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'TutorDashboard',
  layout: 'dashboard',
  data () {
    return {
      userName: 'Great Adams',
      tutorDescription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam accusantium ut adipisci'
    }
  },
  computed: {
    ...mapState('auth', ['user']),
    fullName () {
      const name = this.user.firstName + ' ' + this.user.lastName
      return name
    }
  }
}

</script>

<style scoped>
.container, .container-sm, .container-md, .container-lg {
  max-width: 1050px;
}
</style>
