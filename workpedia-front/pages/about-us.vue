<template>
  <div>
    <div class="about-background">
      <h1
        class="container text-white"
      >
        About Us
      </h1>
    </div>
    <main class="container main-container">
      <div class="row justify-content-between">
        <div class="col-8 col-md-5 article-column">
          <article class="article">
            <div class="vision">
              <h3>Our Vision</h3>
              <p>
                To be Africa’s Number 1 One-Stop Talent Solution Provider and Marketplace
              </p>
              <p>We understand the GAPS in the Job, Freelance and Handymen space:</p>
              <ul>
                <li>Lack of Trust</li>
                <li>Difficulty in Accessing Large Pool of Talents</li>
                <li>Poor Quality of Work</li>
                <li>Unfair Wages</li>
                <li>Safety  Security in Engaging Handymen and Freelancers</li>
              </ul>
            </div>
            <div class="mission mt-3">
              <h3>Our Mission</h3>
              <p>
                Workpedia is revolutionizing and redefining work in Africa; we are providing seamless and easy to use platform for households and organization to access large, vetted pool of quality, fairly priced and ready talents and in the process creating opportunities for African jobseekers, freelancers, handymen, tutors and other workers.
              </p>
            </div>
          </article>
        </div>
        <div class="col-8 col-md-5 article-column" />
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>
.about-background{
  background-color: #251E8C;
  padding: 102px;
  margin-top: 21px;
}
.about-background h1 {
  font-weight: bold;
}
.main-container{
  margin-bottom: 5rem;
  margin-top: 5rem;
}
.article-column {
  padding: 0px;
}
.article-column:nth-child(2) {
  background-image: url('~assets/img/workpedia-about.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 45px;
}
</style>
