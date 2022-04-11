<template>
  <div class="container-fluid auth-container">
    <div class="row justify-content-center">
      <div class="col-12 col-lg-9 login-column">
        <div class="row inner-auth-row justify-content-center">
          <div class="col-10 col-lg-8 auth-column">
            <form
              @submit.prevent="onSubmit"
            >
              <div class="form-heading">
                <h2 class="my-4">
                  Register to apply for jobs
                </h2>
              </div>
              <div class="row">
                <div class="col">
                  <AppControlInput
                    v-model.trim="title"
                    type="text"
                    required
                    @input="checkTitle"
                  >
                    Title
                  </AppControlInput>
                  <small
                    :class="[title.length < 3 ? 'info-error' : 'info-success']"
                  >
                    {{ titleInfo }}
                  </small>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <AppTextarea
                    v-model.trim="skills"
                    type="text"
                    placeholder="Add your skills, separate with a comma!!!"
                    required
                    @input="checkSkills"
                  >
                    Skills
                  </AppTextarea>
                  <small
                    :class="[skills.length < 3 ? 'info-error' : 'info-success']"
                  >
                    {{ skillsText }}
                  </small>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <AppTextarea
                    v-model.trim="description"
                    type="text"
                    placeholder="Add description of what you do."
                    required
                    @input="checkDescription"
                  >
                    Description
                  </AppTextarea>
                </div>
              </div>
              <small
                :class="[!description.length ? 'info-error' : 'info-success']"
              >
                {{ descriptionText }}
              </small>
              <AppButton
                type="submit"
                class="btn-apply mb-3"
              >
                Submit
              </AppButton>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { mapState, mapActions } from 'vuex'
import AppButton from '~/components/auth/UI-Components/AppButton.vue'
import AppControlInput from '~/components/auth/UI-Components/AppControlInput.vue'
import AppTextarea from '~/components/auth/UI-Components/AppTextarea.vue'
import states from '~/static/data/states.js'
export default {
  name: 'RegisterApplicant',
  components: { AppControlInput, AppButton, AppTextarea },
  layout: 'auth',
  data () {
    return {
      title: '',
      titleInfo: '',
      skills: '',
      skillsText: '',
      description: '',
      descriptionText: '',
      stateSelect: '',
      stateInfo: '',
      states,
      city: '',
      cityInfo: '',
      errors: []
    }
  },
  computed: {
    ...mapState('applicant', ['applicant'])
  },
  methods: {
    ...mapActions('applicant', ['registerApplicant']),
    checkTitle () {
      if (this.title.length < 3) {
        this.titleInfo = 'Please add an institute'
        return false
      } else {
        this.titleInfo = ''
        return true
      }
    },
    checkSkills () {
      if (this.skills.length <= 3) {
        this.skillsText = 'Add your skills'
        return false
      } else {
        this.skillsText = ''
        return true
      }
    },
    checkDescription () {
      if (!this.description.length) {
        this.descriptionText = 'Please add your description'
        return false
      } else {
        this.descriptionText = ''
        return true
      }
    },
    onSubmit () {
      if (!this.checkTitle()) {
        return this.errors.push('Please fill in every filled')
      }
      if (!this.checkDescription()) {
        return this.errors.push('Please fill in every filled')
      }
      if (!this.checkSkills()) {
        return this.errors.push('Please fill in every filled')
      }
      if (!this.errors.length) {
        const payload = {
          title: this.title,
          skills: this.skills,
          description: this.description
        }
        console.log(payload)
        this.registerApplicant(payload)
      }
    }
  }
}
</script>

<style scoped>
.inner-auth-row{
  border-radius: 20px;
  margin-top: 0px;
}
.login-column{
  margin-top: 70px;
  height: 90vh;
}
.auth-column{
  background-color: #fff;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 30px;
  /* border-radius: 20px 0px 0px 20px; */
}
.auth-columnl{
  background: #fff;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 35px;
  border-radius: 20px;
}

.sub-container{
  border-radius: 8px;
}
.btn-apply{
  background-color: #251E8C !important;
  border-radius: 8px;
  color: #fff;
}
.btn-apply:hover{
  text-decoration: none;
}
</style>
