<template>
  <div>
    <section class="bg-hero container">
      <div class="row justify-content-around">
        <div class="col-12 col-md-12 col-lg-6 bg-texts order-6 order-sm-2">
          <div class="bg-content">
            <h1>
              Find your dream job, career and tutor all in one place.
            </h1>
            <p>
              Workpedia allows you get everything in one place, freelancing job opportunity, tutors and easily manage all three with ease.
            </p>
          </div>
          <!-- <div class="search">
            <input class="search-input" type="email" placeholder="Search Your Courses">
            <button class="search-btn">
              Search
            </button>
          </div> -->
        </div>
        <div class="col-12 col-md-12 col-lg-6 order-2 order-sm-6">
          <div class="image-rap">
            <img src="~/static/img/workpedia-tutor.svg">
          </div>
        </div>
      </div>
    </section>
    <!-- About -->
    <section class="private-tutor">
      <div class="container">
        <div class="heading-private">
          <h1 class="text-white text-center mb-5">
            How it works
          </h1>
        </div>
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div
            class="col"
          >
            <div class="card h-100">
              <div class="private-img-icon">
                <img src="~static/img/workpedia-tutor-how-it-works.svg" alt="">
              </div>
              <div class="card-body">
                <div class="private-tutor-text">
                  <h4>Place a request</h4>
                </div>
                <div class="private-tutor-info">
                  <p>
                    Fill out the tutor request form and select a lesson schedule that matches your desired learning goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            class="col"
          >
            <div class="card h-100">
              <div class="private-img-icon">
                <img src="~static/img/workpedia-tutor-how-it-works.svg" alt="">
              </div>
              <div class="card-body">
                <div class="private-tutor-text">
                  <h4>Tutor selected</h4>
                </div>
                <div class="private-tutor-info">
                  <p>
                    A tutor is selected with a notification sent to you via email based on your request.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            class="col"
          >
            <div class="card h-100">
              <div class="private-img-icon">
                <img src="~static/img/workpedia-tutor-how-it-works.svg" alt="">
              </div>
              <div class="card-body">
                <div class="private-tutor-text">
                  <h4>Lesson begins</h4>
                </div>
                <div class="private-tutor-info">
                  <p>
                    Lesson begins immediately payment is made which covers for the duration of the class.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Popular -->
    <Tutors />
    <!-- News Letter -->
    <NewsLetter />
    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>
import Footer from '~/components/common/Footer.vue'
import NewsLetter from '~/components/common/NewsLetter.vue'
import Tutors from '~/components/landing/Tutors.vue'
export default {
  components: { NewsLetter, Tutors, Footer },
  data () {
    return {}
  }
}
</script>

<style scoped>
.bg-hero{
  background-color: #fff;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
}
.image-rap {
  margin-top: 48px;
  height: 116%;
  overflow: hidden;
}
.bg-hero img {
  width: 623px;
  transform: scaleX(-1);
  margin-bottom: 20px;
}
.private-tutor {
  background-color: #251E8C;
  padding: 90px;
}
.private-img-icon {
  padding: 20px;
}
.private-tutor img {
  width: 56px;
}
.private-tutor-text {
    color: #fff;
    letter-spacing: 0px;
}
.card {
  background-color: #251E8C !important;
  border: 0px !important;
}
.card p {
  color: #fff !important;
  padding-top: 10px;
}

@media screen and (max-width: 780px) {
.bg-hero img {
  width: 358px;
}
}
</style>
