<template>
  <div class="container-fluid become-a-tutor">
    <div class="row justify-content-center">
      <div class="col-10 col-md-5 tutor-form mt-5">
        <form
          @submit.prevent="onSubmit"
        >
          <h4 class="mb-3">
            Become a tutor
          </h4>
          <div class="row">
            <div class="col">
              <label for="">Have you tutored before</label>
              <div class="row justify-content-around">
                <div class="col">
                  <div class="form-check">
                    <input
                      id="flexRadioDefault1"
                      v-model.trim="haveYouTutoredBefore"
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      value="true"
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
                      value="false"
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
              <AppControlInput
                v-model.trim="subjectTutorBefore"
                type="text"
                placeholder="Subject"
                required
              >
                What subject did you tutor on?
              </AppControlInput>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <AppTextarea
                v-model.trim="description"
                type="text"
                class="mb-3"
                placeholder="Describe"
                required
              >
                Descripe yourself as a tutor
              </AppTextarea>
            </div>
          </div>
          <AppButton
            type="submit"
            class="tutor-btn mt-3"
          >
            Become
          </AppButton>
          <div class="sign-privacy">
            <p>By becoming a Tutor for Workepdia, you agree to our <strong @click="$router.push('/privacy')">Privacy Policy</strong> & <strong @click="$router.push('/terms')">Terms of Service</strong> </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import AppButton from '~/components/auth/UI-Components/AppButton.vue'
import AppControlInput from '~/components/auth/UI-Components/AppControlInput.vue'
import AppTextarea from '~/components/auth/UI-Components/AppTextarea.vue'
export default {
  name: 'BecomeATutor',
  components: { AppButton, AppControlInput, AppTextarea },
  layout: 'auth',
  data () {
    return {
      haveYouTutoredBefore: '',
      subjectTutorBefore: '',
      description: ''
    }
  },
  computed: {
    ...mapState('auth', ['user'])
  },
  methods: {
    ...mapActions('tutors', ['startTutor']),
    onSubmit () {
      const payload = {
        haveYouTutoredBefore: this.haveYouTutoredBefore,
        subject: this.subjectTutorBefore,
        description: this.description
      }
      if (!this.user.token) {
        this.$store.commit('HAS_ACCOUNT', false)
        this.$toast.info('Please sign up')
        return this.$router.push('/auth')
      }
      this.startTutor(payload)
      // this.$router.push('/dashboard/tutor')
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
  background-color: #251E8C;
  color: #fff;
}
.sign-privacy{
  padding-top: 10px;
  text-align: center;
}
strong {
  cursor: pointer;
}
.become-a-tutor{
  height: 100vh;
}
</style>
