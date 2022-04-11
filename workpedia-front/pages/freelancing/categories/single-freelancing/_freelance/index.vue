<template>
  <div>
    <section
      v-if="fliteredFreelance"
      class="categorie mt-5 mb-5"
    >
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
                  <p>NGN {{ fliteredFreelance.serviceCharge }}</p>
                </div>
                <div class="author-info">
                  <div
                    class="user-img"
                    :style="{backgroundImage: 'url('+ `http://localhost:8000/${fliteredFreelance.userId.imageUrl}` +')'}"
                  />
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
      v-if="fliteredFreelance"
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
          Get {{ `${fliteredFreelance.userId.firstName} ${fliteredFreelance.userId.lastName}` }}
        </h5>
      </template>
      <h5 class="my-4">
        Contact info
      </h5>
      <div class="contact-info">
        <!-- Freelancer img -->
        <div class="contact-detail">
          <div
            class="user-img"
            :style="{backgroundImage: 'url('+ `${envVarable}/${user.imageUrl}` +')'}"
          />
        </div>
        <div class="contact-detail">
          <!-- Freelancer name -->
          <h5><strong>{{ `${user.firstName} ${user.lastName}` }}</strong></h5>
          <!-- Freelancer Description -->
          <p>{{ `${user.state} ${user.city}` }}</p>
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
const vars = process.env.BASE_URL
export default {
  name: 'SingleFreelance',
  data () {
    return {
      routeUrl: this.$route.params.freelance,
      envVarables: vars,
      message: ''
    }
  },
  computed: {
    ...mapState('freelance', ['freelancing']),
    ...mapState('auth', ['user']),
    fliteredFreelance () {
      const result = this.freelancing.find(freelance => freelance._id === this.routeUrl)
      return result
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
.user-img {
  margin-top: 0px;
  padding: 35px;
  background-repeat: no-repeat;
  background-position: right;
  background-size: contain;
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
