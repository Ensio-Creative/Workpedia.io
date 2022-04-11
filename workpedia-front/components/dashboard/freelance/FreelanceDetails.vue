<template>
  <div class="container">
    <form
      @submit.prevent="onSubmit"
    >
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
            v-model.trim="serviceCharge"
            type="text"
            required
            placeholder="NGN"
            @input="checkserviceCharge"
          >
            Service charge
          </AppControlInput>
          <small
            :class="[serviceCharge.length < 3 ? 'info-error' : 'info-success']"
          >
            {{ serviceChargeInfo }}
          </small>
        </div>
      </div>
      <div class="row">
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
            :class="[!description.length ? 'info-error' : 'info-info']"
          >
            {{ descriptionInfo }}
          </small>
        </div>
      </div>
      <button
        class="btn btn-freelance"
        type="submit"
      >
        Save
      </button>
    </form>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import AppControlInput from '~/components/auth/UI-Components/AppControlInput.vue'
import AppTextarea from '~/components/auth/UI-Components/AppTextarea.vue'
import categories from '~/static/freelance/freelanceRoutes.js'
export default {
  name: 'FreelanceDetails',
  components: { AppTextarea, AppControlInput },
  emits: ['changeComponent'],
  data () {
    return {
      title: '',
      titleInfo: '',
      serviceCharge: '',
      serviceChargeInfo: '',
      category: '',
      categories,
      categoryInfo: '',
      skills: '',
      skillsInfo: '',
      description: '',
      descriptionInfo: '',
      errors: []
    }
  },
  computed: {
    ...mapState('freelance', ['freelancer'])
  },
  mounted () {
    this.title = this.freelancer.title
    this.serviceCharge = this.freelancer.serviceCharge
    this.category = this.freelancer.category
    this.skills = this.freelancer.skills
    this.description = this.freelancer.description
  },
  methods: {
    ...mapActions('freelance', ['updateFreelancerHandymen']),
    ...mapMutations('freelance', ['UPDATE_FREELANCER']),
    checkTitle () {
      if (this.title.length < 3) {
        this.titleInfo = 'Please add your title'
        return false
      } else {
        this.titleInfo = ''
        return true
      }
    },
    checkserviceCharge () {
      if (!this.serviceCharge) {
        this.serviceChargeInfo = 'Please add your service charge'
        return false
      } else {
        this.serviceChargeInfo = ''
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
      if (!this.checkTitle() && !this.checkserviceCharge()) {
        return this.errors.push('Invalid inputs')
      }
      if (!this.checkSkills() && !this.checkCity() && !this.checkDescription()) {
        return this.errors.push('Invalid inputs')
      }
      if (!this.stateSelect.length) {
        return this.errors.push('Invalid inputs')
      }
      if (!this.errors.length) {
        const payload = {
          title: this.title,
          serviceCharge: this.serviceCharge,
          category: this.category,
          skills: this.skills,
          description: this.description
        }
        this.updateFreelancerHandymen(payload)
        // console.log(payload)
        // this.UPDATE_FREELANCER(payload)
        this.$emit('changeComponent')
      }
    }
  }
}
</script>

<style scoped>
.btn-freelance{
  background-color: var(--bg-dark-blue);
  color: #fff;
  width: 155px;
  float: right;
  margin-bottom: 20px;
}
</style>
