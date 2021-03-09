<template>
  <div>
    <section class="walk-you-through">
      <div class="container">
        <div class="heading">
          <h1>Let's walk you through</h1>
        </div>
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
              <NuxtLink class="know-btn" to="/freelancing">
                Know More <img src="~/assets/img/arrow.svg">
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
              <NuxtLink class="know-btn" to="/jobs">
                Know More <img src="~/assets/img/arrow.svg">
              </NuxtLink>
            </div>
          </div>
          <div class="col-12 col-md-3 walk-column">
            <div class="img-head">
              <img src="~/assets/img/avatar_d@2x.png">
            </div>
            <div class="column-title">
              <h3>Tutors</h3>
            </div>
            <div class="column-text">
              <p>Lorem ipsum dolor sit amet,Stet clita kasd lorem ipsum dolor sit amet. sed diam eirmod tempor dolore.</p>
            </div>
            <div class="know-more">
              <NuxtLink class="know-btn" to="/tutor">
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

</style>
