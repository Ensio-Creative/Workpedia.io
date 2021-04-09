<template>
  <div class="footer">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-12 col-md-4">
          <div
            class="footer-title"
            @click="showRoute"
          >
            <img src="~/assets/img/Workpedia logo transparent (White).png" alt="">
            <h1>Workpedia</h1>
          </div>
          <p class="footer-text">
            20 Okeke Street, Port Harcourt, Nigeria.
          </p>
          <p class="footer-text">
            +234-801-666-1320
          </p>
        </div>
        <div class="col-12 col-md-7">
          <div class="row justify-content-center">
            <div class="col-6 col-sm-6 col-md-6 col-lg-4">
              <div class="footer-nav">
                <NuxtLink
                  class="footer-nav-item"
                  to="/about-us"
                >
                  About us
                </NuxtLink>
                <NuxtLink
                  class="footer-nav-item"
                  to="/"
                >
                  FAQ
                </NuxtLink>
                <NuxtLink
                  class="footer-nav-item"
                  to="/"
                >
                  Privacy Policy
                </NuxtLink>
                <NuxtLink
                  class="footer-nav-item"
                  to="/"
                >
                  Terms of Service
                </NuxtLink>
                <NuxtLink
                  class="footer-nav-item"
                  to="/"
                >
                  Help and Support
                </NuxtLink>
              </div>
            </div>
            <div class="col-6 col-sm-6 col-md-6 col-lg-4">
              <div class="footer-nav">
                <NuxtLink
                  class="footer-nav-item"
                  to="/tutor"
                >
                  Tutor
                </NuxtLink>
                <NuxtLink
                  class="footer-nav-item"
                  to="/jobs"
                >
                  Jobs
                </NuxtLink>
                <NuxtLink
                  class="footer-nav-item"
                  to="/freelancing"
                >
                  Freelancing / Handymen
                </NuxtLink>
              </div>
            </div>
            <div class="col-12 col-sm-12 col-md-12 col-lg-4">
              <div class="footer-social">
                <a href="#">
                  <i class="fab fa-facebook-f" />
                </a>
                <a href="#">
                  <i class="fab fa-twitter" />
                </a>
                <a href="#">
                  <i class="fab fa-dribbble" />
                </a>
                <a href="#">
                  <i class="fab fa-linkedin-in" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="all-rights text-center">
        <p class="rights">
          &copy; {{ date.getFullYear() }} Workpedia. All rights reserved.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      date: new Date()
    }
  },
  methods: {
    showRoute () {
      console.log(this.$route.path)
    }
  }
}
</script>

<style scoped>
.footer{
  background-color: #251E8C;
  padding: 100px 0px 20px 0px;
  color: #fff;
}
.footer p{
  color: #fff;
}
.footer-title{
  display: flex;
}
.footer-title img{
  width: 85px;
}
.footer-title h1{
  padding-top: 10px;
  padding-left: 20px;
  font-size: 30px;
}
.footer-text {
  padding-top: 30px;
}
.footer-text:nth-child(3) {
  padding-top: 0px;
}
.footer-social{
  padding-top: 20px;
}
.footer-social a i{
  font-size: 18px;
  color: #fff;
  padding-right: 20px;
}

.footer-social a:hover {
  text-decoration: none;
  color: #fff;
}
.footer-nav a:hover{
 text-decoration: none;
}
.footer-nav-item a:hover{
  text-decoration: none;
}
.footer-nav-item{
  display: block;
  color: #fff;
  line-height: 2;
}
/* .all-rights{
  padding-top: 20px;
  padding-bottom: 30px;
} */
.rights {
  margin-top: 78px;
}
@media screen and (max-width: 780px) {
  .footer-title{
    display: block;
  }
  .footer-text {
  padding-top: 30px;
}
}
</style>
