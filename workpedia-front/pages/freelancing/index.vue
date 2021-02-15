<template>
  <div>
    <section class="bg-hero">
      <TheFreeHeader
        @sidenavToggle="displaySidenav = !displaySidenav"
      />
      <TheFreeSidenav
        :show="displaySidenav"
        @close="displaySidenav = false"
      />
      <div class="container">
        <div class="row justify-content-around">
          <div class="col-12 col-md-12 col-lg-6 bg-texts order-4 order-md-4">
            <h1>
              Find your dream job, career and tutor all in one place.
            </h1>
            <p>
              Workpedia allows you get everything in once place, freelancing job opportunity, tutors and easily manage all three with ease.
            </p>
            <div class="search">
              <input class="search-input" type="email" placeholder="Search Your Courses">
              <button class="search-btn">
                Search
              </button>
            </div>
          </div>
          <div class="col-12 col-md-12 col-lg-6 order-2 order-md-6">
            <div class="image-rap">
              <img src="~/assets/img/pexels-emmy-e-2381069.png">
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- About -->
    <About />
    <!-- Freelancing gigs -->
    <Freelancing
      frelance-gigs="Popular Gigs"
    />
    <!-- Find private -->
    <Find
      private-title="Best Freelancing Platform"
    />
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
.bg-hero{
  background-color: #fff;
}
.bg-hero img{
  width: 423px;
  transform: scaleX(-1);
  margin-bottom: 20px;
}
.search-input{
  background-color: #E2E2E2;
  padding: 10px 70px;
  border: #fff;
}
.search-btn{
  background-color: #2B7DC4;
  color: #fff;
  border: #2B7DC4;
  padding: 10px 60px;
  margin-left: -3px;
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

.search-input {
  width: 293px;
}
.search-btn{
  margin-left: 0px;
}
.find-private-column img {
  width: 305px;
  transform: scaleX(-1);
}
}
</style>
