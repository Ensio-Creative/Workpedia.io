<template>
  <div>
    <section class="categorie mt-5 mb-5">
      <div class="container">
        <div class="row justify-content-center">
          <div
            class="col-8 "
          >
            <div class="card h-100">
              <img src="~/assets/img/Kentwood_Phone_03B-1280x850.jpg" alt="">
              <div class="card-body">
                <div class="private-tutor-text">
                  <div class="freelance-text">
                    <h3>{{ fliteredFreelance.title }}</h3>
                  </div>
                </div>
                <div class="freelance-amount">
                  <p>${{ fliteredFreelance.amount }}</p>
                </div>
                <div class="freelance-description">
                  <p>{{ fliteredFreelance.description }}</p>
                </div>
                <div class="author-info">
                  <img class="rounded" src="~assets/img/avatar_c@2x.png" alt="">
                  <div class="author-description">
                    {{ fliteredFreelance.authorDescription }}
                  </div>
                </div>
                <button
                  v-b-modal.modal-lg
                  class="btn btn-outline-primary mt-3"
                >
                  Message {{ fliteredFreelance.author }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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
          Get {{ fliteredFreelance.author }}
        </h5>
      </template>
      <h5 class="my-4">
        Contact info
      </h5>
      <div class="contact-info">
        <!-- Freelancer img -->
        <div class="contact-detail">
          <img src="~/assets/img/avatar@2x.png" alt="">
        </div>
        <div class="contact-detail">
          <!-- Freelancer name -->
          <!-- <h5><strong>{{ `${user.firstName} ${user.lastName}` }}</strong></h5> -->
          <h5><strong>Mark David</strong></h5>
          <!-- Freelancer Description -->
          <!-- <p>{{ fliteredFreelance.authorLocation }}</p> -->
          <p>Rivers State, Port Harcourt</p>
          <!-- Freelancer location -->
          <small class="gray">Nigeria</small>
        </div>
      </div>
      <AppTextarea
        v-model.trim="message"
        type="text"
        placeholder="Add message"
        required
      >
        Add message
      </AppTextarea>
      <template #modal-footer="{ cancel }">
        <!-- Emulate built in modal footer ok and cancel button actions -->
        <b-button size="sm" variant="btn-apply" @click="cancel()">
          Cancel
        </b-button>
        <b-button size="sm" variant="success" @click="onSubmit">
          Send
        </b-button>
      </template>
    </b-modal>
    <!-- <Testimony /> -->
    <!-- News Letter -->
    <NewsLetter />
    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'SingleFreelance',
  data () {
    return {
      routeUrl: this.$route.params.freelance,
      message: ''
    }
  },
  computed: {
    ...mapState('freelance', ['freelancing']),
    ...mapState('auth', ['user']),
    fliteredFreelance () {
      const result = this.freelancing.filter(freelance => freelance._id === this.routeUrl)
      return result[0]
    },
    address () {
      const address = this.user.address
      return address
    }
  },
  methods: {
    onSubmit () {
      if (!this.user.freelanceHire) {
        this.$router.push('/freelancing/subscribe')
        return
      }
      this.$toast.success('Message sent')
    }
  }
}
</script>

<style scoped>
.author-info {
  display: flex;
}

.author-info img {
  width: 85px;
}
.author-description {
  margin-top: 15px;
  margin-left: 20px;
}
.contact-info {
  display: flex;
}

.contact-detail img {
  width: 70px;
}

.contact-detail:nth-child(2){
  margin-left: 30px;
}
</style>
