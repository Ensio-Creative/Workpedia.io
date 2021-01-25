<template>
  <div>
    <section class="container private-tutor">
      <div class="freelance-heading">
        <h1>Get your private tutor/ E-learning</h1>
        <div class="heading-line" />
      </div>
      <div class="row justify-content-between">
        <div class="col-12 col-md-3 private-tutor-column text-center">
          <div class="private-tutor-img-head" />
          <div class="private-tutor-text">
            <h3>Biology</h3>
          </div>
          <div class="private-tutor-info">
            <p>Femi Adesanya</p>
            <p>Cell, Genetics</p>
          </div>
        </div>
        <div class="col-12 col-md-3 private-tutor-column text-center">
          <div class="private-tutor-img-head" />
          <div class="private-tutor-text">
            <h3>Mathematics</h3>
          </div>
          <div class="private-tutor-info">
            <p>Great John</p>
            <p>Algebra, Geometry, Surds</p>
          </div>
        </div>
        <div class="col-12 col-md-3 private-tutor-column text-center">
          <div class="private-tutor-img-head" />
          <div class="private-tutor-text">
            <h3>Mathematics</h3>
          </div>
          <div class="private-tutor-info">
            <p>Great John</p>
            <p>Algebra, Geometry, Surds</p>
          </div>
        </div>
      </div>
      <div class="view-more">
        <NuxtLink class="view-btn" to="/">
          view more <img src="~/assets/img/arrow.svg">
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Tutors'
}
</script>

<style scoped>

</style>
