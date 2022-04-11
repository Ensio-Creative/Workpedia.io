<template>
  <div>
    <header class="container heading-search">
      <div class="row">
        <div class="col">
          <AppControlInput
            v-model="location"
            type="text"
            placeholder="Enter a location"
            @input="filterByLocation"
          />
        </div>
        <div class="col select-control">
          <select
            v-model="type"
            name="choose job type"
            @change="filterByType"
          >
            <option
              selected
            >
              Choose a job type
            </option>
            <option
              value="full-time"
            >
              Full Time
            </option>
            <option
              value="part-time"
            >
              Part Time
            </option>
            <option
              value="remote"
            >
              Remote
            </option>
            <option
              value="intern"
            >
              Intern
            </option>
            <option
              value="contract"
            >
              Contract
            </option>
          </select>
        </div>
        <div class="col">
          <AppControlInput
            v-model="title"
            type="text"
            placeholder="Enter a title"
            @input="filterByTitle"
          />
        </div>
      </div>
    </header>
    <section class="categorie mt-5">
      <div class="container">
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div
            v-for="job in results"
            :key="job._id"
            class="col mt-4"
          >
            <div class="card">
              <div class="card-body">
                <div class="popular-column-heading">
                  <i class="fas fa-suitcase" />
                  <h3>{{ job.title }}</h3>
                  <p>{{ `${job.city}, ${job.state} ` }}</p>
                </div>
                <div class="popular-durations">
                  <span class="gray-background">
                    <h6>{{ $moment(job.createdAt).format('LL') }}</h6>
                  </span>
                  <span class="gray-background">
                    <h6>{{ job.duration }}</h6>
                  </span>
                </div>
                <div class="popular-button text-center">
                  <NuxtLink
                    :to="`/jobs/categories/single-job/${job._id}`"
                  >
                    View Now
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="text-center mt-5">
          <b-pagination
            v-model="currentPage"
            pills
            per-page="2"
            :total-rows="jobs.length"
          />
        </div> -->
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
import { mapState } from 'vuex'
import AppControlInput from '~/components/auth/UI-Components/AppControlInput.vue'
import Footer from '~/components/common/Footer.vue'
import NewsLetter from '~/components/common/NewsLetter.vue'
export default {
  name: 'JobsCategories',
  components: { AppControlInput, NewsLetter, Footer },
  data () {
    return {
      currentPage: 1,
      title: '',
      location: '',
      type: '',
      results: [],
      result: []
    }
  },
  computed: {
    ...mapState('jobs', ['jobs'])
  },
  mounted () {
    this.results = this.jobs
  },
  methods: {
    filterByLocation () {
      this.results = this.jobs.filter(job => job.state.toLowerCase().includes(this.location.toLowerCase()))
    },
    filterByTitle () {
      this.results = this.jobs.filter(job => job.title.toLowerCase().includes(this.title.toLowerCase()))
    },
    filterByType () {
      this.results = this.jobs.filter(job => job.duration.toLowerCase().includes(this.type.toLowerCase()))
    }
  }
}
</script>

<style scoped>
.categorie {
  margin-bottom: 8rem;
}
.heading-search{
  margin-top: 60px;
}
.select-control {
  display: flex;
}
.select-control select{
  display: block;
  background-color: #E9E9E9;
  width: 100%;
  box-sizing: border-box;
  font: inherit;
  padding: 10px;
  border: 0px;
  height: 47px;
  align-self: center;
  border-radius: 8px;
}

.select-control select:focus {
  background-color: #E9E9E9;
  outline: none;
  border: 0px;
}
</style>
