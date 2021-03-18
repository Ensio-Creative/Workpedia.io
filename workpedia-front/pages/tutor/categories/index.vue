<template>
  <div>
    <section class="categorie mt-5 mb-5">
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
            <!-- <div class="col">
              <div class="card h-100">
                <img src="~/assets/img/biology.png" alt="">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                </div>
                <div class="card-footer">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </section>

    <Testimony />
    <!-- News Letter -->
    <NewsLetter />
    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>
import routes from '~/static/data/tutorCategory.js'
export default {
  name: 'TutorsCategories',
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
.private-tutor-column{
  border-radius: 10px;
  box-shadow: 0px 0px 5px #00000029;
  margin-top: 20px;
}
</style>
