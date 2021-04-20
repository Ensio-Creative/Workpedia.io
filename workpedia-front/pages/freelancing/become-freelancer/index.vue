<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-12 col-md-5 bg-white my-3 px-4 sub-container">
        <form
          @submit.prevent="onSubmit"
        >
          <div class="form-heading">
            <h2 class="my-4">
              Become a freelancer/handymen
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
                v-model.trim="qualifications"
                type="text"
                required
                @input="checkQualifications"
              >
                Qualifications
              </AppControlInput>
              <small
                :class="[qualifications.length < 3 ? 'info-error' : 'info-success']"
              >
                {{ qualificationsInfo }}
              </small>
            </div>
          </div>
          <div class="row">
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
                {{ institutionInfo }}
              </small>
            </div>
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
                {{ dateInfo }}
              </small>
            </div>
            <div class="col">
              <label for="">Category</label>
              <select
                v-model="category"
                class="form-select"
                aria-label="Default select example"
                required
              >
                <option
                  v-for="categorySelect in categories"
                  :key="categorySelect.url"
                  selected
                  :value="categorySelect.url"
                  required
                >
                  {{ categorySelect.title }}
                </option>
              </select>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <AppControlInput
                v-model.trim="skills"
                type="text"
                required
                @input="checkSkills"
              >
                Skills
              </AppControlInput>
              <small
                :class="[skills.length < 3 ? 'info-error' : 'info-success']"
              >
                {{ skillsInfo }}
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
                v-model.trim="description"
                type="text"
                class="mb-3"
                placeholder="Describe"
                required
                @input="checkDescription"
              >
                Description
              </AppTextarea>
              <small
                :class="[!description.length ? 'info-error' : 'info-success']"
              >
                {{ descriptionInfo }}
              </small>
            </div>
          </div>
          <button
            class="btn btn-freelance"
            type="submit"
          >
            Become
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import states from '~/static/data/states.js'
import categories from '~/static/freelance/freelanceRoutes.js'
export default {
  name: 'BecomeFreelancer',
  layout: 'auth',
  data () {
    return {
      title: '',
      titleInfo: '',
      qualifications: '',
      qualificationsInfo: '',
      institution: '',
      institutionInfo: '',
      date: '',
      dateInfo: '',
      category: '',
      categories,
      categoryInfo: '',
      skills: '',
      skillsInfo: '',
      stateSelect: '',
      stateInfo: '',
      states,
      city: '',
      cityInfo: '',
      description: '',
      descriptionInfo: '',
      errors: []
    }
  },
  methods: {
    ...mapActions('freelance', ['registerFreelancerHandymen']),
    checkTitle () {
      if (this.title.length < 3) {
        this.titleInfo = 'Please add your title'
        return false
      } else {
        this.titleInfo = ''
        return true
      }
    },
    checkQualifications () {
      if (this.qualifications.length < 3) {
        this.qualificationsInfo = 'Please add qualification'
        return false
      } else {
        this.qualificationsInfo = ''
        return true
      }
    },
    checkInstitution () {
      if (this.institution.length < 3) {
        this.institutionInfo = 'Please add an Institution'
        return false
      } else {
        this.institutionInfo = ''
        return true
      }
    },
    checkDate () {
      if (this.date.length < 3) {
        this.dateInfo = 'Please a date'
        return false
      } else {
        this.dateInfo = ''
        return true
      }
    },
    checkSkills () {
      if (this.skills.length < 3) {
        this.skillsInfo = 'Please add a skill'
        return false
      } else {
        this.skillsInfo = ''
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
    checkDescription () {
      if (!this.description.length) {
        this.descriptionInfo = 'Please add your description'
        return false
      } else {
        this.descriptionInfo = ''
        return true
      }
    },
    onSubmit () {
      this.errors = []
      if (!this.checkTitle() && !this.checkQualifications() && !this.checkInstitution()) {
        return this.errors.push('Invalid inputs')
      }
      if (!this.checkSkills() && !this.checkCity() && !this.checkDescription()) {
        return this.errors.push('Invalid inputs')
      }
      if (!this.stateSelect.length && this.checkDate()) {
        return this.errors.push('Invalid inputs')
      }
      if (!this.errors.length) {
        const payload = {
          title: this.title,
          qualifications: this.qualifications,
          institution: this.institution,
          qualificationsDate: this.date,
          category: this.category,
          skills: this.skills,
          state: this.stateSelect,
          city: this.city,
          description: this.description
        }
        this.registerFreelancerHandymen(payload)
      }
    }
  }
}
</script>

<style scoped>
.container-fluid{
  height: 102vh;
}
.sub-container{
  border-radius: 8px;
}
.btn-freelance{
  background-color: #2B7DC4;
  text-align: center;
  width: 100%;
  padding: 10px;
  color: #fff;
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
