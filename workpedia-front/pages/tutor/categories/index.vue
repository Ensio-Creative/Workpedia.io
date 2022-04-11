<template>
  <div>
    <section class="categorie mt-5">
      <div class="container">
        <div
          class="row row-cols-1 row-cols-md-3 g-4"
        >
          <div
            v-for="route in routes"
            :key="route.url"
            class="col mt-3"
          >
            <NuxtLink
              :to="`/tutor/categories/${route.url}`"
            >
              <div class="card h-100">
                <div
                  class="thumbnail"
                  :style="{backgroundImage:'url(' + route.image + ')'}"
                />
                <div class="card-body">
                  <div class="private-tutor-text">
                    <h3>{{ route.title }}</h3>
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
    <NewsLetter />
    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>
import Footer from '~/components/common/Footer.vue'
import NewsLetter from '~/components/common/NewsLetter.vue'
import routes from '~/static/tutor/tutorRoutes.js'
export default {
  name: 'TutorsCategories',
  components: { Footer, NewsLetter },
  layout: 'tutors',
  data () {
    return {
      routes
    }
  }
}
</script>

<style scoped>
.categories-btn{
  margin: auto;
}
.categorie {
  margin-bottom: 8rem;
}
.thumbnail{
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 100px;
}
.private-tutor-column{
  border-radius: 10px;
  box-shadow: 0px 0px 5px #00000029;
  margin-top: 20px;
}
</style>
