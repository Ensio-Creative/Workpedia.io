<template>
  <div>
    <section class="freelancing-gigs container">
      <div class="heading">
        <h1> {{ frelanceGigs }} </h1>
      </div>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div
          v-for="freelance in splicedFreelancing"
          :key="freelance._id"
          class="col mt-4"
        >
          <div class="card">
            <div class="card-body">
              <div class="freelance-img-head" />
              <div class="freelance-text mt-2">
                <h3>{{ freelance.title }}</h3>
              </div>
              <div class="freelance-amount">
                <p>${{ freelance.amount }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="view-more">
        <NuxtLink class="view-btn" to="/freelancing/categories">
          View More <img src="~/assets/img/arrow.svg">
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Freelancing',
  props: {
    frelanceGigs: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapState('freelance', ['freelancing']),
    splicedFreelancing () {
      const listed = this.freelancing.slice(0, 3)
      return listed
    }
  }
}
</script>

<style scoped>

</style>
