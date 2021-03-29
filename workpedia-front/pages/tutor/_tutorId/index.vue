<template>
  <div>
    <div class="container bg-tutor">
      <div
        v-for="tutor in fliteredTutors"
        :key="tutor._id"
        class="tutors-btns"
      >
        <h1 class="heading">
          {{ tutor.tutorTitle }}
        </h1>
        <AppButton
          type="submit"
          class="tutor-btn mt-3"
          @click="getTutor"
        >
          Get Tutor
        </AppButton>
      </div>
    </div>
    <div class="container tutor-infos mb-5 mt-5">
      <div class="row justify-content-around">
        <div class="col-12 col-md-6 about-course">
          <h4 class="pb-4">
            About this course
          </h4>
          <!-- Fetch what the tutors said about what He teaches -->
          <p
            class="course-description"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Rhoncus est pellentesque elit ullamcorper. Auctor urna nunc id cursus metus.
            Enim neque volutpat ac tincidunt vitae semper quis lectus. Quis vel eros donec ac odio
            tempor orci. Vestibulum sed arcu non odio. Pharetra pharetra massa massa ultricies mi
            quis hendrerit.
          </p>
        </div>
        <div class="col-12 col-md-4 about-course text-center">
          <h4>Tutor</h4>
          <div class="tutor-img pt-3">
            <img class="rounded" src="~assets/img/avatar_d@2x.png" alt="">
          </div>
          <p
            class="course-description pt-3"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>
      </div>
    </div>
    <Testimony />

    <Footer />
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'SingleTutor',
  layout: 'tutors',
  data () {
    return {
      routeUrl: this.$route.params.tutorId
    }
  },
  computed: {
    ...mapState('tutors', ['fetchedTutors']),
    fliteredTutors () {
      const result = this.fetchedTutors.filter(tutor => tutor._id === this.routeUrl)
      return result
    }
  },
  methods: {
    getTutor () {
      this.$router.push(`/tutor/categories/single-tutor/${this.id}/get-tutor`)
    }
  }
}
</script>

<style scoped>
.bg-tutor{
  background-image: url('~assets/img/pexels-ylanite-koppens-697672.png');
  padding: 50px;
  background-size: cover;
  background-repeat: no-repeat;
  height: 485px;
  background-position: center;
}
.heading{
  text-align: center;
  color: #fff;
}
.tutors-btns{
  margin: auto;
  width: 511px;
  padding-top: 117px;
  text-align: center;
}
.tutor-btn{
  background-color: #FF9B17;
  width: 145px;
}
.about-course{
  padding: 25px;
  border-radius: 8px;
  box-shadow: 3px 7px 9px #00000029;
}
.about-course h4 {
  color: #FF9B17;
  text-align: center;
}
.test-text{
  margin-top: 0;
  margin-bottom: 0rem;
}
</style>
