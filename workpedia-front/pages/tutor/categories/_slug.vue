<template>
  <div>
    <section class="categorie mt-5">
      <div class="container">
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div
            v-for="tutor in fliteredTutors"
            :key="tutor.title"
          >
            <NuxtLink
              :to="`/tutor/${tutor.title}/get-tutor`"
              class="col"
            >
              <div class="card h-100">
                <!-- <img :src="tutor.image" alt="DID not"> -->
                <div
                  class="thumbnail"
                  :style="{backgroundImage:'url(' + tutor.image + ')'}"
                />
                <div class="card-body">
                  <div class="private-tutor-text">
                    <h3>{{ tutor.title }}</h3>
                  </div>
                  <div class="private-tutor-info">
                    <p>{{ tutor.description }}</p>
                  </div>
                </div>
                <!-- <div class="card-footer">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </div> -->
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- <Testimony /> -->
    <!-- News Letter -->
    <NewsLetter
      class="mt-5"
    />
    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>
import category from '~/static/tutor/tutorRoutes.js'
export default {
  name: 'SingleTutor',
  data () {
    return {
      routeUrl: this.$route.params.slug,
      category
    }
  },
  computed: {
    fliteredTutors () {
      const result = this.category.find(category => category.url === this.routeUrl)
      const categorie = result.categories
      return categorie
    }
  }
}
</script>

<style scoped>
.thumbnail{
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 100px;
}
.categorie {
  margin-bottom: 8rem;
}
</style>
