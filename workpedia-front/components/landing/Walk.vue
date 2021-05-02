<template>
  <div>
    <section class="walk-you-through">
      <div class="container">
        <div class="heading">
          <h1>Let's walk you through</h1>
        </div>
        <div class="row justify-content-around text-center">
          <div class="col-12 col-md-3 walk-column">
            <div class="img-head">
              <i class="fas fa-chalkboard-teacher" />
            </div>
            <div class="column-title">
              <h3>Tutors</h3>
            </div>
            <div class="column-text">
              <p>Find and hire the right tutor for your kid(s).</p>
            </div>
            <div class="know-more">
              <NuxtLink class="know-btn" to="/tutor">
                Know More <img src="~/assets/img/arrow.svg">
              </NuxtLink>
            </div>
          </div>
          <div class="col-12 col-md-3 walk-column">
            <div class="img-head">
              <i class="fas fa-suitcase" />
            </div>
            <div class="column-title">
              <h3>Jobs</h3>
            </div>
            <div class="column-text">
              <p>Find the right job and take the next career step.</p>
            </div>
            <div class="know-more">
              <NuxtLink class="know-btn" to="/jobs">
                Know More <img src="~/assets/img/arrow.svg">
              </NuxtLink>
            </div>
          </div>
          <div class="col-12 col-md-3 walk-column">
            <div class="img-head">
              <i class="fas fa-search" />
            </div>
            <div class="column-title">
              <h3>Freelancers</h3>
            </div>
            <div class="column-text">
              <p>Hire top class freelancers/handymen for your next project.</p>
            </div>
            <div class="know-more">
              <NuxtLink class="know-btn" to="/freelancing">
                Know More <img src="~/assets/img/arrow.svg">
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Walk'
}
</script>

<style scoped>
.img-head i {
  font-size: 40px;
}
</style>
