<template>
  <div class="container">
    <TopNavInfo
      dash-title="Freelance"
      class="mb-5"
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
            Id: {{ foundFreelancer._id }}
          </span>
          <span class="col-6">
            Title: {{ foundFreelancer.title }}
          </span>
          <span class="col-6">
            Qualifications: {{ foundFreelancer.qualifications }}
          </span>
          <span class="col-6">
            Institution: {{ foundFreelancer.institution }}
          </span>
          <span class="col-6">
            Description: {{ foundFreelancer.Description }}
          </span>
          <span class="col-6">
            Date: {{ foundFreelancer.qualificationsDate }}
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
        No Freelancers yet
      </h4>
    </div>
    <FooterDash
      class="mt-5"
    />
  </div>
</template>

<script>
import FooterDash from '~/components/dashboard/FooterDash.vue'
import TopNavInfo from '~/components/Navigation/dashboard/TopNavInfo.vue'
export default {
  name: 'Freelance',
  layout: 'admin',
  components: { FooterDash, TopNavInfo },
  async asyncData ({ $axios }) {
    const { results } = await $axios.$get('admin/all-freelancers')
    return { results }
  },
  data () {
    return {
      boxTwo: '',
      rows: 100,
      foundFreelancer: {},
      user: {},
      currentPage: 1,
      perPage: 10,
      fields: [
        { key: 'title', label: 'Title', sortable: true },
        { key: 'qualifications', label: 'Qualification', sortable: true },
        { key: 'institution', label: 'Institution', sortable: true },
        { key: 'qualificationsDate', label: 'Date', sortable: true },
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
      this.foundFreelancer = this.results.find(user => user._id === id)
      this.user = this.foundFreelancer.userId
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
            this.deleteFreelancer(id)
          }
          this.boxTwo = value
        })
        .catch((err) => {
          // An error occurred
          console.log(err)
        })
    },
    async deleteFreelancer (id) {
      const deletedFreelancer = await this.$axios.$delete(
        `admin/delete-freelancer/${id}`
      )
      if (!deletedFreelancer) {
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
  background-color: var(--bg-dark-blue);
  padding: 5px 45px;
  color: #FFFFFF;
  box-shadow: 0px 0px 1px var(--bg-dark-blue);
  border: var(--bg-dark-blue);
  margin-left: -4px;
}
</style>
