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
      <div class="row justify-content-around">
        <div class="col-12 col-md-12 col-lg-6 bg-texts order-6 order-sm-2">
          <h1>
            Find your dream job, career and tutor all in one place.
          </h1>
          <p>
            Workpedia allows you get everything in once place, freelancing job opportunity, tutors and easily manage all three with ease.
          </p>
          <div class="bg-buttons">
            <NuxtLink class="view-btn" to="/auth">
              Start Now
            </NuxtLink>
          </div>
        </div>
        <div class="col-12 col-md-12 col-lg-6 order-2 order-sm-6">
          <div class="image-rap text-center">
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
  name: 'Home',
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

@media screen and (max-width: 780px){
  .bg-texts {
    margin-top: 50px;
}
.bg-hero img {
  width: 307px;
  transform: scaleX(-1);
  margin-bottom: 20px;
}
}

</style>
