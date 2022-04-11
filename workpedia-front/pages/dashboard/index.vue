<template>
  <div class="container">
    <TopNavInfo
      dash-title="Dashboard"
    />
    <h2 class="welcom-text">
      Welcome {{ fullName }}!
    </h2>
    <div class="row row-cols-1 row-cols-md-2 g-4">
      <div
        class="col"
      >
        <div class="card info-containers">
          <div class="card-body">
            <h5 class="card-title">
              You joined us {{ $moment(user.createdAt).fromNow() }} we are glad your here!!!
            </h5>
          </div>
        </div>
        <client-only>
          <div class="get-verified mt-3">
            <NuxtLink
              v-if="!user.isVerified"
              to="/auth/verify"
            >
              Get verified
            </NuxtLink>
            <a
              v-if="!user.isVerified"
              href="#"
              @click="resendCodes"
            >
              Resend code?
            </a>
          </div>
        </client-only>
      </div>
    </div>
    <FooterDash
      class="mt-5"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import FooterDash from '~/components/dashboard/FooterDash.vue'
import TopNavInfo from '~/components/Navigation/dashboard/TopNavInfo.vue'
export default {
  name: 'Dashboard',
  components: { FooterDash, TopNavInfo },
  layout: 'dashboard',
  data () {
    return {
      activeTab: ''
    }
  },
  computed: {
    ...mapState('auth', ['user']),
    fullName () {
      const userName = `${this.user.firstName} ${this.user.lastName}`
      return userName
    }
  },
  methods: {
    ...mapActions('auth', ['resendCode']),
    resendCodes () {
      this.resendCode()
    }
  }
}
</script>

<style scoped>
.container, .container-sm, .container-md, .container-lg {
  max-width: 1050px;
}
.welcom-text{
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 22px;
}
.info-containers{
  background-color: #251E8C;
  color: #fff;
  height: 180px;
}

.info-containers h3 {
  padding: 20px;
}
.info-containers2 {
  background-color: #0DB47B;
  color: #fff;
  height: 180px;
}

.info-containers3 {
  background-color: #2B7DC4;
  color: #fff;
  height: 180px;
}
.info-containers:nth-child(4) {
  background-color: #0DB47B;
}
.welcome-message{
  padding-left: 40px;
}
.top-container h2{
  color: #fff;
  padding-top: 60px;
}
.activity-row{
  display: flex;
}
.activity-column{
  background-color: #FF9B17;
  height: 200px;
  width: 100%;
  text-align: left;
  color: #fff;
  margin: 5px;
  border-radius: 15px;
}
.activity-img{
  background-image: url('~assets/img/pexels-photo-4497733.jpeg');
  padding: 70px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.activity-column h3{
  padding-top: 10px;
  padding-left: 40px;
}
.activity-column:nth-child(2){
  background-color: #0DB47B;;
}

.activity-column:nth-child(3){
  background-color: #2B7DC4;
}

.card-text {
  margin-bottom: 0;
  font-size: 23px;
  font-weight: bold;
}

.get-verified {
  display: flex;
  justify-content: space-evenly;
  width: 281px;
}
.get-verified a {
  padding: 10px;
  border: 1px solid;
}
.get-verified a:hover {
  padding: 10px;
  border: 1px solid;
  color: var(--bg-dark-blue);
}
</style>
