<template>
  <div class="container">
    <TopNavInfo
      dash-title="Hire"
    />
    <HireNav
      class="mt-5"
    />
    <h2>Welcome to applications</h2>
    <!-- <div class="row justify-content-center mt-4">
      <div class="col-12 col-md-11 col-lg-11">
        <div class="row">
          <div
            v-for="job in foundJobs"
            :key="job._id"
            class="col-12 col-md-12 col-lg-12 popular-column"
          >
            <div class="popular-column-heading">
              <i class="fas fa-suitcase" />
              <span class="job-title">{{ job.title }}</span>
              <p>{{ `${job.city}, ${job.state}` }}</p>
              <button
                class="btn btn-outline-danger added-btn"
                @click="showMsgBoxTwo(job._id)"
              >
                Delete
              </button>
            </div>
            <div class="popular-durations">
              <span class="gray-background">
                <h6>{{ $moment(job.createdAt).format('LL') }}</h6>
              </span>
              <span class="gray-background">
                <h6>{{ job.duration }}</h6>
              </span>
              <span class="gray-background">
                <h6> NGN {{ job.amount }}</h6>
              </span>
            </div>
            <div class="popular-text mt-3 mb-4">
              <h4>Job description</h4>
              <p
                class="card-text"
              >
                {{ job.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'Applications',
  layout: 'dashboard',
  methods: {
    showMsgBoxTwo (id) {
      this.$bvModal.msgBoxConfirm('Are you sure you want to delete this application?', {
        title: 'Please Confirm',
        size: 'sm',
        buttonSize: 'sm',
        okVariant: 'danger',
        okTitle: 'YES',
        cancelTitle: 'NO',
        footerClass: 'p-2',
        hideHeaderClose: false,
        centered: true
      })
        .then((value) => {
          if (value) {
            console.log(id)
            this.deleteJob(id)
          }
          this.boxTwo = value
        })
        .catch((err) => {
          // An error occurred
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>
.container, .container-sm, .container-md, .container-lg {
  max-width: 1050px;
}

</style>
