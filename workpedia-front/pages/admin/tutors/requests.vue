<template>
  <div class="container">
    <TopNavInfo
      dash-title="Tutors"
    />
    <TutorNav />
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
      stacked
    >
      <template #cell(name)="data">
        {{ data.item.firstName }} {{ data.item.lastName }}
      </template>
      <template #cell(email)="data">
        {{ data.item.email }}
      </template>
      <template #cell(location)="data">
        {{ data.item.city }}, {{ data.item.states }}
      </template>

      <template #cell(actions)="row">
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
    <!-- <b-modal
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
          {{ `${user.firstName} ${user.lastName}` }}
        </h5>
      </template>
      <div class="contact-info">
        <div class="contact-detail">
          <img src="~/assets/img/avatar@2x.png" alt="">
        </div>
        <div class="contact-detail row mt-4">
          <span class="col-6">Id: {{ foundTutor._id }}</span>
          <span class="col-6">Subject: {{ foundTutor.tutorSubject }}</span>
          <span class="col-6">Class: {{ foundTutor.tutoredClass }}</span>
          <span class="col-6">Category: {{ foundTutor.tutorCategory }}</span>
          <span class="col-6">Covering areas: {{ foundTutor.courseCategory }}</span>
          <span class="col-6">Email: {{ user.email }}</span>
          <span class="col-6">Phone: {{ user.phone }}</span>
          <span class="col-6">State: {{ user.state }}</span>
          <span class="col-6">City: {{ user.city }}</span>
          <span class="col-6">Address: {{ user.address }}</span>
        </div>
      </div>
      <template #modal-footer="{ cancel}">
        <b-button size="sm" variant="btn-apply" @click="cancel()">
          Cancel
        </b-button>
      </template>
    </b-modal> -->
    <div class="text-center mt-5">
      <b-pagination
        v-model="currentPage"
        pills
        :per-page="perPage"
        :total-rows="results.length"
      />
    </div>
    <FooterDash
      class="mt-5"
    />
  </div>
</template>

<script>
import TutorNav from '~/components/admin/tutors/TutorNav.vue'
import FooterDash from '~/components/dashboard/FooterDash.vue'
import TopNavInfo from '~/components/Navigation/dashboard/TopNavInfo.vue'
export default {
  name: 'Requests',
  layout: 'admin',
  components: { FooterDash, TopNavInfo, TutorNav },
  async asyncData ({ $axios }) {
    const { results } = await $axios.$get('admin/all-tutor-request')
    return { results }
  },
  data () {
    return {
      boxTwo: '',
      rows: 100,
      currentPage: 1,
      perPage: 10,
      fields: [
        { key: 'name', label: 'Full name', sortable: true },
        { key: 'email', sortable: true },
        { key: 'phone', sortable: true },
        { key: 'location', label: 'Location', sortable: true },
        { key: 'actions', label: 'Actions' }
      ],
      filter: null
    }
  },
  methods: {
    findById (id) {
      this.$router.push(id)
    },
    showMsgBoxTwo (id) {
      this.$bvModal.msgBoxConfirm('Please confirm you want to delete this request!.', {
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
          this.deleteTutorRequest(id)
        })
        .catch((err) => {
          // An error occurred
          console.log(err)
        })
    },
    async deleteTutorRequest (id) {
      const deletedTutorRequest = await this.$axios.$delete(
        `admin/delete-tutor-request/${id}`
      )
      if (!deletedTutorRequest) {
        console.log('User not deleted')
      }
      const result = this.results.filter(request => request._id !== id)
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
.pagination {
  display: flex;
  padding-left: 0;
  list-style: none;
  border-radius: 0.25rem;
  justify-content: center;
  color: #0C0573 !important;
}
.added-btn{
  float: right;
  margin-right: 10px;
}

.request-title{
  color: #251E8C;
  font-size: 27px;
}
</style>
