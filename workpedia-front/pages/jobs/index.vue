<template>
  <div>
    <section class="bg-hero container">
      <div class="row justify-content-around">
        <div class="col-12 col-md-12 col-lg-6 bg-texts order-6 order-sm-2">
          <h1>
            Find your dream job, career and tutor all in one place.
          </h1>
          <p>
            Workpedia allows you get everything in one place, freelancing job opportunity, tutors and easily manage all three with ease.
          </p>
          <!-- <div class="search">
            <input class="search-input" type="email" placeholder="Search Your Courses">
            <button class="search-btn">
              Search
            </button>
          </div> -->
        </div>
        <div class="col-12 col-md-12 col-lg-6 order-2 order-sm-6">
          <div class="image-rap">
            <img src="~/static/img/workpedia-jobs.svg">
          </div>
        </div>
      </div>
    </section>
    <section class="get-started">
      <div class="container">
        <h1 class="get-started-heading text-center mb-5">
          Get started
        </h1>
        <div class="row justify-content-between">
          <div class="col-12 col-md-6 get-started-column" />
          <div class="col-12 col-md-6 get-started-column">
            <article class="my-3">
              <h4 class="article-heading">
                For Jobseekers
              </h4>
              <ul>
                <li>Register and create your profile with all the requisite details including your CV.</li>
                <li>Search for jobs and apply once your profile becomes active for application.</li>
                <li>Workpedia and the employers will contact you for further tests and interviews if your profile and experiences matches the job requirements.</li>
              </ul>
            </article>
            <article class="my-5">
              <h4 class="article-heading">
                For Employers
              </h4>
              <ul>
                <li>Create your profile and post available jobs in your organization.</li>
                <li>You will receive CVs based on the posted job requirements.</li>
                <li>Vet and invite successful applicants for interview.</li>
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
    <!-- Popular -->
    <Popular
      class="mb-5"
    />
    <!-- News Letter -->
    <NewsLetter />
    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style scoped>
.bg-hero{
  /* background-image: url('~assets/img/Macbook.jpeg'); */
  background-color: #fff;
}
.image-rap {
  margin-top: 48px;
  height: 116%;
  overflow: hidden;
}

.bg-hero img{
  width: 623px;
  transform: scaleX(-1);
  margin-bottom: 20px;
}
.get-started{
  color: #fff;
  background-color: #251E8C;
  padding: 50px;
}
.get-started-column:nth-child(1) {
  background-image: url('~static/img/workpedia-jobs-get-started.svg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
@media screen and (max-width: 780px){
  .bg-texts {
    margin-top: 50px;
}
.bg-hero img {
  width: 307px;
  transform: scaleX(-1);
  margin-bottom: 20px;
}

.search-input {
  width: 293px;
}
.search-btn{
  margin-left: 0px;
}
}
</style>
