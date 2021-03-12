<template>
  <div class="container">
    <form>
      <div class="row">
        <div class="col">
          <label for="">Select Subject</label>
          <select
            v-model.trim="subject"
            class="form-select"
            aria-label="Default select example"
          >
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
          <label for="">Select Class</label>
          <select
            v-model.trim="classes"
            class="form-select"
            aria-label="Default select example"
          >
            <option selected>
              Class 1 - 5
            </option>
            <option value="1">
              Js 1 - 3
            </option>
            <option value="2">
              Ss 1 - 3
            </option>
            <option value="3">
              Terriary - Beyound
            </option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <label for="">What you would cover</label>
          <textarea
            v-model.trim="whatYouWouldCover"
            type="text"
            class="form-control mb-3"
            placeholder="What you would cover"
            rows="2"
          />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <label for="">Extra info*</label>
          <textarea
            v-model="extraInfo"
            type="text"
            class="form-control mb-3"
            placeholder="Extra info"
            aria-label="First n ame"
            rows="3"
          />
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
  name: 'TutorDetails',
  data () {
    return {
      subject: '',
      classes: '',
      whatYouWouldCover: '',
      extraInfo: ''
    }
  }
}
</script>

<style scoped>
.tutor-btn{
  background-color: #FF9B17;
  color: #000;
    width: 155px;
    float: right;
}
</style>
