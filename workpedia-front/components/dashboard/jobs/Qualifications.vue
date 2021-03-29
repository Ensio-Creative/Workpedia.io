<template>
  <div class="container">
    <form
      @submit.prevent="onSubmit"
    >
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
        :class="[description.length <= 196 ? 'info-error' : 'info-success']"
      >
        {{ descriptionText }}
      </small>
      <div class="row">
        <div class="mb-3">
          <label for="formFile" class="form-label">Upload Cv*</label>
          <input
            id="formFile"
            class="form-control"
            type="file"
            required
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
import qualificationList from '~/static/data/qualifications.js'
import categories from '~/static/jobs/jobsRoutes.js'
export default {
  name: 'TutorDetails',
  data () {
    return {
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
      errors: []
    }
  },
  methods: {
    checkQaulifications () {
      if (this.qualificationSelect.length < 3) {
        this.qualificationSelectText = 'Please select a Degree'
        return false
      } else {
        this.qualificationSelectText = ''
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
      if (this.description.length <= 196) {
        this.descriptionText = 'Please add your description'
        return false
      } else {
        this.descriptionText = ''
        return true
      }
    },
    onSubmit () {
      if (!this.checkQaulifications() && !this.checkInstitution()) {
        return this.errors.push('Please fill in every filled')
      }
      if (!this.checkDescription() && !this.checkDate()) {
        return this.errors.push('Please fill in every filled')
      }
      if (!this.checkCategory() && !this.checkSkills()) {
        return this.errors.push('Please fill in every filled')
      }
      if (!this.errors.length) {
        const payload = {
          qualifications: this.qualificationSelect,
          institution: this.institution,
          date: this.date,
          category: this.categorySelect,
          skills: this.skills,
          description: this.description
        }
        console.log(payload)
      }
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
