<template>
  <div>
    <TheJobsHeader
      @sidenavToggle="displaySidenav = !displaySidenav"
    />
    <TheJobsSidenav
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
            <a class="nav-link mr-3" href="#">Design</a>
            <a class="nav-link mr-3" href="#">Web Dev</a>
            <a class="nav-link mr-3" href="#">Writing</a>
            <a class="nav-link mr-3" href="#">Marketing</a>
            <a class="nav-link mr-3" href="#">Accounting</a>
            <a class="nav-link mr-3" href="#">Business</a>
            <a class="nav-link mr-3" href="#">Business</a>
            <a class="nav-link mr-3" href="#">Customer Service</a>
          </div>
        </div>
      </div>
    </nav>
    <section class="categorie mt-5 mb-5">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-12 col-lg-8">
            <div class="row">
              <div class="col-12 col-md-12 col-lg-12 popular-column">
                <div class="popular-column-heading">
                  <i class="fas fa-suitcase" />
                  <h3>Electrical Engineer</h3>
                  <h5>Port Harcourt</h5>
                </div>
                <div class="popular-durations">
                  <span class="gray-background">
                    <h6>4 days ago</h6>
                  </span>
                  <span class="gray-background">
                    <h6>Full time</h6>
                  </span>
                  <span class="gray-background">
                    <h6>Min 2 Years</h6>
                  </span>
                  <NuxtLink to="/" class="btn-apply text-center">
                    Apply Now
                  </NuxtLink>
                </div>
                <div class="popular-text mt-3 mb-4">
                  <h3>Job description</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolor.
                  </p>
                </div>
              </div>
              <div class="col-12 col-md-12 col-lg-12 popular-column">
                <div class="popular-column-heading">
                  <i class="fas fa-suitcase" />
                  <h3>Electrical Engineer</h3>
                  <h5>Port Harcourt</h5>
                </div>
                <div class="popular-durations">
                  <span class="gray-background">
                    <h6>4 days ago</h6>
                  </span>
                  <span class="gray-background">
                    <h6>Full time</h6>
                  </span>
                  <span class="gray-background">
                    <h6>Min 2 Years</h6>
                  </span>
                  <NuxtLink to="/" class="btn-apply text-center">
                    Apply Now
                  </NuxtLink>
                </div>
                <div class="popular-text mt-3 mb-4">
                  <h3>Job description</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolor.
                  </p>
                </div>
              </div>
              <div class="col-12 col-md-12 col-lg-12 popular-column">
                <div class="popular-column-heading">
                  <i class="fas fa-suitcase" />
                  <h3>Electrical Engineer</h3>
                  <h5>Port Harcourt</h5>
                </div>
                <div class="popular-durations">
                  <span class="gray-background">
                    <h6>4 days ago</h6>
                  </span>
                  <span class="gray-background">
                    <h6>Full time</h6>
                  </span>
                  <span class="gray-background">
                    <h6>Min 2 Years</h6>
                  </span>
                  <NuxtLink to="/" class="btn-apply text-center">
                    Apply Now
                  </NuxtLink>
                </div>
                <div class="popular-text mt-3 mb-4">
                  <h3>Job description</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolor.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-12 col-lg-4">
            <div class="search-container">
              <label for="exampleFormControlInput1">Search for a job</label>
              <input type="email" class="form-control gray mb-2" placeholder="eg. mathematics">
              <b-form-select v-model="selected" :options="options" />
              <b-form-select v-model="selected" :options="options" size="sm" class="mt-3" />
              <button class="btn btn-primary form-control mt-2">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="what-student-say">
      <div class="container">
        <div class="title text-center">
          <h2>What Students Say</h2>
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
      displaySidenav: false,
      selected: null,
      options: [
        { value: null, text: 'Please select an option' },
        { value: 'a', text: 'This is First option' },
        { value: 'b', text: 'Selected Option' },
        { value: { C: '3PO' }, text: 'This is an option with object value' },
        { value: 'd', text: 'This one is disabled', disabled: true }
      ]
    }
  }
}
</script>

<style scoped>
.categories-nav{
  background-color: #0DB47B;
}
.categories-nav .active{
  color: #fff;
}
.categories-nav a{
  color: #fff;
}
.nav-link a:hover
.nav-link a:focus{
  color: #fff;
}
.btn-apply{
  background-color: #0DB47B;
  padding: 10px;
  border-radius: 8px;
  color: #fff;
  margin-left: 250px;
}

.btn-apply:hover{
  text-decoration: none;
}

.search-container{
  margin-top: 20px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 3px 7px 9px #00000029;
  border: 1px solid #7070706E;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
}
.what-student-say{
  margin-top: 180px;
  margin-bottom: 80px;
}
.round{
  background: #D8D8D8 0% 0% no-repeat padding-box;
  padding: 26px;
  width: 26px;
  height: 26px;
  border-radius: 72px;
}

.what-students-say-column{
  box-shadow: 3px 7px 9px #00000029;
  border: 1px solid #7070706E;
  border-radius: 8px;
  padding: 10px;
  margin-top: 20px;
  margin-right: 10px;
}
</style>
