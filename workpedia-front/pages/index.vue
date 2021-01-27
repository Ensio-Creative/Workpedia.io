<template>
  <div>
    <TheHeader
      @sidenavToggle="displaySidenav = !displaySidenav"
    />
    <TheSidenav
      :show="displaySidenav"
      @close="displaySidenav = false"
    />
    <section class="bg-hero container">
      <div class="row">
        <div class="col-12 col-md-6 bg-texts order-4 order-sm-4">
          <h1>
            Find your dream job, career and tutor all in one place.
          </h1>
          <p>
            Workpedia allows you get everything in once place, freelancing job opportunity, tutors and easily manage all three with ease.
          </p>
          <div class="bg-buttons">
            <NuxtLink class="bg-buttons-item" to="/freelancing">
              FREELANCING & HANDY MEN
            </NuxtLink>
            <NuxtLink class="bg-buttons-item" to="/jobs">
              JOBS / CAREER
            </NuxtLink>
            <NuxtLink class="bg-buttons-item" to="/tutor">
              TUTOR / LEARNING
            </NuxtLink>
          </div>
        </div>
        <div class="col-12 col-md-4 order-2 order-sm-6">
          <div class="image-rap">
            <img src="~/assets/img/pexels-emmy-e-2381069.png">
          </div>
        </div>
      </div>
    </section>
    <!-- Walk you through -->
    <Walk />
    <!-- Freelancing gigs -->
    <Freelancing
      frelance-gigs="Get your Freelancing gigs"
    />
    <!-- Popular jobs -->
    <Popular />
    <!-- Private tutors -->
    <Tutors />
    <!-- News Letter -->
    <NewsLetter />
    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>
export default {
  data () {
    return {
      displaySidenav: false
    }
  }
}
</script>

<style scoped>
.bg-hero img{
  width: 423px;
  transform: scaleX(-1);
  margin-bottom: 20px;
}
.image-rap {
  margin-top: 35px;
  width: 430px;
  height: 430px;
  border: 20px solid #251e8c;
  border-radius: 100%;
  overflow: hidden;
}

@media screen and (max-width: 780px){
  .bg-texts {
    margin-top: 50px;
}
.image-rap {
  margin-top: 35px;
  width: 300px;
  height: 300px;
  border: 7px solid #251e8c;
  border-radius: 100%;
  overflow: hidden;
}
.bg-hero img {
  width: 307px;
  transform: scaleX(-1);
  margin-bottom: 20px;
}
}

</style>
