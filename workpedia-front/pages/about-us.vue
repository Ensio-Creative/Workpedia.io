<template>
  <div>
    <div class="heading text-center">
      <h2 class="heading-title">
        We're Workpedia
      </h2>
      <p class="heading-text">
        We're your perfect gateway to hire a tutor, take a career next step and get connected to freelancers.
      </p>
    </div>
    <main class="container main-container">
      <div class="images-container">
        <div class="img-column" />
        <div class="img-column" />
        <div class="img-column" />
      </div>
      <div class="row justify-content-between">
        <div class="col-12 col-md-12 article-column">
          <article class="article">
            <div class="vision">
              <div class="title">
                <h3>Our Vision</h3>
              </div>
              <div class="content">
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
            </div>
            <div class="vision">
              <div class="title">
                <h3>Our Mission</h3>
              </div>
              <div class="content">
                <p>
                  Workpedia is revolutionizing and redefining work in Africa; we are providing seamless and easy to use platform for households and organization to access large, vetted pool of quality, fairly priced and ready talents and in the process creating opportunities for African jobseekers, freelancers, handymen, tutors and other workers.
                </p>
              </div>
            </div>
          </article>
        </div>
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
.heading{
  margin-top: 80px;
  margin-bottom: 0px;
}
.heading-title {
  color: #251E8C;
  font-weight: bold;
  font-size: 56px;
}
.heading-text{
  width: 481px;
  margin: auto;
}
.main-container{
  margin-bottom: 5rem;
  margin-top: 5rem;
}
.article-column {
  padding: 0px;
}
.images-container {
  display: flex;
  justify-content: space-between;
  margin-bottom: 100px;
}
.img-column{
  background-image: url('~static/img/workpedia-jobs-about.svg');
  padding: 165px;
  display: flex;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 20px;
}
.img-column:nth-child(2) {
  background-image: url('~static/img/workpedia-tutor-about.svg');
  padding: 210px;
  background-position: center;
}
.img-column:nth-child(3) {
  background-image: url('~static/img/workpedia-freelance-about.svg');
}
.vision{
  display: flex;
  justify-content: space-evenly;
}
.vision:nth-child(2) {
  margin-top: 5rem;
}
.title {
  width: 30px;
  color: #251E8C;
}
.title h3 {
  font-size: 40px;
  font-weight: bold;
}
.content {
  width: 540px;
}
@media screen and (max-width: 769px) {
  .heading {
    margin-top: 30px;
}
  .heading-text{
    width: 100%;
    margin: auto;
    padding: 8px;
  }
  .main-container {
    margin-bottom: 2rem;
    margin-top: 1rem;
}
  .images-container {
      margin-bottom: 16px;
  }
.img-column {
  padding: 63px;
}
.img-column:nth-child(2){
  padding: 67px;
}

.vision {
  display: block;
  padding: 20px;
}
.vision:nth-child(2) {
  margin-top: 2rem !important;
}
.content {
  width: 100%;
}
}
</style>
