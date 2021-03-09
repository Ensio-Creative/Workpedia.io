<template>
  <div>
    <!-- Different categories -->
    <section class="categorie mt-5 mb-5">
      <div class="container">
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div
            v-for="route in routes"
            :key="route.url"
            class="col mt-4"
          >
            <NuxtLink
              :to="`/freelancing/categories/${route.url}`"
            >
              <div class="card h-100">
                <div class="card-body">
                  <div class="private-tutor-text">
                    <h3>{{ route.title }}</h3>
                  </div>
                </div>
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
import { mapState } from 'vuex'
export default {
  data () {
    return {
      routes: [
        {
          title: 'Design',
          url: 'design'
        },
        {
          title: 'Handymen',
          url: 'handymen'
        },
        {
          title: 'Animation',
          url: 'animation'
        },
        {
          title: 'Music',
          url: 'music'
        },
        {
          title: 'Programming',
          url: 'programming'
        },
        {
          title: 'Photography',
          url: 'photography'
        },
        {
          title: 'Copywriting',
          url: 'copywriting'
        },
        {
          title: 'Business',
          url: 'business'
        }
      ]
    }
  },
  computed: {
    ...mapState('freelance', ['freelancing'])
  }
}
</script>

<style scoped>
.categories-nav{
  background-color: #fff;
}
.categories-nav .active{
  color: #2B7DC4;
}
.categories-nav a{
  color: rgba(0, 0, 0, 0.5);
}
.nav-link a:hover
.nav-link a:focus{
  color: #fff;
}
.popular-column {
  margin-right: 26px !important;
  margin-top: 10px;
}
</style>
