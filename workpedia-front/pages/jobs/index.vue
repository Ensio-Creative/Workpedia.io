<template>
  <div>
    <section class="bg-hero">
      <TheJobsHeader
        @sidenavToggle="displaySidenav = !displaySidenav"
      />
      <TheJobsSidenav
        :show="displaySidenav"
        @close="displaySidenav = false"
      />
      <div class="container">
        <div class="row justify-content-around">
          <div class="col-12 col-md-12 col-lg-6 bg-texts order-6 order-sm-2">
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
          <div class="col-12 col-md-12 col-lg-6 order-2 order-sm-6">
            <div class="image-rap">
              <img src="~/assets/img/pexels-emmy-e-2381069.png">
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- About -->
    <About />
    <!-- Popular -->
    <Popular />
    <!-- Post a job -->
    <Find
      private-title="Find Private Tutors"
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
  /* background-image: url('~assets/img/Macbook.jpeg'); */
  background-color: #fff;
}
.bg-hero img{
  width: 423px;
  transform: scaleX(-1);
  margin-bottom: 20px;
}
.search-input{
  padding: 10px 40px;
  background-color: #f1f1f1;
  border:  #fff;
}
.search-btn{
  padding: 10px 40px;
  background-color: #0DB47B;
  border:  #0DB47B;
  margin-left: -4px;
  color: #fff;
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
}
</style>
