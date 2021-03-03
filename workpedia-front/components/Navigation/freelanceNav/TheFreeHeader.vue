<template>
  <div class="header-container">
    <nav class="navbar navbar-expand-lg transparent">
      <div class="container">
        <NuxtLink class="navbar-brand" to="/">
          <img src="~/assets/img/Workpedia logo transparent (Blue).png" alt="">
        </NuxtLink>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent">
          <TheFreeSideNavToggle @toggle="$emit('sidenavToggle')" />
        </button>

        <div class="collapse navbar-collapse">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" href="#">
                About
              </a>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/freelancing/categories">
                Categories
              </NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link become-tutor" to="/freelancing/become-freelancer">
                Become a Freelancer
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
  color: #2B7DC4;
}
.become-tutor{
  background-color: #2B7DC4;
  border-radius: 2px;
  color: #fff !important;
}
.freelance-outline {
  border: 2px solid #2B7DC4;
}
.freelance-outline:nth-child(3){
  border: 2px solid #2B7DC4;
  background-color: #2B7DC4;
  color: #fff;
}
</style>
