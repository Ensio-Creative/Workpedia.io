<template>
  <div>
    <section class="bg-hero container">
      <div class="row">
        <div class="col-12 col-md-6 bg-texts">
          <h1>
            Find your dream job, career and tutor all in one place.
          </h1>
          <p>
            Workpedia allows you get everything in once place, freelancing job opportunity, tutors and easily manage all three with ease.
          </p>
          <div class="page-buttons">
            <NuxtLink class="freelance mr-2" to="/freelancing">
              FREELANCING & HANDY MEN
            </NuxtLink>
            <NuxtLink class="jobs mr-2" to="/jobs">
              JOBS / CAREER
            </NuxtLink>
            <NuxtLink class="tutor mr-2" to="/tutor">
              TUTOR / LEARNING
            </NuxtLink>
          </div>
        </div>
        <div class="col-12 col-md-4 text-center">
          <div class="image-rap">
            <!-- <img src="~/assets/img/avatar_d@2x.png"> -->
          </div>
        </div>
      </div>
    </section>

    <section class="walk-you-through">
      <div class="heading">
        <h1>Let's walk you through</h1>
        <div class="heading-line" />
      </div>
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-12 col-md-3 walk-column">
            <div class="img-head">
              <img src="~/assets/img/avatar_d@2x.png">
            </div>
            <div class="column-title">
              <h3>Freelancing</h3>
            </div>
            <div class="column-text">
              <p>Lorem ipsum dolor sit amet,Stet clita kasd lorem ipsum dolor sit amet. sed diam eirmod tempor dolore.</p>
            </div>
            <div class="know-more">
              <NuxtLink class="know-btn" to="/">
                Know more <img src="~/assets/img/arrow.svg">
              </NuxtLink>
            </div>
          </div>
          <div class="col-12 col-md-3 walk-column">
            <div class="img-head">
              <img src="~/assets/img/avatar_d@2x.png">
            </div>
            <div class="column-title">
              <h3>Jobs</h3>
            </div>
            <div class="column-text">
              <p>Lorem ipsum dolor sit amet,Stet clita kasd lorem ipsum dolor sit amet. sed diam eirmod tempor dolore.</p>
            </div>
            <div class="know-more">
              <NuxtLink class="know-btn" to="/">
                Know more <img src="~/assets/img/arrow.svg">
              </NuxtLink>
            </div>
          </div>
          <div class="col-12 col-md-3 walk-column">
            <div class="img-head">
              <img src="~/assets/img/avatar_d@2x.png">
            </div>
            <div class="column-title">
              <h3>Private Tutor</h3>
            </div>
            <div class="column-text">
              <p>Lorem ipsum dolor sit amet,Stet clita kasd lorem ipsum dolor sit amet. sed diam eirmod tempor dolore.</p>
            </div>
            <div class="know-more">
              <NuxtLink class="know-btn" to="/">
                Know more <img src="~/assets/img/arrow.svg">
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="freelancing-gigs container">
      <div class="freelance-heading">
        <h1>Get your Freelancing gigs</h1>
        <div class="heading-line" />
      </div>
      <div class="row justify-content-between">
        <div class="col-12 col-md-3 freelance-column text-center">
          <div class="freelance-img-head" />
          <div class="freelance-text">
            <h3>Website Design</h3>
          </div>
          <div class="freelance-amount">
            <p>$450</p>
          </div>
        </div>
        <div class="col-12 col-md-3 freelance-column text-center">
          <div class="freelance-img-head" />
          <div class="freelance-text">
            <h3>Website Design</h3>
          </div>
          <div class="freelance-amount">
            <p>$450</p>
          </div>
        </div>
        <div class="col-12 col-md-3 freelance-column text-center">
          <div class="freelance-img-head" />
          <div class="freelance-text">
            <h3>Website Design</h3>
          </div>
          <div class="freelance-amount">
            <p>$450</p>
          </div>
        </div>
      </div>
      <div class="row justify-content-between mt-3">
        <div class="col-12 col-md-3 freelance-column text-center">
          <div class="freelance-img-head">
            <!-- <img src="~/assets/img/avatar_d@2x.png"> -->
          </div>
          <div class="freelance-text">
            <h3>Website Design</h3>
          </div>
          <div class="freelance-amount">
            <p>$450</p>
          </div>
        </div>
        <div class="col-12 col-md-3 freelance-column text-center">
          <div class="freelance-img-head">
            <!-- <img src="~/assets/img/avatar_d@2x.png"> -->
          </div>
          <div class="freelance-text">
            <h3>Website Design</h3>
          </div>
          <div class="freelance-amount">
            <p>$450</p>
          </div>
        </div>
        <div class="col-12 col-md-3 freelance-column text-center">
          <div class="freelance-img-head">
            <!-- <img src="~/assets/img/avatar_d@2x.png"> -->
          </div>
          <div class="freelance-text">
            <h3>Website Design</h3>
          </div>
          <div class="freelance-amount">
            <p>$450</p>
          </div>
        </div>
      </div>
    </section>

    <section class="popular-jobs container">
      <div class="freelance-heading">
        <h1>Our Popular Jobs</h1>
        <div class="heading-line" />
      </div>
      <div class="row justify-content-around">
        <div class="col-12 col-md-4 popular-column">
            <div class="popular-column-heading">
              <i class="fas fa-suitcase" />
              <h3>Electrical Engineer</h3>
              <h5>Port Harcourt</h5>
            </div>
            <div class="popular-text">
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolor.
              </p>
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
            </div>
            <div class="popular-button text-center">
              <NuxtLink to="/">
                Apply Now
              </NuxtLink>
            </div>
        </div>
        <div class="col-12 col-md-4 popular-column">
            <div class="popular-column-heading">
              <i class="fas fa-suitcase" />
              <h3>Electrical Engineer</h3>
              <h5>Port Harcourt</h5>
            </div>
            <div class="popular-text">
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolor.
              </p>
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
            </div>
            <div class="popular-button text-center">
              <NuxtLink to="/">
                Apply Now
              </NuxtLink>
            </div>
        </div>
        <div class="col-12 col-md-4 popular-column">
            <div class="popular-column-heading">
              <i class="fas fa-suitcase" />
              <h3>Electrical Engineer</h3>
              <h5>Port Harcourt</h5>
            </div>
            <div class="popular-text">
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolor.
              </p>
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
            </div>
            <div class="popular-button text-center">
              <NuxtLink to="/">
                Apply Now
              </NuxtLink>
            </div>
        </div>
      </div>
      <div class="row justify-content-around mt-5">
        <div class="col-12 col-md-4 popular-column">
            <div class="popular-column-heading">
              <i class="fas fa-suitcase" />
              <h3>Electrical Engineer</h3>
              <h5>Port Harcourt</h5>
            </div>
            <div class="popular-text">
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolor.
              </p>
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
            </div>
            <div class="popular-button text-center">
              <NuxtLink to="/">
                Apply Now
              </NuxtLink>
            </div>
        </div>
        <div class="col-12 col-md-4 popular-column">
            <div class="popular-column-heading">
              <i class="fas fa-suitcase" />
              <h3>Electrical Engineer</h3>
              <h5>Port Harcourt</h5>
            </div>
            <div class="popular-text">
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolor.
              </p>
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
            </div>
            <div class="popular-button text-center">
              <NuxtLink to="/">
                Apply Now
              </NuxtLink>
            </div>
        </div>
        <div class="col-12 col-md-4 popular-column">
            <div class="popular-column-heading">
              <i class="fas fa-suitcase" />
              <h3>Electrical Engineer</h3>
              <h5>Port Harcourt</h5>
            </div>
            <div class="popular-text">
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolor.
              </p>
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
            </div>
            <div class="popular-button text-center">
              <NuxtLink to="/">
                Apply Now
              </NuxtLink>
            </div>
        </div>
      </div>
    </section>

    <section class="container private-tutor">
      <div class="freelance-heading">
        <h1>Get your private tutor/ E-learning</h1>
        <div class="heading-line" />
      </div>
      <div class="row justify-content-between">
        <div class="col-12 col-md-3 private-tutor-column text-center">
          <div class="private-tutor-img-head" />
          <div class="private-tutor-text">
            <h3>Biology</h3>
          </div>
          <div class="private-tutor-info">
            <p>Femi Adesanya</p>
            <p>Cell, Genetics</p>
          </div>
        </div>
        <div class="col-12 col-md-3 private-tutor-column text-center">
          <div class="private-tutor-img-head" />
          <div class="private-tutor-text">
            <h3>Mathematics</h3>
          </div>
          <div class="private-tutor-info">
            <p>Great John</p>
            <p>Algebra, Geometry, Surds</p>
          </div>
        </div>
        <div class="col-12 col-md-3 private-tutor-column text-center">
          <div class="private-tutor-img-head" />
          <div class="private-tutor-text">
            <h3>Mathematics</h3>
          </div>
          <div class="private-tutor-info">
            <p>Great John</p>
            <p>Algebra, Geometry, Surds</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style>
</style>
