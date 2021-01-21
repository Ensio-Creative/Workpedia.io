<template>
  <div>
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
            <img src="~/assets/img/avatar_d@2x.png">
          </div>
        </div>
      </div>
    </section>

    <section class="walk-you-through">
      <div class="heading">
        <h1>Let's walk you through</h1>
        <div class="heading-line" />
      </div>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-md-3 walk-column">
            <div class="img-head">
              <img src="~/assets/img/avatar_d@2x.png">
            </div>
            <div class="column-title">
              <h3>Freelancing</h3>
            </div>
            <div class="column-text">
              <p>Lorem ipsum dolor sit amet,Stet clita kasd lorem ipsum dolor sit amet. sed diam eirmod tempor dolore.</p>
            </div>
            <div class="know-more">
              <NuxtLink class="know-btn" to="/">
                Know more <img src="~/assets/img/arrow.svg">
              </NuxtLink>
            </div>
          </div>
          <div class="col-12 col-md-3 walk-column">
            <div class="img-head">
              <img src="~/assets/img/avatar_d@2x.png">
            </div>
            <div class="column-title">
              <h3>Jobs</h3>
            </div>
            <div class="column-text">
              <p>Lorem ipsum dolor sit amet,Stet clita kasd lorem ipsum dolor sit amet. sed diam eirmod tempor dolore.</p>
            </div>
            <div class="know-more">
              <NuxtLink class="know-btn" to="/">
                Know more <img src="~/assets/img/arrow.svg">
              </NuxtLink>
            </div>
          </div>
          <div class="col-12 col-md-3 walk-column">
            <div class="img-head">
              <img src="~/assets/img/avatar_d@2x.png">
            </div>
            <div class="column-title">
              <h3>Private Tutor</h3>
            </div>
            <div class="column-text">
              <p>Lorem ipsum dolor sit amet,Stet clita kasd lorem ipsum dolor sit amet. sed diam eirmod tempor dolore.</p>
            </div>
            <div class="know-more">
              <NuxtLink class="know-btn" to="/">
                Know more <img src="~/assets/img/arrow.svg">
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style>
</style>
