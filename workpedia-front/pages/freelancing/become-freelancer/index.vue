<template>
  <div class="container-fluid py-5">
    <div class="row justify-content-center">
      <div class="col-12 col-md-5 bg-white my-5 px-4 sub-container">
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
                v-model="categoryItem"
                class="form-select"
                aria-label="Default select example"
                required
                @change="pushValue"
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
              <small>
                {{ category }}
              </small>
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
                :class="[skills.length < 3 ? 'info-error' : '']"
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
            Become
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import AppControlInput from '~/components/auth/UI-Components/AppControlInput.vue'
import AppTextarea from '~/components/auth/UI-Components/AppTextarea.vue'
export default {
  name: 'BecomeFreelancer',
  layout: 'auth',
  components: { AppControlInput, AppTextarea },
  async asyncData ({ $axios }) {
    const res = await $axios.$get('public/freelance/get-settings')
    const { result } = res
    return { result }
  },
  data () {
    return {
      title: '',
      titleInfo: '',
      serviceCharge: '',
      serviceChargeInfo: '',
      categories: [],
      category: [],
      categoryItem: '',
      categoryInfo: '',
      skills: '',
      skillsInfo: '',
      description: '',
      descriptionInfo: '',
      errors: []
    }
  },
  mounted () {
    this.categories = this.result.categories
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
    checkserviceCharge () {
      if (!this.serviceCharge) {
        this.serviceChargeInfo = 'Please add your service charge'
        return false
      } else {
        this.serviceChargeInfo = ''
        return true
      }
    },
    pushValue () {
      this.category.push(this.categoryItem)
    },
    checkSkills () {
      if (this.skills.length < 3) {
        this.skillsInfo = 'Please add a skill'
        return false
      } else {
        this.skillsInfo = 'Separate skills with a comma'
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
      if (!this.checkTitle() && !this.checkserviceCharge()) {
        return this.errors.push('Invalid inputs')
      }
      if (!this.checkSkills() && !this.category.length && !this.checkDescription()) {
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
        // console.log(payload)
        this.registerFreelancerHandymen(payload)
      }
    }
  }
}
</script>

<style scoped>
/* .container-fluid{
  height: 108vh;
} */
.sub-container{
  border-radius: 30px;
}
.btn-freelance{
  background-color: #251E8C;
  text-align: center;
  width: 100%;
  padding: 10px;
  color: #fff;
  margin-top: 20px;
  margin-bottom: 20px;
}
.info-info {
  color: #000;
}
</style>
