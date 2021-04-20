<template>
  <div class="container">
    <TopNavInfo
      dash-title="Tutors"
    />
    <TutorNav
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
      :items="tutors"
      :fields="fields"
      :per-page="perPage"
      :filter="filter"
      :current-page="currentPage"
      sort-icon-left
      responsive="sm"
    >
      <template #cell(name)="data">
        {{ data.item.userId.firstName }} {{ data.item.userId.lastName }}
      </template>
      <template #cell(email)="data">
        {{ data.item.userId.email }}
      </template>

      <template #cell(actions)="row">
        <!-- <b-button size="sm" @click="findById(row.items._id)">
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
        v-for="tutor in tutors"
        :key="tutor._id"
        class="list-group-items"
      >
        <span class="name">{{ `${tutor.userId.firstName} ${tutor.userId.lastName}` }}</span>
        <span class="email ml-3">{{ tutor.userId.email }}</span>
        <span class="phone ml-3">{{ tutor.phone }}</span>
        <span class="age ml-3"> {{ tutor.tutorSubject }}</span>
        <span class="age ml-3"> {{ tutor.tutoredClass }}</span>
        <button
          class="btn btn-outline-danger float-right"
          @click="showMsgBoxTwo(tutor._id)"
        >
          <i class="fas fa-times" />
        </button>
        <button
          v-b-modal.modal-lg
          class="btn btn-outline-primary float-right pl-2"
          @click="findById(tutor._id)"
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
        <h5
          id="staticBackdropLabel"
          class="modal-title"
        >
          {{ `${user.firstName} ${user.lastName}` }}
        </h5>
      </template>
      <div class="contact-info">
        <!-- User img -->
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
      class="fixed-bottom"
    />
  </div>
</template>

<script>
export default {
  name: 'Tutors',
  layout: 'admin',
  async asyncData ({ $axios }) {
    const { tutors } = await $axios.$get('admin/all-tutors')
    return { tutors }
  },
  data () {
    return {
      boxTwo: '',
      rows: 100,
      foundTutor: {},
      user: {},
      currentPage: 1,
      perPage: 4,
      fields: [
        { key: 'name', label: 'Tutor Name', sortable: true },
        { key: 'email', label: 'Tutor Email', sortable: true },
        { key: 'tutorSubject', label: 'Subject', sortable: true },
        { key: 'tutoredClass', label: 'Class', sortable: true },
        { key: 'actions', label: 'Actions' }
      ],
      filter: null
    }
  },
  computed: {
    totalRow () {
      const count = this.tutors.length
      return count
    }
  },
  methods: {
    findById (id) {
      this.foundTutor = this.tutors.find(user => user._id === id)
      this.user = this.foundTutor.userId
    },
    showMsgBoxTwo (id) {
      this.$bvModal.msgBoxConfirm('Please confirm you want to delete this tutor!.', {
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
            this.deleteTutor(id)
          }
          this.boxTwo = value
        })
        .catch((err) => {
          // An error occurred
          console.log(err)
        })
    },
    async deleteTutor (id) {
      const deletedTutor = await this.$axios.$delete(
        `admin/delete-tutor/${id}`
      )
      if (!deletedTutor) {
        console.log('User not deleted')
      }
      const result = this.tutors.filter(user => user._id !== id)
      this.tutors = result
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
  background-color: #FF9B17;
  padding: 5px 45px;
  color: #FFFFFF;
  box-shadow: 0px 0px 1px #FF9B17;
  border: #FF9B17;
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
.page-items.active .page-link {
  z-index: 3;
  color: #fff;
  background-color: #0C0573 !important;
  border-color: #0C0573 !important;
}
</style>
