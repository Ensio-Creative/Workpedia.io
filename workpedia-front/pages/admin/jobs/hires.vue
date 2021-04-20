<template>
  <div class="container">
    <TopNavInfo
      dash-title="Jobs"
    />
    <JobsNavAdmin
      class="mt-5"
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
    <!-- <ul class="list-group list-group-flush mt-5">
      <li
        v-for="hire in results"
        :key="hire._id"
        class="list-group-item"
      >
        <span class="name">{{ hire.companyName }}</span>
        <span class="email ml-3">{{ hire.companyEmail }}</span>
        <span class="phone ml-3">{{ hire.companyPhone }}</span>
        <button
          class="btn btn-outline-danger float-right"
          @click="showMsgBoxTwo(hire._id)"
        >
          <i class="fas fa-times" />
        </button>
        <button
          v-b-modal.modal-lg
          class="btn btn-outline-primary float-right pl-2"
          @click="findById(hire._id)"
        >
          <i class="far fa-eye" />
        </button>
      </li>
    </ul> -->
    <b-modal
      id="modal-lg"
      size="lg"
      :cancel-disabled="true"
      :ok-disabled="true"
    >
      <template #modal-title>
        <span
          id="staticBackdropLabel"
          class="modal-title"
        >
          {{ `${user.firstName} ${user.lastName}` }}
        </span>
      </template>
      <div class="contact-info">
        <!-- User img -->
        <div class="contact-detail">
          <img src="~/assets/img/avatar@2x.png" alt="">
        </div>
        <div class="contact-detail row mt-4">
          <span class="col-6">
            Id: {{ foundHirer._id }}
          </span>
          <span class="col-6">
            Company Name: {{ foundHirer.companyName }}
          </span>
          <span class="col-6">
            Company Email: {{ foundHirer.companyEmail }}
          </span>
          <span class="col-6">
            Company Phone: {{ foundHirer.companyPhone }}
          </span>
          <span class="col-6">
            Company Description: {{ foundHirer.companyDescription }}
          </span>
          <span class="col-6">
            Email: {{ user.email }}
          </span>
          <span class="col-6">
            Phone: {{ user.phone }}
          </span>
          <span class="col-6">
            State: {{ user.state }}
          </span>
          <span class="col-6">
            City: {{ user.city }}
          </span>
          <span class="col-6">
            Address: {{ user.address }}
          </span>
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
        v-if="results.length"
        v-model="currentPage"
        pills
        :per-page="perPage"
        :total-rows="totalRow"
      />
      <h4
        v-if="!results.length"
      >
        No Hires yet
      </h4>
    </div>
    <FooterDash
      class="fixed-bottom"
    />
  </div>
</template>

<script>
export default {
  name: 'Hires',
  layout: 'admin',
  async asyncData ({ $axios }) {
    const { results } = await $axios.$get('admin/all-hires')
    return { results }
  },
  data () {
    return {
      boxTwo: '',
      rows: 100,
      foundHirer: {},
      user: {},
      currentPage: 1,
      perPage: 4,
      fields: [
        { key: 'companyName', label: 'Company Name', sortable: true },
        { key: 'companyEmail', label: 'Company Email', sortable: true },
        { key: 'companyPhone', label: 'Company Phone', sortable: true },
        { key: 'companyWeb', label: 'Company Web', sortable: true },
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
  methods: {
    findById (id) {
      this.foundHirer = this.results.find(user => user._id === id)
      this.user = this.foundHirer.userId
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
            this.deleteHire(id)
          }
          this.boxTwo = value
        })
        .catch((err) => {
          // An error occurred
          console.log(err)
        })
    },
    async deleteHire (id) {
      const deletedHire = await this.$axios.$delete(
        `admin/delete-hire/${id}`
      )
      if (!deletedHire) {
        console.log('User not deleted')
      }
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
  background-color: #0DB47B;
  padding: 5px 45px;
  color: #FFFFFF;
  box-shadow: 0px 0px 1px #0DB47B;
  border: #0DB47B;
  margin-left: -4px;
}
.pagination {
  display: flex;
  padding-left: 0;
  list-style: none;
  border-radius: 0.25rem;
  justify-content: center;
  color: #342da1 !important;
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
