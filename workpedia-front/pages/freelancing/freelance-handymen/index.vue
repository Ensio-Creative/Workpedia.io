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
            <a class="nav-link mr-2" href="#">Handymen</a>
            <a class="nav-link mr-2" href="#">Animation</a>
            <a class="nav-link mr-2" href="#">Music</a>
            <a class="nav-link mr-2" href="#">Programming</a>
            <a class="nav-link mr-2" href="#">Photography</a>
            <a class="nav-link mr-2" href="#">Copywriting</a>
            <a class="nav-link mr-2" href="#">Business</a>
            <a class="nav-link mr-2" href="#">Lifestyle</a>
          </div>
        </div>
      </div>
    </nav>
    <!-- Different categories -->
    <Freelancing
      class="mt-1"
      frelance-gigs="Graphics & Design"
    />
    <Freelancing
      class="mt-1"
      frelance-gigs="Handy men"
    />
    <Freelancing
      class="mt-1"
      frelance-gigs="Popular Gigs"
    />
    <Freelancing
      class="mt-1"
      frelance-gigs="Videos & Animation"
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
  background-color: #fff;
}
.categories-nav .active{
  color: #2B7DC4;
}
.categories-nav a{
  color: rgba(0, 0, 0, 0.5);
}
.nav-link a:hover
.nav-link a:focus{
  color: #fff;
}
</style>
