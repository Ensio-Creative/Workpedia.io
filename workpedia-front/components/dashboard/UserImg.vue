<template>
  <div>
    <div
      class="user-img"
      :style="{backgroundImage: 'url('+ `${envVarable}/${user.imageUrl}` +')'}"
    />
    <label
      class="text-success font-weight-bold font-size-sm"
      for="single-uploader-component"
    >Avatar upload</label>
    <SingleUpload id="single-uploader-component" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import SingleUpload from '@/components/auth/UI-Components/SingleUpload.vue'
const vars = process.env.BASE_URL
export default {
  name: 'ImageUpload',
  components: { SingleUpload },
  data () {
    return {
      envVarable: vars
    }
  },
  computed: {
    ...mapState('auth', ['user'])
  },
  methods: {
    onChange (image) {
      console.log(image)
    }
  }
}
</script>

<style scoped>

</style>
