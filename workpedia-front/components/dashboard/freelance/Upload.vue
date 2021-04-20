<template>
  <div class="container">
    <form
      @submit.prevent="onSubmit"
    >
      <div class="row">
        <div class="col">
          <AppControlInput
            v-model="cv"
            type="file"
            required
          >
            Cv*
          </AppControlInput>
          <!-- <small
            :class="[title.length < 3 ? 'info-error' : 'info-success']"
          >
            {{ titleInfo }}
          </small> -->
        </div>
        <div class="col">
          <AppControlInput
            v-model="thumbnail"
            type="file"
            required
          >
            Thumbnail*
          </AppControlInput>
          <!-- <small
            :class="[qualifications.length < 3 ? 'info-error' : 'info-success']"
          >
            {{ qualificationsInfo }}
          </small> -->
        </div>
      </div>
      <button
        class="btn btn-freelance"
        type="submit"
      >
        Go live
      </button>
    </form>
  </div>
</template>

<script>
// import qualificationList from '~/static/data/qualifications.js'
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  name: 'FreelanceUpload',
  data () {
    return {
      thumbnail: '',
      cv: '',
      errors: []
    }
  },
  computed: {
    ...mapState('freelance', ['freelancer'])
  },
  // mounted () {
  //   this.cv = this.freelancer.cvUrl
  //   this.thumbnail = this.freelancer.thumbnailUrl
  // },
  methods: {
    ...mapActions('freelance', ['updateFreelancerHandymen']),
    ...mapMutations('freelance', ['UPDATE_FREELANCER']),
    onSubmit () {
      this.errors = []
      if (!this.cv.length && !this.thumbnail.length) {
        this.errors.push('Please fill all inputs')
      }
      if (!this.errors.length) {
        const payload = {
          thumbnailUrl: this.thumbnail,
          cvUrl: this.cv
        }
        this.UPDATE_FREELANCER(payload)
        this.updateFreelancerHandymen()
      }
    }
  }
}
</script>

<style scoped>
.btn-freelance{
  background-color: #2B7DC4;
  color: #fff;
  width: 155px;
  float: right;
  margin-bottom: 20px;
}
</style>
