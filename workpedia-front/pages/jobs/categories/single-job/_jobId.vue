<template>
  <div>
    <section class="categorie mt-5 mb-5">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-12 col-lg-10">
            <div class="row">
              <div
                v-for="jobs in fliteredJobs"
                :key="jobs._id"
                class="col-12 col-md-12 col-lg-12 popular-column"
              >
                <div class="popular-column-heading">
                  <i class="fas fa-suitcase" />
                  <h3>{{ jobs.title }}</h3>
                  <h5>{{ jobs.location }}</h5>
                </div>
                <div class="popular-durations">
                  <span class="gray-background">
                    <h6>{{ jobs.dayOFPostMade }}</h6>
                  </span>
                  <span class="gray-background">
                    <h6>{{ jobs.timelineOfJobs }}</h6>
                  </span>
                  <span class="gray-background">
                    <h6>{{ jobs.experience }}</h6>
                  </span>
                  <button
                    type="button"
                    class="btn btn-apply text-center"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                  >
                    Apply Now
                  </button>
                </div>
                <div class="popular-text mt-3 mb-4">
                  <h3>Job description</h3>
                  <p>
                    {{ jobs.description }}
                  </p>
                </div>
                <div class="popular-text mb-4">
                  {{ jobs.totalDescription }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Testimony />
    <!-- News Letter -->
    <NewsLetter />
    <!-- Footer -->
    <Footer />
    <!-- Model code -->
    <!-- Button trigger modal -->

    <!-- Modal -->
    <div
      id="staticBackdrop"
      class="modal fade"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5
              v-for="apply in fliteredJobs"
              id="staticBackdropLabel"
              :key="apply._id"
              class="modal-title"
            >
              Application for {{ apply.title }}
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div class="modal-body">
            <h5 class="my-4">
              Contact info
            </h5>
            <div class="contact-info">
              <!-- User img -->
              <div class="contact-detail">
                <img src="~/assets/img/avatar@2x.png" alt="">
              </div>
              <div class="contact-detail">
                <!-- User name -->
                <h5><strong>Great Adams</strong></h5>
                <!-- User Description -->
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                <!-- User location -->
                <small class="gray">Nigeria</small>
              </div>
            </div>
            <form>
              <!-- Map the user info from vuex -->
              <div class="row">
                <div class="col">
                  <AppControlInput
                    v-model.trim="email"
                    type="text"
                    required
                  >
                    Email
                  </AppControlInput>
                  <!-- <small
                    :class="[city.length < 3 ? 'info-error' : 'info-success']"
                  >
                    {{ cityInfo }}
                  </small> -->
                </div>
                <div class="col">
                  <AppControlInput
                    v-model.trim="phone"
                    type="text"
                    required
                  >
                    Phone
                  </AppControlInput>
                  <!-- <small
                    :class="[city.length < 3 ? 'info-error' : 'info-success']"
                  >
                    {{ cityInfo }}
                  </small> -->
                </div>
              </div>
              <div class="row">
                <div class="mb-3">
                  <label for="formFile" class="form-label">Upload Cv*</label>
                  <input
                    id="formFile"
                    class="form-control"
                    type="file"
                  >
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <!-- <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button> -->
            <button
              type="button"
              class="btn btn-apply"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'SingleJob',
  data () {
    return {
      routeUrl: this.$route.params.jobId,
      email: '',
      phone: ''
    }
  },
  computed: {
    // Change the code to from using fliters
    ...mapState('jobs', ['job']),
    fliteredJobs () {
      const result = this.job.filter(job => job._id === this.routeUrl)
      return result
    }
  }
}
</script>

<style scoped>
.btn-apply{
  background-color: #0DB47B;
  padding: 10px;
  border-radius: 8px;
  color: #fff;
  margin-left: 250px;
}

.btn-apply:hover{
  text-decoration: none;
}
.modal-body {
  padding: 1rem 3rem !important;
}

.contact-info{
  display: flex;
}
.contact-info p{
  margin: 0px !important;
}
.contact-info img{
  width: 56px;
  height: 56px;
  box-sizing: border-box;
  background-clip: content-box;
  border: 2px solid transparent;
  border-radius: 49.9%;
}
.contact-detail:nth-child(2) {
  padding-left: 16px;
}
.contact-info small{
  color: rgba(0,0,0,.5);
}
</style>
