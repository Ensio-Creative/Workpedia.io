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
        <div class="col-12 col-md-6 bg-texts">
          <h1>
            Find your dream job, career and tutor all in one place.
          </h1>
          <p>
            Workpedia allows you get everything in once place, freelancing job opportunity, tutors and easily manage all three with ease.
          </p>
          <div class="page-buttons">
            <NuxtLink class="freelance mr-2" to="/freelancing">
              FREELANCING & HANDY MEN
            </NuxtLink>
            <NuxtLink class="jobs mr-2" to="/jobs">
              JOBS / CAREER
            </NuxtLink>
            <NuxtLink class="tutor mr-2" to="/tutor">
              TUTOR / LEARNING
            </NuxtLink>
          </div>
        </div>
        <div class="col-12 col-md-4 text-center">
          <div class="image-rap">
            <!-- <img src="~/assets/img/avatar_d@2x.png"> -->
          </div>
        </div>
      </div>
    </section>
    <!-- Walk you through -->
    <Walk />
    <!-- Freelancing gigs -->
    <Freelancing />
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

<style>
</style>
