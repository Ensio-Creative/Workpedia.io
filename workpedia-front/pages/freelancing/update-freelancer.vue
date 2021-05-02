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
  name: 'UpdateFreelancer',
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
    this.updateFreelancer()
  },
  methods: {
    ...mapMutations(['UPDATE_USER']),
    async updateFreelancer () {
      const res = await this.$axios.$get(
        `freelance/get-freelancer-info/${this.userId}`
      )
      this.UPDATE_USER(res.result)
      this.$router.push('/freelancing')
    }
  }
}
</script>

<style scoped>

</style>
