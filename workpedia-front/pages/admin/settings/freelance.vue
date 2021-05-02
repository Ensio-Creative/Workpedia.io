<template>
  <div class="container">
    <TopNavInfo
      dash-title="freelance"
    />
    <SettingsNavAdmin
      class="mt-5"
    />
    <main>
      <div class="category-content">
        <div class="input-area my-5 text-center">
          <input
            v-model="title"
            class="news-input"
            type="text"
            placeholder="Title"
            @input="checkTitle"
          >
          <input
            v-model="url"
            class="news-input"
            type="text"
            placeholder="Url"
            @input="checkUrl"
          >
          <button
            :disabled="!title"
            class="news-btn"
            @click="addCategory"
          >
            Add
          </button>
        </div>
        <client-only>
          <div
            v-if="!result"
            class="create-container"
          >
            <AppButton
              type="submit"
              class="btn-hire mb-3"
              @click="createSetting"
            >
              Create
            </AppButton>
          </div>
        </client-only>
        <div class="row justify-content-center">
          <div class="col-12 col-md-8">
            <b-table
              :items="categoryList"
              :fields="fields"
              :per-page="perPage"
              :current-page="currentPage"
              sort-icon-left
              responsive="sm"
            >
              <template #cell(actions)="row">
                <button
                  class="btn btn-outline-danger float-right"
                  @click="showMsgBoxTwo(row.item._id)"
                >
                  <i class="fas fa-times" />
                </button>
              </template>
            </b-table>
            <div class="pagination-content mt-5">
              <b-pagination
                v-if="categoryList.length"
                v-model="currentPage"
                pills
                :per-page="perPage"
                :total-rows="categoryList.length"
              />
              <h4
                v-if="!categoryList.length"
              >
                No categories yet
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div class="amount-hire-content">
        <div class="input-area my-5 text-center">
          <label for="amount">Amount</label>
          <input
            id="amount"
            v-model="amount"
            class="news-input"
            type="number"
            placeholder="Amount"
          >
          <label for="chances">Chances</label>
          <input
            id="chances"
            v-model="chance"
            class="news-input"
            type="number"
            placeholder="Chance to hire"
          >
          <button
            :disabled="!chance || !amount"
            class="news-btn"
            @click="saveAmount"
          >
            Save
          </button>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'FreelanceSettings',
  layout: 'admin',
  async asyncData ({ $axios }) {
    const res = await $axios.$get('freelance/get-settings')
    const { result } = res
    return { result }
  },
  data () {
    return {
      title: '',
      url: '',
      amount: 0,
      chance: 0,
      errors: '',
      categoryList: [],
      currentPage: 1,
      perPage: 4,
      fields: [
        { key: 'title', sortable: true },
        { key: 'url', sortable: true },
        { key: 'actions', label: 'Actions' }
      ]
    }
  },
  // computed: {
  //   reverseList () {
  //     const list = this.categoryList.reverse()
  //     return list
  //   }
  // },
  mounted () {
    if (this.result) {
      this.amount = this.result.hireAmount
      this.chance = this.result.hireChance
      this.categoryList = this.result.categories
      this.categoryList.reverse()
    }
  },
  methods: {
    showMsgBoxTwo (id) {
      this.$bvModal.msgBoxConfirm('Please confirm you want to delete!.', {
        title: 'Please Confirm',
        size: 'sm',
        buttonSize: 'sm',
        okVariant: 'danger',
        okTitle: 'YES',
        cancelTitle: 'NO',
        footerClass: 'p-2',
        hideHeaderClose: false,
        centered: true
      })
        .then((value) => {
          if (value) {
            this.$axios.$delete(
              `freelance/delete-category/${this.result._id}`,
              id
            )
          }
          this.boxTwo = value
        })
        .catch((err) => {
          // An error occurred
          console.log(err)
        })
    },
    checkTitle () {
      if (this.title.length <= 3) {
        return false
      } else {
        return true
      }
    },
    checkUrl () {
      if (this.url.length <= 3) {
        return false
      } else {
        return true
      }
    },
    async addCategory () {
      this.errors = ''
      if (!this.checkTitle()) {
        this.errors = 'Invalid input'
        this.$toast.error('Please add a title')
        return this.errors
      }
      if (!this.checkUrl()) {
        this.errors = 'Invalid input'
        this.$toast.error('Please add a url')
        return this.errors
      }
      if (!this.errors.length) {
        const lowerUrl = this.url.toLowerCase()
        if (this.url.includes(' ')) {
          this.$toast.info('Please if need for spancing add a - between')
          return
        }
        const payload = {
          id: this.categoryList.length + 1,
          title: this.title,
          url: lowerUrl
        }
        const res = await this.$axios.$post(
          `freelance/category-settings/${this.result._id}`,
          payload
        )
        this.$toast.success(res.message)
        this.categoryList.unshift(res.category)
      }
    },
    async createSetting () {
      const res = await this.$axios.$post('freelance/create-settings')
      console.log(res)
    },
    async saveAmount () {
      this.errors = ''
      if (!this.chance) {
        this.errors = 'invalid inpute'
        this.$toast.info('Add chance for Applicant to hire')
      }
      if (!this.amount) {
        this.errors = 'invalid inpute'
        this.$toast.info('Add amount for Applicant to hire')
      }
      if (!this.errors.length) {
        const payload = {
          hireChance: this.chance,
          hireAmount: this.amount
        }
        const res = await this.$axios.$post(
          `freelance/amount-settings/${this.result._id}`,
          payload
        )
        this.$toast.success(res.message)
      }
    },
    deleteCategory (id) {
      this.$axios.$delete(
        `freelance/delete-category/${this.result._id}`,
        id
      )
        .then((res) => {
          this.$toast.success(res.message)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>
.container, .container-sm, .container-md, .container-lg {
  max-width: 1050px;
}
.news-input {
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 1px rgba(37,30,140,0.25098);
  border: #FFFFFF;
  padding: 4px 33px;
}
.news-btn {
  background-color: #2B7DC4;
  padding: 5px 45px;
  color: #FFFFFF;
  box-shadow: 0px 0px 1px #2B7DC4;
  border: #2B7DC4;
  margin-left: -4px;
}
.btn-hire{
  background-color: #2B7DC4 !important;
  border-radius: 8px;
  width: 200px;
  color: #fff;
}
.btn-hire:hover{
  text-decoration: none;
}
.create-container{
  text-align: center;
}
.pagination-content {
  display: flex;
  justify-content: center;
}
</style>
