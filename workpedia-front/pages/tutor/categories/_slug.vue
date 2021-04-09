<template>
  <div>
    <section class="categorie mt-5 mb-5">
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

    <Testimony />
    <!-- News Letter -->
    <NewsLetter />
    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>
import art from '~/static/tutor/art.js'
import english from '~/static/tutor/english.js'
import math from '~/static/tutor/math.js'
import science from '~/static/tutor/science.js'
import religion from '~/static/tutor/religion.js'
import busines from '~/static/tutor/business.js'
export default {
  name: 'SingleTutor',
  data () {
    return {
      routeUrl: this.$route.params.slug
    }
  },
  computed: {
    fliteredTutors () {
      let result
      if (this.routeUrl === 'mathematics') {
        result = math
      } else if (this.routeUrl === 'english') {
        result = english
      } else if (this.routeUrl === 'sciences') {
        result = science
      } else if (this.routeUrl === 'arts') {
        result = art
      } else if (this.routeUrl === 'religion') {
        result = religion
      } else if (this.routeUrl === 'business') {
        result = busines
      }
      return result
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
</style>
