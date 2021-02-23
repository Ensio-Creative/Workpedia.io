<template>
  <div>
    <div class="container bg-tutor">
      <div class="tutors-btns">
        <h1>{{ $route.params.tutorId }}</h1>
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
    <section class="what-student-say">
      <div class="container">
        <div class="title text-center">
          <h2>Testimonials</h2>
        </div>
        <div class="text text-center">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
        </div>
        <div class="row justify-content-center">
          <div class="col-12 col-md-6 col-lg-3 what-students-say-column">
            <h2><i class="fas fa-quote-left" /></h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            </p>
            <div class="users-info">
              <div class="rounded" />
              <div class="users-name">
                <p class="test-text">
                  Great Adams
                </p>
                <p class="test-text">
                  Computer sicence
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-3 what-students-say-column">
            <h2><i class="fas fa-quote-left" /></h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            </p>
            <div class="users-info">
              <div class="rounded" />
              <div class="users-name">
                <p class="test-text">
                  Great Adams
                </p>
                <p class="test-text">
                  Computer sicence
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-3 what-students-say-column">
            <h2><i class="fas fa-quote-left" /></h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            </p>
            <div class="users-info">
              <div class="rounded" />
              <div class="users-name">
                <p class="test-text">
                  Great Adams
                </p>
                <p class="test-text">
                  Computer sicence
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-3 what-students-say-column">
            <h2><i class="fas fa-quote-left" /></h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            </p>
            <div class="users-info">
              <div class="rounded" />
              <div class="users-name">
                <p class="test-text">
                  Great Adams
                </p>
                <p class="test-text">
                  Computer sicence
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-3 what-students-say-column">
            <h2><i class="fas fa-quote-left" /></h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            </p>
            <div class="users-info">
              <div class="rounded" />
              <div class="users-name">
                <p class="test-text">
                  Great Adams
                </p>
                <p class="test-text">
                  Computer sicence
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-3 what-students-say-column">
            <h2><i class="fas fa-quote-left" /></h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            </p>
            <div class="users-info">
              <div class="rounded" />
              <div class="users-name">
                <p class="test-text">
                  Great Adams
                </p>
                <p class="test-text">
                  Computer sicence
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
export default {
  name: 'SingleTutor',
  layout: 'tutors',
  data () {
    return {
      id: this.$route.params.tutorId
    }
  },
  methods: {
    getTutor () {
      this.$router.push(`/tutor/categories/${this.id}/get-tutor`)
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
.tutors-btns{
  margin: auto;
  width: 142px;
  padding-top: 117px;
  text-align: center;
}
.tutor-btn{
  background-color: #FF9B17;
  color: #000;
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
