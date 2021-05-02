<template>
  <div class="container">
    <h5 class="mt-5 text-center">
      Please wait!!!
    </h5>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'UpdateApplicant',
  data () {
    return {
      userId: ''
    }
  },
  computed: {
    ...mapState('auth', ['user'])
  },
  mounted () {
    this.userId = this.user._id
    this.updateApplicant()
  },
  methods: {
    ...mapMutations('applicant', ['UPDATE_APPLICANT']),
    async updateApplicant () {
      const res = await this.$axios.$get(
        `applicant/get-applicant-info/${this.userId}`
      )
      this.UPDATE_APPLICANT(res.result)
      this.$router.push('/jobs')
    }
  }
}
</script>

<style scoped>

</style>
