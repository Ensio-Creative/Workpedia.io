<template>
  <div>
    <!-- Different categories -->
    <section class="categorie mt-5 mb-5">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-12 col-lg-12">
            <div class="row justify-content-center">
              <div
                v-for="works in freelancing"
                :key="works._id"
                class="col-12 col-md-3 col-lg-3 popular-column"
              >
                <FreelanceList
                  :id="works._id"
                  :title="works.title"
                  :amount="works.amount"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Testimony />
    <!-- News Letter -->
    <NewsLetter />
    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      displaySidenav: false
    }
  },
  computed: {
    ...mapState('freelance', ['freelancing'])
  }
}
</script>

<style scoped>
.categories-nav{
  background-color: #fff;
}
.categories-nav .active{
  color: #2B7DC4;
}
.categories-nav a{
  color: rgba(0, 0, 0, 0.5);
}
.nav-link a:hover
.nav-link a:focus{
  color: #fff;
}
.popular-column {
  margin-right: 26px !important;
  margin-top: 10px;
}
</style>
