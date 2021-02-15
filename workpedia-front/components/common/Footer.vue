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
            Lorem ipsum dolor sit amet,Stet clita kasd gubergren, no sea takimata sanctus est is the is the magna aliquyam.
          </p>
        </div>
        <div class="col-12 col-md-7">
          <div class="row justify-content-center">
            <div class="col-6 col-sm-6 col-md-6 col-lg-4">
              <div class="footer-nav">
                <NuxtLink
                  class="footer-nav-item"
                  to="/"
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
                  to="/"
                >
                  Tutor
                </NuxtLink>
                <NuxtLink
                  class="footer-nav-item"
                  to="/"
                >
                  Jobs
                </NuxtLink>
                <NuxtLink
                  class="footer-nav-item"
                  to="/"
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
          workpedia.io All Rights Reserved
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
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
.footer-nav-title{
  padding-top: 15px;
}
.footer-nav-item{
  display: block;
  color: #fff;
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
