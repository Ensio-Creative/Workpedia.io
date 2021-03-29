<template>
  <div>
    <section class="bg-hero container">
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
    </section>
    <!-- About -->
    <About />
    <!-- Popular -->
    <Tutors
      class="mt-5"
    />
    <!-- Find private tutors -->
    <section class="find-private-tutors">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6 find-private-column">
            <img src="~assets/img/pexels-roman-odintsov-4925916@2x.png" alt="">
          </div>
          <div class="col-12 col-md-6">
            <div class="workpedia-text-div">
              <p class="workpedia-text">
                workpedia
              </p>
            </div>
            <div class="find-private-title">
              <h3>Find private tutors</h3>
            </div>
            <div class="find-private-texts">
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. . Stet clita kasd gubergren,
                no sea takimata sanctus est
              </p>
              <p>
                Lorem ipsum dolor sit amet. Lorem
                ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
                rebum. Stet clita kasd gubergren, no sea takimata sanctus .
              </p>
            </div>
            <NuxtLink
              class="find-private-button"
              to="/"
            >
              Search
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
    <!-- News Letter -->
    <NewsLetter />
    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style scoped>
.bg-hero{
  /* background-image: linear-gradient(to right, rgba(232, 232, 232, 1), rgba(209, 206, 206, 0)),
    url('~assets/img/pexels-julia-m-cameron-4143791@2x.png'); */
  background-color: #fff;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
}
.bg-hero img {
  width: 423px;
  transform: scaleX(-1);
  margin-bottom: 20px;
}
.search-input{
  padding: 10px 40px;
  background-color: transparent;
  border: 1px solid #FF9B17;
}
.search-btn{
  padding: 10px 40px;
  background-color: #FF9B17;
  border: 1px solid #FF9B17;
  margin-left: -4px;
}
.find-private-tutors{
  background-color: #F1F1FF;
  padding: 100px 0px;
}
.workpedia-text-div{
  background-color: #f2e8e8;
  padding: 0px;
  width: 105px;
  margin-top: 40px;
}
.workpedia-text{
  color: #FF9B17;
  padding: 11px 11px;
  font-size: 18px;
}
.find-private-title{
  padding-top: 30px;
}
.find-private-column img{
  width: 518px;
}
.find-private-text{
  padding-top: 40px;
  padding-bottom: 54px;
}
.find-private-button{
  color: #fff;
  background-color: #FF9B17;
  padding: 15px 42px;
  margin-top: 30px;
}

.find-private-button:hover{
  text-decoration: none;
}
@media screen and (max-width: 780px) {
  .find-private-column img {
    width: 304px;
}
.search-btn {
  margin-left: 0px;
}
.bg-hero img {
  width: 358px;
}
}
</style>
