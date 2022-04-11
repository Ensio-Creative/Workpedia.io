<template>
  <div class="container">
    <TopNavInfo
      dash-title="Users"
    />
    <div class="input-area my-3">
      <input
        v-model="filter"
        class="news-input"
        type="search"
        placeholder="Type to Search"
      >
      <button
        :disabled="!filter"
        class="news-btn"
        @click="filter = ''"
      >
        Clear
      </button>
    </div>

    <b-table
      :items="results"
      :fields="fields"
      :per-page="perPage"
      :filter="filter"
      :current-page="currentPage"
      sort-icon-left
      responsive="sm"
    >
      <template #cell(name)="data">
        {{ data.item.firstName }} {{ data.item.lastName }}
      </template>
      <template #cell(actions)="row">
        <!-- <b-button size="sm" @click="findById(row.item._id)">
          Info modal
        </b-button> -->
        <button
          class="btn btn-outline-danger float-right"
          @click="showMsgBoxTwo(row.item._id)"
        >
          <i class="fas fa-times" />
        </button>
        <button
          v-b-modal.modal-lg
          class="btn btn-outline-primary float-right pl-2"
          @click="findById(row.item._id)"
        >
          <i class="far fa-eye" />
        </button>
      </template>
    </b-table>

    <b-modal
      id="modal-lg"
      size="lg"
      :cancel-disabled="true"
      :ok-disabled="true"
    >
      <template #modal-title>
        <h5
          id="staticBackdropLabel"
          class="modal-title"
        >
          {{ `${foundUser.firstName} ${foundUser.lastName}` }}
        </h5>
      </template>
      <div class="contact-info">
        <!-- User img -->
        <div
          class="user-img"
          :style="{backgroundImage: 'url('+ `${envVarable}/${foundUser.imageUrl}` +')'}"
        />
        <div class="contact-detail row mt-4">
          <span class="col-6">Id: {{ foundUser._id }}</span>
          <span class="col-6">Email: {{ foundUser.email }}</span>
          <span class="col-6">Phone: {{ foundUser.phone }}</span>
          <span class="col-6">Age: {{ foundUser.age }}</span>
          <span class="col-6">State: {{ foundUser.state }}</span>
          <span class="col-6">City: {{ foundUser.city }}</span>
          <span class="col-6">Address: {{ foundUser.address }}</span>
          <span class="col-6">Tutor: {{ !foundUser.isTutor ? 'NO' : 'Yes' }}</span>
          <span class="col-6">Hirer: {{ !foundUser.isHire ? 'NO' : 'Yes' }}</span>
          <span class="col-6">Applicant: {{ !foundUser.isApplicant ? 'NO' : 'Yes' }}</span>
          <span class="col-6">Freelancer: {{ !foundUser.isFreelancer ? 'NO' : 'Yes' }}</span>
          <span class="col-6">Verified: {{ !foundUser.isVerified ? 'NO' : 'Yes' }}</span>
          <span class="col-6">Operator: {{ !foundUser.isOperator ? 'NO' : 'Yes' }}</span>
        </div>
      </div>
      <template #modal-footer="{ cancel}">
        <!-- Emulate built in modal footer ok and cancel button actions -->
        <b-button size="sm" variant="btn-apply" @click="cancel()">
          Cancel
        </b-button>
      </template>
    </b-modal>
    <div class="text-center mt-5">
      <b-pagination
        v-model="currentPage"
        pills
        :per-page="perPage"
        :total-rows="totalRow"
      />
    </div>
    <FooterDash
      class="mt-5"
    />
  </div>
</template>

<script>
import FooterDash from '~/components/dashboard/FooterDash.vue'
import TopNavInfo from '~/components/Navigation/dashboard/TopNavInfo.vue'
const vars = process.env.BASE_URL
export default {
  name: 'Users',
  layout: 'admin',
  components: { FooterDash, TopNavInfo },
  async asyncData ({ $axios }) {
    const { data } = await $axios.get('admin/all-users')
    const { results } = data
    return { results }
  },
  data () {
    return {
      envVarable: vars,
      boxTwo: '',
      foundUser: {},
      rows: 100,
      currentPage: 1,
      perPage: 10,
      socket: {},
      fields: [
        { key: 'name', label: 'Full name', sortable: true },
        { key: 'email', sortable: true },
        { key: 'phone', sortable: true },
        { key: 'age', sortable: true },
        { key: 'state', sortable: true },
        { key: 'city', sortable: true },
        { key: 'actions', label: 'Actions' }
      ],
      filter: null
    }
  },
  computed: {
    totalRow () {
      const count = this.results.length
      return count
    }
  },
  mounted () {
    this.socket = this.$nuxtSocket({
      name: 'home'
    })
    this.socket.on('users', (data) => {
      if (data.action === 'create') {
        this.results.push(data.user)
      }
    })
  },
  methods: {
    findById (id) {
      this.foundUser = this.results.find(user => user._id === id)
    },
    showMsgBoxTwo (id) {
      this.$bvModal.msgBoxConfirm('Please confirm you want to delete this user!.', {
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
            this.deleteUser(id)
          }
          this.boxTwo = value
        })
        .catch((err) => {
          // An error occurred
          console.log(err)
        })
    },
    async deleteUser (id) {
      const deletedUser = await this.$axios.$delete(
        `admin/remove-user/${id}`
      )
      if (!deletedUser) {
        console.log('User not deleted')
      }
      this.$toast.success(deletedUser.message)
      const result = this.results.filter(user => user._id !== id)
      this.results = result
    }
  }
}
</script>

<style scoped>
.container, .container-sm, .container-md, .container-lg {
  max-width: 1050px;
}
.float-right{
  float: right;
  margin-left: 10px;
}
.news-input {
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 1px rgba(37,30,140,0.25098);
  border: #FFFFFF;
  padding: 4px 33px;
}
.news-btn {
  background-color: #251E8C;
  padding: 5px 45px;
  color: #FFFFFF;
  box-shadow: 0px 0px 1px rgba(37,30,140,0.25098);
  border: #251E8C;
  margin-left: -4px;
}
.pagination {
  display: flex;
  padding-left: 0;
  list-style: none;
  border-radius: 0.25rem;
  justify-content: center;
  color: #0C0573 !important;
}
.page-link {
  position: relative;
  display: block;
  padding: 0.5rem 0.75rem;
  margin-left: -1px;
  line-height: 1.25;
  color: #0C0573 !important;
  background-color: #fff;
  border: 1px solid #dee2e6;
}
.page-item.active .page-link {
  z-index: 3;
  color: #fff;
  background-color: #0C0573 !important;
  border-color: #0C0573 !important;
}
</style>
