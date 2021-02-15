<template>
  <div class="container-fluid auth-container">
    <div class="row justify-content-center">
      <div class="col-12 col-lg-8">
        <div class="row inner-auth-row">
          <div class="col-6 col-lg-6 auth-column" />
          <div class="col-10 col-lg-6 auth-column">
            <SignUp
              v-if="!ownAccount"
              @changeComponent="ownAccount = true"
            />
            <LogIn
              v-if="ownAccount"
              @changeComponent="ownAccount = false"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'auth',
  name: 'Auth',
  data () {
    return {
      ownAccount: false
    }
  }
}
</script>

<style scoped>
.inner-auth-row{
  border-radius: 20px;
  margin-top: 40px;
}
.auth-container{
  background-image: url('~assets/img/bg_forall.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
}
.auth-column{
  background-image: url('~assets/img/pexels-photo-4497733.jpeg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 45px;
      border-radius: 20px 0px 0px 20px;
}
.auth-column:nth-child(2){
  background: #fff;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 0px 20px 20px 0px;
}

@media screen and (max-width: 780px) {
  .auth-column{
  display: none;
  background-image: url('~assets/img/pexels-photo-4497733.jpeg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 45px;
      border-radius: 20px 0px 0px 20px;
}
.auth-column:nth-child(2){
  margin: auto;
  display: block;
  background: #fff;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 20px 20px 20px 20px;
}
}

</style>
