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
        <div class="col-12 col-md-5 article-column">
          <article class="article">
            <div class="vision">
              <h3>Our Vision</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio veritatis aperiam obcaecati sed. Excepturi deleniti earum odit minus tenetur, cumque, aliquam qui quasi amet enim rerum nesciunt totam placeat praesentium?
              </p>
            </div>
            <div class="mission">
              <h3>Our Mission</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio veritatis aperiam obcaecati sed. Excepturi deleniti earum odit minus tenetur, cumque, aliquam qui quasi amet enim rerum nesciunt totam placeat praesentium?
              </p>
            </div>
          </article>
        </div>
        <div class="col-12 col-md-5 article-column" />
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
  background-image: url('~assets/img/pexels-photo-4497733.jpeg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 45px;
}
</style>
