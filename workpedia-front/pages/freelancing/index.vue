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
      <div class="container mt-5">
        <div class="row ">
          <div class="col-12 col-md-6 bg-texts">
            <h1>
              Find your dream job, career and Jobs all in one place.
            </h1>
            <div class="search mt-5">
              <input class="search-input" type="email" placeholder="e.g Graphic Design, User Interface, Technical Writing">
              <button class="search-btn">
                Search
              </button>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="image-rap">
              <img src="~/assets/img/pexels-emmy-e-2381069.png" alt="">
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
  background-color: #E2E2E2;
}
.bg-hero img{
  width: 423px;
  transform: scaleX(-1);
}
.image-rap {
  width: 405px;
  height: 455px;
  border-radius: 100%;
  overflow: hidden;
}
.search-input{
  background-color: #fff;
  padding: 10px 70px;
  border: #fff;
}
.search-btn{
  background-color: #2B7DC4;
  border-radius: 0px 20px 0px 0px;
  border: #2B7DC4;
  padding: 10px 60px;
  margin-left: -3px;
}
</style>
