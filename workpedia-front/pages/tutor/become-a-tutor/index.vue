<template>
  <div class="container-fluid become-a-tutor">
    <div class="row justify-content-center">
      <div class="col-5 tutor-form mt-5">
        <form
          @submit.prevent="onSubmit"
        >
          <h4 class="mb-3">
            Become A Tutor
          </h4>
          <div class="row">
            <div class="col">
              <label for="">Have you Tutored before</label>
              <div class="row justify-content-around">
                <div class="col">
                  <div class="form-check">
                    <input
                      id="flexRadioDefault1"
                      v-model.trim="haveYouTutoredBefore"
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      value="Yes"
                      required
                    >
                    <label class="form-check-label" for="flexRadioDefault1">
                      Yes
                    </label>
                  </div>
                </div>
                <div class="col">
                  <div class="form-check">
                    <input
                      id="flexRadioDefault2"
                      v-model.trim="haveYouTutoredBefore"
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      value="No"
                      required
                    >
                    <label class="form-check-label" for="flexRadioDefault2">
                      No
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <label for="">What subject did you tutor on?</label>
              <input
                v-model.trim="subject"
                type="text"
                class="form-control"
                placeholder="Subject"
                aria-label="Last name"
                required
              >
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <label for="">Descripe yourself as a Tutor</label>
              <textarea
                v-model.trim="description"
                type="text"
                class="form-control mb-3"
                placeholder="Extra info"
                aria-label="First n ame"
                required
                rows="3"
              />
            </div>
          </div>
          <AppButton
            type="submit"
            class="tutor-btn mt-3"
          >
            Become
          </AppButton>
          <div class="sign-privacy">
            <p>By becoming a Tutor for Workepdia, you agree to our <strong>Privacy Policy</strong> & <strong>Terms of Service</strong> </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BecomeATutor',
  layout: 'auth',
  data () {
    return {
      haveYouTutoredBefore: '',
      subject: '',
      description: ''
    }
  },
  methods: {
    onSubmit () {
      console.log(this.haveYouTutoredBefore)
      this.$router.push('/dashboard/tutor')
    }
  }
}
</script>

<style scoped>
.tutor-form {
  background: #fff;
  border-radius: 10px;
  padding: 20px;
}
.tutor-btn{
  background-color: #FF9B17;
  color: #000;
}
.sign-privacy{
  padding-top: 10px;
  text-align: center;
}
</style>
