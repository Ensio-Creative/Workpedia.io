<template>
  <div class="container">
    <form>
      <div class="row">
        <div class="col">
          <label for="">Qlifications</label>
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
        <div class="col">
          <AppControlInput
            v-model.trim="institution"
            type="text"
            required
          >
            Institution
          </AppControlInput>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <AppControlInput
            v-model.trim="date"
            type="date"
            required
          >
            Date
          </AppControlInput>
        </div>
      </div>
      <AppButton
        type="submit"
        class="tutor-btn mb-3"
      >
        Add Qulification
      </AppButton>
    </form>
  </div>
</template>

<script>
export default {
  name: 'TutorDetails',
  data () {
    return {
      institution: '',
      data: ''
    }
  }
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
