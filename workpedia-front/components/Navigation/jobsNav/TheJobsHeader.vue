<template>
  <div class="header-container">
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
      <div class="container">
        <NuxtLink class="navbar-brand" to="/">
          <img src="~/assets/img/Workpedia logo transparent (Blue).png" alt="">
        </NuxtLink>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent">
          <TheJobsSideNavToggle @toggle="$emit('sidenavToggle')" />
        </button>

        <div class="collapse navbar-collapse">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="#">
                About
              </a>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/jobs/categories">
                Categories
              </NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/jobs/hire">
                Hire
              </NuxtLink>
            </li>
          </ul>
          <UserSign />
        </div>
      </div>
    </nav>
  </div>
</template>

<script>

export default {
  name: 'TheHeader'
}
</script>

<style scoped>
.nav-item a:hover,
.nav-item a:active,
.nav-item a.nuxt-link-active {
  color: #0DB47B !important;
}

.jobs-outline {
  border: 2px solid #0DB47B;
}
.jobs-outline:nth-child(3){
  border: 2px solid #0DB47B;
  background-color: #0DB47B;
  color: #fff;
}
</style>
