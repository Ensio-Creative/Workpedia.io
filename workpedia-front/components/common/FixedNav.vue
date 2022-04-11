<template>
  <div class="fixed">
    <div class="nav-fixed">
      <NuxtLink
        class="nav-fixed-item tutor"
        to="/tutor"
      >
        <img src="~/static/img/workpedia-vetted-tutors.svg" alt="">
      </NuxtLink>
      <NuxtLink
        class="nav-fixed-item jobs"
        to="/jobs"
      >
        <img src="~/static/img/workpedia-jobs-career.svg" alt="">
      </NuxtLink>
      <NuxtLink
        class="nav-fixed-item freelance"
        to="/freelancing"
      >
        <img src="~/static/img/workpedia-freelance-marketplace.svg" alt="">
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FixedNav'
}
</script>

<style scoped>
.fixed{
  position: fixed;
  left: 20px;
  bottom: 250px;
  z-index: 10000;
}
.nav-fixed{
  padding: 20px 10px;
  background-color: #fff;
  box-shadow: 0px 0px 5px rgb(0 0 0 / 16%);
  border-radius: 10px;
}
.nav-fixed-item{
  display: block;
  margin-top: 10px;
  border-radius: 100px;
  padding: 10px;
  font-size: 15px;
  background-color: var(--bg-dark-blue);
}
.nav-fixed-item img {
  width: 23px;
}
.nav-fixed-item:nth-child(2){
  display: block;
  margin-top: 10px;
  border-radius: 100px;
  padding: 10px;
  font-size: 15px;
  background-color: var(--bg-yellow);
}
.nav-fixed-item:nth-child(3){
  display: block;
  margin-top: 10px;
  border-radius: 100px;
  padding: 10px;
  font-size: 15px;
  background-color: var(--bg-light-blue);
}

.nav-fixed-item a{
  text-decoration: none;
  color: none;
}
@media screen and (max-width: 769px){
  .fixed{
    visibility: visible;
    position: fixed;
    left: 0px;
    bottom: 0px;
    z-index: 10000;
    width: 100%;
  }
  .nav-fixed {
    box-shadow: 0px 0px 5px transparent;
    background: transparent;
    border-radius: 0px;
    padding: 7px 10px;
    display: flex;
    text-align: center;
    color: #fff;
    justify-content: space-evenly;
}
.nav-fixed-item:nth-child(2) {
  padding-left: 13px;
  padding-right: 13px;
}
  .nav-fixed-item:nth-child(3) {
    padding-left: 13px;
    padding-right: 13px;
  }
}
</style>
