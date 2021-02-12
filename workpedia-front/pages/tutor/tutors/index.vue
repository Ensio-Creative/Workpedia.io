<template>
  <div>
    <TheTutorHeader
      @sidenavToggle="displaySidenav = !displaySidenav"
    />
    <TheTutorSidenav
      :show="displaySidenav"
      @close="displaySidenav = false"
    />
    <!-- Categories Nav -->
    <nav class="navbar navbar-expand-lg categories-nav">
      <div class="container">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>
        <div
          id="navbarNavAltMarkup"
          class="collapse navbar-collapse"
        >
          <div class="navbar-nav">
            <a class="nav-link active" href="#">All Categories <span class="sr-only">(current)</span></a>
            <a class="nav-link mr-3" href="#">Mathematics</a>
            <a class="nav-link mr-3" href="#">English</a>
            <a class="nav-link mr-3" href="#">Sciences</a>
            <a class="nav-link mr-3" href="#">Arts</a>
            <a class="nav-link mr-3" href="#">Computer Sciences</a>
            <a class="nav-link mr-3" href="#">Business</a>
            <a class="nav-link mr-3" href="#">Religion</a>
            <a class="nav-link mr-3" href="#">Hobbies</a>
          </div>
        </div>
      </div>
    </nav>
    <section class="categorie mt-5 mb-5">
      <div class="container">
        <div class="row ">
          <div class="col-12 col-md-12 col-lg-9">
            <div class="row">
              <div class="col-12 col-md-3 private-tutor-column text-center mr-5">
                <div class="private-tutor-img-head" />
                <div class="private-tutor-text">
                  <h3>Biology</h3>
                </div>
                <div class="private-tutor-info">
                  <p>Femi Adesanya</p>
                  <p>Cell, Genetics</p>
                </div>
              </div>
              <div class="col-12 col-md-3 private-tutor-column text-center mr-5">
                <div class="private-tutor-img-head" />
                <div class="private-tutor-text">
                  <h3>Biology</h3>
                </div>
                <div class="private-tutor-info">
                  <p>Femi Adesanya</p>
                  <p>Cell, Genetics</p>
                </div>
              </div>
              <div class="col-12 col-md-3 private-tutor-column text-center mr-5">
                <div class="private-tutor-img-head" />
                <div class="private-tutor-text">
                  <h3>Biology</h3>
                </div>
                <div class="private-tutor-info">
                  <p>Femi Adesanya</p>
                  <p>Cell, Genetics</p>
                </div>
              </div>
              <div class="col-12 col-md-3 private-tutor-column text-center mr-5">
                <div class="private-tutor-img-head" />
                <div class="private-tutor-text">
                  <h3>Biology</h3>
                </div>
                <div class="private-tutor-info">
                  <p>Femi Adesanya</p>
                  <p>Cell, Genetics</p>
                </div>
              </div>
              <div class="col-12 col-md-3 private-tutor-column text-center mr-5">
                <div class="private-tutor-img-head" />
                <div class="private-tutor-text">
                  <h3>Biology</h3>
                </div>
                <div class="private-tutor-info">
                  <p>Femi Adesanya</p>
                  <p>Cell, Genetics</p>
                </div>
              </div>
              <div class="col-12 col-md-3 private-tutor-column text-center mr-5">
                <div class="private-tutor-img-head" />
                <div class="private-tutor-text">
                  <h3>Biology</h3>
                </div>
                <div class="private-tutor-info">
                  <p>Femi Adesanya</p>
                  <p>Cell, Genetics</p>
                </div>
              </div>
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

    <section class="what-student-say">
      <div class="container">
        <div class="title text-center">
          <h2>Testimonials</h2>
        </div>
        <div class="text text-center">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
        </div>
        <div class="row justify-content-center">
          <div class="col-12 col-md-6 col-lg-3 what-students-say-column">
            <h2><i class="fas fa-quote-left" /></h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            </p>
            <div class="users-info">
              <div class="rounded" />
              <div class="users-name">
                <p>Great Adams</p>
                <p>Computer sicence</p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-3 what-students-say-column">
            <h2><i class="fas fa-quote-left" /></h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            </p>
            <div class="users-info">
              <div class="rounded" />
              <div class="users-name">
                <p>Great Adams</p>
                <p>Computer sicence</p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-3 what-students-say-column">
            <h2><i class="fas fa-quote-left" /></h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            </p>
            <div class="users-info">
              <div class="rounded" />
              <div class="users-name">
                <p>Great Adams</p>
                <p>Computer sicence</p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-3 what-students-say-column">
            <h2><i class="fas fa-quote-left" /></h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            </p>
            <div class="users-info">
              <div class="rounded" />
              <div class="users-name">
                <p>Great Adams</p>
                <p>Computer sicence</p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-3 what-students-say-column">
            <h2><i class="fas fa-quote-left" /></h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            </p>
            <div class="users-info">
              <div class="rounded" />
              <div class="users-name">
                <p>Great Adams</p>
                <p>Computer sicence</p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-3 what-students-say-column">
            <h2><i class="fas fa-quote-left" /></h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            </p>
            <div class="users-info">
              <div class="rounded" />
              <div class="users-name">
                <p>Great Adams</p>
                <p>Computer sicence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- News Letter -->
    <NewsLetter />
    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>
export default {
  data () {
    return {
      displaySidenav: false
    }
  }
}
</script>

<style scoped>
.categories-nav{
  background-color: #fff;
}
.categories-nav a{
  color: rgba(0, 0, 0, 0.5);
}
.categories-nav .active{
  color: #FF9B17;
}
.nav-link a:hover
.nav-link a:focus{
  color: #FF9B17;
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
