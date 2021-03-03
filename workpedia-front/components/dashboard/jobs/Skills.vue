<template>
  <div class="container">
    <form>
      <div class="row">
        <div class="col">
          <label for="">Skills</label>
          <select class="form-select" aria-label="Default select example">
            <option selected>
              Mathematics
            </option>
            <option value="1">
              English
            </option>
            <option value="2">
              Chemistry
            </option>
            <option value="3">
              Geography
            </option>
            <option value="4">
              Futher Maths
            </option>
            <option value="5">
              Literature
            </option>
            <option value="5">
              Agricultural Science
            </option>
          </select>
        </div>
      </div>
      <div class="row mb-3">
        <label for="inputEmail3">Experience</label>
        <div class="col-sm-10">
          <select class="form-select" aria-label="Default select example">
            <option selected>
              British
            </option>
            <option value="1">
              Nigerian
            </option>
            <option value="2">
              American
            </option>
          </select>
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
  name: 'TutorDetails'
}
</script>

<style scoped>
.tutor-btn{
  background-color: #0DB47B;
  color: #000;
    width: 155px;
    float: right;
}
</style>
