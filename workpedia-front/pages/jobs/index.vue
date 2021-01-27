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
        <div class="row">
          <div class="col-12 col-md-6 bg-texts">
            <h1>
              Find your dream job, career and Jobs all in one place.
            </h1>
            <div class="search">
              <input class="search-input" type="email" placeholder="Search Your Courses">
              <input class="search-input" type="email" placeholder="Search Your Courses">
              <button class="search-btn">
                Search
              </button>
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
  background-image: url('~assets/img/Macbook.jpeg');
  padding-bottom: 310px;
}
.search-input{
  padding: 10px;
  background-color: #fff;
  border:  #fff;
}
.search-btn{
  padding: 10px;
  background-color: #0DB47B;
  border:  #0DB47B;
  margin-left: -4px;
}
</style>
