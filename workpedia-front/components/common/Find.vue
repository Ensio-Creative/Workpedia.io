<template>
  <div>
    <section class="find-private-jobs">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6 mb-5">
            <div class="workpedia-text-div">
              <p class="workpedia-text">
                workpedia
              </p>
            </div>
            <div class="find-private-title">
              <h3>{{ privateTitle }}</h3>
            </div>
            <div class="find-private-texts">
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. . Stet clita kasd gubergren,
                no sea takimata sanctus est
              </p>
              <p>
                Lorem ipsum dolor sit amet. Lorem
                ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
                rebum. Stet clita kasd gubergren, no sea takimata sanctus .
              </p>
            </div>
            <NuxtLink
              class="find-private-button"
              to="/"
            >
              Search
            </NuxtLink>
          </div>
          <div class="col-12 col-md-6 find-private-column">
            <img src="~assets/img/pexels-roman-odintsov-4925916@2x.png" alt="">
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Find',
  props: {
    privateTitle: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.find-private-tutors{
  background-color: #F1F1FF;
  padding: 100px 0px;
}
.workpedia-text-div{
  background-color: #d9eaf2;
  padding: 0px;
  width: 105px;
  margin-top: 40px;
}
.workpedia-text{
  color: #0DB47B;
  padding: 11px 11px;
  font-size: 18px;
}
.find-private-title{
  padding-top: 30px;
}
.find-private-column img{
  width: 518px;
  transform: scaleX(-1);
}
.find-private-text{
  padding-top: 40px;
  padding-bottom: 54px;
}
.find-private-button{
  color: #fff;
  background-color: #0DB47B;
  padding: 15px 42px;
  margin-top: 30px;
}

.find-private-button:hover{
  text-decoration: none;
}
@media screen and (max-width: 780px){
.find-private-column img {
  width: 305px;
  transform: scaleX(-1);
}
}
</style>
