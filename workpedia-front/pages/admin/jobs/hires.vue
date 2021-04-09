<template>
  <div class="container">
    <TopNavInfo
      dash-title="Jobs"
    />
    <JobsNavAdmin
      class="mt-5"
    />
    <ul class="list-group list-group-flush mt-5">
      <li class="list-group-item">
        <span class="name ml-2">FullName</span>  <span class="email ml-5">Email</span>  <span class="phone ml-5">Phone</span> <span class="age ml-5">age</span> <span class="city ml-5">city</span>
        <button
          class="btn btn-outline-danger float-right"
          @click="showMsgBoxTwo"
        >
          <i class="fas fa-times" />
        </button>
        <button
          v-b-modal.modal-lg
          class="btn btn-outline-primary float-right pl-2"
        >
          <i class="far fa-eye" />
        </button>
      </li>
      <li class="list-group-item">
        A second item
      </li>
      <li class="list-group-item">
        A third item
      </li>
      <li class="list-group-item">
        A fourth item
      </li>
      <li class="list-group-item">
        And a fifth one
      </li>
    </ul>
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
          <!-- Application for {{ fliteredJobs.title }} -->
        </h5>
      </template>
      <h5 class="my-4">
        Contact info
      </h5>
      <div class="contact-info">
        <!-- User img -->
        <div class="contact-detail">
          <img src="~/assets/img/avatar@2x.png" alt="">
        </div>
        <div class="contact-detail">
          <!-- User name -->
          <!-- <h5><strong>{{ fullName }}</strong></h5> -->
          <!-- User Description -->
          <!-- <p>{{ address }}</p> -->
          <!-- User location -->
          <!-- <small class="gray">{{ user.address }} Nigeria</small> -->
        </div>
      </div>
      <template #modal-footer="{ cancel}">
        <!-- Emulate built in modal footer ok and cancel button actions -->
        <b-button size="sm" variant="btn-apply" @click="cancel()">
          Cancel
        </b-button>
        <b-button size="sm" variant="success" @click="onSubmit">
          Submit
        </b-button>
      </template>
    </b-modal>
    <div class="text-center mt-5">
      <b-pagination
        v-model="currentPage"
        pills
        variant="page-link"
        :total-rows="rows"
      />
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
  data () {
    return {
      boxTwo: '',
      rows: 100,
      currentPage: 1
    }
  },
  methods: {
    showMsgBoxTwo () {
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
          this.boxTwo = value
        })
        .catch((err) => {
          // An error occurred
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
.float-right{
  float: right;
  margin-left: 10px;
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
