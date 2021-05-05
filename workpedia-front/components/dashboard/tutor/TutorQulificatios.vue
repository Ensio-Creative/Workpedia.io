<template>
  <div class="container">
    <form @submit.prevent="onSubmit">
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
      <AppButton
        type="submit"
        class="tutor-btn mb-3"
      >
        Save
      </AppButton>
    </form>
  </div>
</template>

<script>
export default {
  name: 'TutorQulifications',
  methods: {
    onSubmit () {
      console.log('Good')
    }
  }
}
</script>

<style scoped>
.tutor-btn{
  background-color: #251E8C;
  color: #fff;
  width: 155px;
  margin-top: 20px;
}
</style>
