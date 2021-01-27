<template>
  <div class="fixed">
    <div class="nav-fixed">
      <NuxtLink
        class="nav-fixed-item tutor"
        to="/tutor"
      >
        <i class="fas fa-chalkboard-teacher" />
      </NuxtLink>
      <NuxtLink
        class="nav-fixed-item jobs"
        to="/jobs"
      >
        <i class="fas fa-suitcase" />
      </NuxtLink>
      <NuxtLink
        class="nav-fixed-item freelance"
        to="/freelancing"
      >
        <i class="fas fa-search" />
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
}
.nav-fixed{
  padding: 20px 10px;
  background-color: #fff;
  box-shadow: 0px 28px 21px #00000029;
  border-radius: 10px;
}
.nav-fixed-item{
  display: block;
  margin-top: 10px;
  border-radius: 100px;
  padding: 10px;
  font-size: 15px;
}

  .nav-fixed-item:nth-child(1) {
    background: #ff9b17 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #f5c01e26;
    color: #000;
  }
.nav-fixed-item:nth-child(2) {
  box-shadow: 0px 3px 6px #f5c01e26;
  background-color: #0db47b;
  color: #fff;
}
  .nav-fixed-item:nth-child(3) {
    background-color: #2b7dc4;
    color: #fff;
  }

.nav-fixed-item a{
  text-decoration: none;
  color: none;
}
@media screen and (max-width: 780px){
  .fixed{
    visibility: hidden;
  }
}
</style>
