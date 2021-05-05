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
                <div class="col">
                  <AppControlInput
                    v-model.trim="institution"
                    type="text"
                    required
                    @input="checkInstitution"
                  >
                    Institution
                  </AppControlInput>
                  <small
                    :class="[institution.length < 3 ? 'info-error' : 'info-success']"
                  >
                    {{ institutionText }}
                  </small>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <label for="">Qualifications</label>
                  <select
                    v-model.trim="qualificationSelect"
                    class="form-select"
                    aria-label="Default select example"
                    @change="checkQaulifications"
                  >
                    <option
                      v-for="qualify in qualificationList"
                      :key="qualify"
                      selected
                      :value="qualify"
                    >
                      {{ qualify }}
                    </option>
                  </select>
                  <small
                    :class="[qualificationSelect.length < 3 ? 'info-error' : 'info-success']"
                  >
                    {{ qualificationSelectText }}
                  </small>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <AppControlInput
                    v-model.trim="date"
                    type="date"
                    required
                    @input="checkDate"
                  >
                    Date
                  </AppControlInput>
                  <small
                    :class="[date.length < 3 ? 'info-error' : 'info-success']"
                  >
                    {{ dateText }}
                  </small>
                </div>
                <div class="col">
                  <label for="">Category</label>
                  <select
                    v-model.trim="categorySelect"
                    class="form-select"
                    aria-label="Default select example"
                    @change="checkCategory"
                  >
                    <option
                      v-for="category in categories"
                      :key="category.url"
                      selected
                      :value="category.url"
                      required
                    >
                      {{ category.title }}
                    </option>
                  </select>
                  <small
                    :class="[categorySelect.length < 3 ? 'info-error' : 'info-success']"
                  >
                    {{ categoryText }}
                  </small>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <label for="">State</label>
                  <select
                    v-model="stateSelect"
                    class="form-select"
                    aria-label="Default select example"
                    required
                  >
                    <option
                      v-for="state in states"
                      :key="state"
                      selected
                      :value="state"
                      required
                    >
                      {{ state }}
                    </option>
                  </select>
                </div>
                <div class="col">
                  <AppControlInput
                    v-model.trim="city"
                    type="text"
                    required
                    @input="checkCity"
                  >
                    City
                  </AppControlInput>
                  <small
                    :class="[!city.length ? 'info-error' : 'info-success']"
                  >
                    {{ cityInfo }}
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
import states from '~/static/data/states.js'
import qualificationList from '~/static/data/qualifications.js'
import categories from '~/static/jobs/jobsRoutes.js'
export default {
  name: 'RegisterApplicant',
  layout: 'auth',
  data () {
    return {
      title: '',
      titleInfo: '',
      qualificationSelect: '',
      qualificationSelectText: '',
      qualificationList,
      institution: '',
      institutionText: '',
      date: '',
      dateText: '',
      skills: '',
      skillsText: '',
      description: '',
      descriptionText: '',
      categorySelect: '',
      categoryText: '',
      categories,
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
    checkQaulifications () {
      if (this.qualificationSelect.length < 3) {
        this.qualificationSelectText = 'Please select a Degree'
        return false
      } else {
        this.qualificationSelectText = ''
        return true
      }
    },
    checkTitle () {
      if (this.title.length < 3) {
        this.titleInfo = 'Please add an institute'
        return false
      } else {
        this.titleInfo = ''
        return true
      }
    },
    checkInstitution () {
      if (this.institution.length < 3) {
        this.institutionText = 'Please add an institute'
        return false
      } else {
        this.institutionText = ''
        return true
      }
    },
    checkDate () {
      if (this.date.length < 3) {
        this.dateText = 'Add a date'
        return false
      } else {
        this.dateText = ''
        return true
      }
    },
    checkCategory () {
      if (this.categorySelect.length < 3) {
        this.categoryText = 'Please select a category'
        return false
      } else {
        this.categoryText = ''
        return true
      }
    },
    checkCity () {
      if (!this.city.length) {
        this.cityInfo = 'Please add your city'
        return false
      } else {
        this.cityInfo = ''
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
      if (!this.checkQaulifications() && !this.checkInstitution() && !this.checkTitle()) {
        return this.errors.push('Please fill in every filled')
      }
      if (!this.checkDescription() && !this.checkDate()) {
        return this.errors.push('Please fill in every filled')
      }
      if (!this.checkCategory() && !this.checkSkills()) {
        return this.errors.push('Please fill in every filled')
      }
      if (!this.stateSelect.length && !this.checkCity()) {
        return this.errors.push('Please fill in every filled')
      }
      if (!this.errors.length) {
        const payload = {
          title: this.title,
          qualifications: this.qualificationSelect,
          institution: this.institution,
          date: this.date,
          category: this.categorySelect,
          state: this.stateSelect,
          city: this.city,
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
/* .login-column{
  margin-top: 70px;
  height: 134vh;
} */
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
