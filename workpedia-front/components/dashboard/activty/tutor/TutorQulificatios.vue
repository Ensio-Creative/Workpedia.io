<template>
  <div class="container">
    <form>
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
        GO LIVE
      </AppButton>
    </form>
  </div>
</template>

<script>
export default {
  name: 'TutorQulifications'
}
</script>

<style scoped>
.tutor-btn{
  background-color: #FF9B17;
  color: #fff;
  width: 155px;
  margin-top: 20px;
}
</style>
