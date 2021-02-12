<template>
  <div>
    <section class="freelancing-gigs container">
      <div class="heading">
        <h1> {{ frelanceGigs }} </h1>
      </div>
      <div class="row justify-content-center">
        <div class="col-12 col-md-4 col-lg-3 freelance-column text-center">
          <div class="freelance-img-head" />
          <div class="freelance-text">
            <h3>Website Design</h3>
          </div>
          <div class="freelance-amount">
            <p>$450</p>
          </div>
        </div>
        <div class="col-12 col-md-4 col-lg-3 freelance-column text-center">
          <div class="freelance-img-head" />
          <div class="freelance-text">
            <h3>Website Design</h3>
          </div>
          <div class="freelance-amount">
            <p>$450</p>
          </div>
        </div>
        <div class="col-12 col-md-4 col-lg-3 freelance-column text-center">
          <div class="freelance-img-head" />
          <div class="freelance-text">
            <h3>Website Design</h3>
          </div>
          <div class="freelance-amount">
            <p>$450</p>
          </div>
        </div>
        <div class="col-12 col-md-4 col-lg-3 freelance-column text-center">
          <div class="freelance-img-head" />
          <div class="freelance-text">
            <h3>Website Design</h3>
          </div>
          <div class="freelance-amount">
            <p>$450</p>
          </div>
        </div>
        <div class="col-12 col-md-4 col-lg-3 freelance-column text-center">
          <div class="freelance-img-head" />
          <div class="freelance-text">
            <h3>Website Design</h3>
          </div>
          <div class="freelance-amount">
            <p>$450</p>
          </div>
        </div>
        <div class="col-12 col-md-4 col-lg-3 freelance-column text-center">
          <div class="freelance-img-head" />
          <div class="freelance-text">
            <h3>Website Design</h3>
          </div>
          <div class="freelance-amount">
            <p>$450</p>
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
  name: 'Freelancing',
  props: {
    frelanceGigs: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
