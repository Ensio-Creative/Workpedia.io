<template>
  <div>
    <FixedNav />
    <section class="bg-hero">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6 bg-texts">
            <h1>
              Find your dream job, career and tutor all in one place.
            </h1>
            <p>
              Workpedia allows you get everything in once place, freelancing job opportunity, tutors and easily manage all three with ease.
            </p>
            <div class="search">
              <input class="search-input" type="email" placeholder="Search Your Courses">
              <button class="search-btn">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  layout: 'tutor'
}
</script>

<style scoped>
.bg-hero{
  background-image: linear-gradient(to right, rgba(232, 232, 232, 1), rgba(209, 206, 206, 0)),
    url('~assets/img/pexels-julia-m-cameron-4143791@2x.png');
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
}
.search-input{
  padding: 10px;
  border: 1px solid #FF9B17;
}
.search-btn{
  padding: 10px;
  background-color: #FF9B17;
  border: #FF9B17;
}
</style>
