<template>
  <div class="footer">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-12 col-md-3">
          <div
            class="footer-title"
            @click="showRoute"
          >
            <img src="~/assets/img/Workpedia logo transparent (White).png" alt="">
          </div>
          <p class="footer-text">
            African's one-stop tutor, jobs and freelance platform.
          </p>
        </div>
        <div class="col-12 col-md-8">
          <div class="row">
            <div class="col-6 col-sm-6 col-md-6 col-lg-4">
              <h4 class="footer-head">
                Company
              </h4>
              <div class="footer-nav">
                <NuxtLink
                  class="footer-nav-item"
                  to="/about-us"
                >
                  About us
                </NuxtLink>
                <NuxtLink
                  class="footer-nav-item"
                  to="/faq"
                >
                  FAQ
                </NuxtLink>
                <NuxtLink
                  class="footer-nav-item"
                  to="/contact"
                >
                  Contact
                </NuxtLink>
                <NuxtLink
                  class="footer-nav-item"
                  to="privacy"
                >
                  Privacy Policy
                </NuxtLink>
                <NuxtLink
                  class="footer-nav-item"
                  to="/"
                >
                  Terms of Service
                </NuxtLink>
                <!-- <NuxtLink
                  class="footer-nav-item"
                  to="/"
                >
                  Help and Support
                </NuxtLink> -->
              </div>
            </div>
            <div class="col-6 col-sm-6 col-md-6 col-lg-4">
              <h4 class="footer-head">
                Explore
              </h4>
              <div class="footer-nav">
                <NuxtLink
                  class="footer-nav-item"
                  to="/tutor"
                >
                  Hire a tutor
                </NuxtLink>
                <NuxtLink
                  class="footer-nav-item"
                  to="/jobs"
                >
                  Find a job
                </NuxtLink>
                <NuxtLink
                  class="footer-nav-item"
                  to="/freelancing"
                >
                  Connect with freelancer
                </NuxtLink>
              </div>
            </div>
            <div class="col-6 col-sm-6 col-md-6 col-lg-4">
              <h4 class="footer-head">
                Get in touch
              </h4>
              <p class="footer-email">
                info@workpedia.io
              </p>
              <p class="footer-phone">
                +234 901 601 6563
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr>
      <div class="all-rights">
        <p class="rights">
          &copy; {{ date.getFullYear() }} Workpedia - All rights reserved.
        </p>
        <div class="">
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
  background-color: var(--bg-dark-blue);
  padding: 100px 0px 20px 0px;
  color: #fff;
}
.footer p{
  color: #fff;
}
.footer-title{
  display: flex;
}
.footer-head {
  font-weight: bold;
  color: var(--bg-yellow) !important;
}
.footer-title img{
  width: 63px;
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
/* .footer-social{
  padding-top: 20px;
} */
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
hr {
  background: #fff;
  margin-top: 50px;
  margin-bottom: 45px;
}
.all-rights {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
/* .rights {
  margin-top: 78px;
} */
@media screen and (max-width: 780px) {
  .footer-title{
    display: block;
  }
  .footer-text {
  padding-top: 30px;
}
.all-rights {
    display: block;
    margin-bottom: 49px;
}
}
</style>
