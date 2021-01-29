<template>
  <div>
    <TheFreeHeader
      @sidenavToggle="displaySidenav = !displaySidenav"
    />
    <TheFreeSidenav
      :show="displaySidenav"
      @close="displaySidenav = false"
    />
    <!-- Categories Nav -->
    <nav class="navbar navbar-expand-lg categories-nav">
      <div class="container">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>
        <div
          id="navbarNavAltMarkup"
          class="collapse navbar-collapse"
        >
          <div class="navbar-nav">
            <a class="nav-link active" href="#">All Categories <span class="sr-only">(current)</span></a>
            <a class="nav-link mr-2" href="#">Design</a>
            <a class="nav-link mr-2" href="#">Freelance/Handymen</a>
            <a class="nav-link mr-2" href="#">Videos&Animation</a>
            <a class="nav-link mr-2" href="#">Music&Audio</a>
            <a class="nav-link mr-2" href="#">Tech&Programming</a>
            <a class="nav-link mr-2" href="#">Business</a>
            <a class="nav-link mr-2" href="#">Lifestyle</a>
          </div>
        </div>
      </div>
    </nav>
    <!-- Different categories -->
    <Freelancing
      class="mt-3"
      frelance-gigs="Graphics & Design"
    />
    <Freelancing
      class="mt-3"
      frelance-gigs="Handy men"
    />
    <Freelancing
      class="mt-3"
      frelance-gigs="Popular Gigs"
    />
    <Freelancing
      class="mt-3"
      frelance-gigs="Videos & Animation"
    />
    <Freelancing
      class="mt-3"
      frelance-gigs="Tech & Programming"
    />
    <Freelancing
      class="mt-3"
      frelance-gigs="Business"
    />
    <Freelancing
      class="mt-3 mb-5"
      frelance-gigs="Lifestyle"
    />

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
.categories-nav{
  background-color: #2B7DC4;
}
.categories-nav .active{
  color: #fff;
}
.categories-nav a{
  color: #fff;
}
.nav-link a:hover
.nav-link a:focus{
  color: #fff;
}
</style>
