<template>
  <div>
    <!-- Categories Nav -->
    <nav class="navbar navbar-expand-lg categories-nav">
      <div class="container text-center">
        <button
          class="navbar-toggler categories-btn"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <!-- <i class="fas fa-bars" /> -->
          <p>Categories</p>
        </button>
        <div
          id="navbarNav"
          class="collapse navbar-collapse"
        >
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">All Categories</a>
            </li>
            <li class="nav-item">
              <a class="nav-link mr-3" href="#">Mathematics</a>
            </li>
            <li class="nav-item">
              <a class="nav-link mr-3" href="#">English</a>
            </li>
            <li class="nav-item">
              <a class="nav-link mr-3" href="#">Sciences</a>
            </li>
            <li class="nav-item">
              <a class="nav-link mr-3" href="#">Arts</a>
            </li>
            <li class="nav-item">
              <a class="nav-link mr-3" href="#">Computer Sciences</a>
            </li>
            <li class="nav-item">
              <a class="nav-link mr-3" href="#">Business</a>
            </li>
            <li class="nav-item">
              <a class="nav-link mr-3" href="#">Religion</a>
            </li>
            <li class="nav-item">
              <a class="nav-link mr-3" href="#">Hobbies</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <section class="categorie mt-5 mb-5">
      <div class="container">
        <div class="row ">
          <div class="col-12 col-md-12 col-lg-9">
            <div class="row justify-content-center">
              <NuxtLink
                v-for="tutor in tutors"
                :key="tutor.id"
                :to="`/tutor/categories/${tutor.id}`"
                class="col-12 col-md-3 private-tutor-column text-center"
              >
                <div
                  class="private-tutor-img-head"
                />
                <div class="private-tutor-text">
                  <h3>{{ tutor.tutorTitle }}</h3>
                </div>
                <div class="private-tutor-info">
                  <p>{{ tutor.author }}</p>
                  <p>{{ tutor.courseCategory }}</p>
                </div>
              </NuxtLink>
            </div>
          </div>
          <div class="col-12 col-md-12 col-lg-3">
            <div class="search-container">
              <label for="exampleFormControlInput1">Search Tutors</label>
              <input type="email" class="form-control gray" placeholder="eg. mathematics">
            </div>
            <div class="tables-container">
              <table class="table">
                <thead class="thead-light">
                  <tr>
                    <th scope="col">
                      Trending
                    </th>
                    <th scope="col">
                      Courses
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                      Mathematics:
                    </th>
                    <td>Algebra</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      Music:
                    </th>
                    <td>Violin</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      Computer:
                    </th>
                    <td>Data Science</td>
                  </tr>
                </tbody>
              </table>
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
// import { mapState } from 'Vuex'
export default {
  name: 'TutorsCategories',
  layout: 'tutors',
  data () {
    return {
      tutors: []
    }
  }
  // computed: {
  //   ...mapState({' tutor' }),
  //   tutorsFected () {
  //     return this.tutor
  //   }
  // }
}
</script>

<style scoped>
.categories-nav{
  background-color: #fff;
}
.categories-nav a{
  color: rgba(0, 0, 0, 0.5);
}
.categories-nav{
  color: #FF9B17;
}
.categories-nav a:hover{
  color: #FF9B17;
}
.categories-nav a:focus{
  color: #FF9B17;
}
.categories-btn{
  margin: auto;
}
.private-tutor-column{
  border-radius: 10px;
  margin-top: 20px;
}
.search-container{
  margin-top: 20px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 5px #00000029;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
}
</style>
