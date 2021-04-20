<template>
  <div class="container">
    <TopNavInfo
      dash-title="Tutors"
    />
    <TutorNav />
    <div class="row justify-content-center mt-4">
      <div class="col-12 col-md-11 col-lg-11">
        <div class="row">
          <div
            v-for="request in results"
            :key="request._id"
            class="col-12 col-md-12 col-lg-12 popular-column"
          >
            <div class="popular-column-heading">
              <span class="request-title">{{ request.subject }}</span>
              <h5>{{ `${request.states}, ${request.city}` }}</h5>
              <button
                class="btn btn-outline-danger added-btn"
                @click="showMsgBoxTwo(request._id)"
              >
                Delete
              </button>
              <button
                v-b-modal.modal-request
                class="btn btn-outline-warning added-btn"
              >
                Serve request
              </button>
            </div>
            <div class="popular-durations">
              <span class="gray-background">
                <h6>{{ $moment(request.createdAt).fromNow() }}</h6>
              </span>
            </div>
            <div class="popular-text mt-3 mb-4">
              <h3>Students Details</h3>
              <div class="row">
                <div class="col">
                  <span
                    class="card-text"
                  >
                    Number of students: {{ request.numberOfStudents }}
                  </span>
                </div>
                <div class="col">
                  <span
                    class="card-text"
                  >
                    Students class: {{ request.studentClass }}
                  </span>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <span
                    class="card-text"
                  >
                    Students Goal: {{ request.studentGoal }}
                  </span>
                </div>
                <div class="col">
                  <span
                    class="card-text"
                  >
                    More about the Student : {{ request.moreAboutStudent }}
                  </span>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <span
                    class="card-text"
                  >
                    Curriculum: {{ request.curriculum }}
                  </span>
                </div>
                <div class="col">
                  <span
                    class="card-text"
                  >
                    Length of lesson: {{ request.lengthOfLesson }}
                  </span>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <span
                    class="card-text"
                  >
                    Lesson Type: {{ request.lessonType }}
                  </span>
                </div>
                <div class="col">
                  <span
                    class="card-text"
                  >
                    Tutor gender: {{ request.tutorGender }}
                  </span>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <span
                    class="card-text"
                  >
                    Days of work: {{ request.days }}
                  </span>
                </div>
                <div class="col">
                  <span
                    class="card-text"
                  >
                    More About Student: {{ request.moreAboutStudent }}
                  </span>
                </div>
              </div>
            </div>
            <div class="popular-text mt-3 mb-4">
              <h3>Contact Details</h3>
              <div class="row">
                <div class="col">
                  <span
                    class="card-text"
                  >
                    {{ `Name: ${request.firstName} ${request.lastName}` }}
                  </span>
                </div>
                <div class="col">
                  <span
                    class="card-text"
                  >
                    Phone: {{ request.phone }}
                  </span>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <span
                    class="card-text"
                  >
                    Email {{ request.email }}
                  </span>
                </div>
                <div class="col">
                  <span
                    class="card-text"
                  >
                    Bustop: {{ request.nearestBustop }}
                  </span>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <span
                    class="card-text"
                  >
                    State: {{ request.states }}
                  </span>
                </div>
                <div class="col">
                  <span
                    class="card-text"
                  >
                    City: {{ request.city }}
                  </span>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <span
                    class="card-text"
                  >
                    Landmark: {{ request.nearestLandmark }}
                  </span>
                </div>
                <div class="col">
                  <span
                    class="card-text"
                  >
                    Address: {{ request.address }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
          <!-- Application for {{ fliteredrequests.title }} -->
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
  name: 'Requests',
  layout: 'admin',
  async asyncData ({ $axios }) {
    const { results } = await $axios.$get('admin/all-tutor-request')
    return { results }
  },
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
.added-btn{
  float: right;
  margin-right: 10px;
}

.request-title{
  color: #ff9b17;
  font-size: 27px;
}
</style>
