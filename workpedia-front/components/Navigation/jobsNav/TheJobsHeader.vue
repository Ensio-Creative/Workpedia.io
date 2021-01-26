<template>
  <div class="header-container">
    <nav class="navbar navbar-expand-lg navbar-light transparent">
      <div class="container">
        <NuxtLink class="navbar-brand" to="/">
          <img src="~/assets/img/Workpedia logo transparent (Blue).png" alt="">
        </NuxtLink>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent">
          <TheJobsSideNavToggle @toggle="$emit('sidenavToggle')" />
        </button>

        <div class="collapse navbar-collapse">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/jobs">
                About
              </NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/job/jobs">
                Jobs
              </NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link become-tutor" to="/jobs/post">
                Post a Job
              </NuxtLink>
            </li>
          </ul>
          <button class="btn jobs-outline">
            Sign in
          </button>
          <button class="btn jobs-outline ml-3">
            Register for free
          </button>
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
  color: #000;
}
.become-tutor{
  background-color: #0DB47B;
  border-radius: 2px;
  color: #000 i !important;
}
.jobs-outline {
  border: 2px solid #0DB47B;
}
.jobs-outline:hover {
  border: 2px solid #0DB47B;
  background-color: #0DB47B;
}
.jobs-outline:nth-child(3){
  border: 2px solid #0DB47B;
  background-color: #0DB47B;
}
.jobs-outline:nth-child(3):hover{
  box-shadow: 0px 3px 19px #00000029;
  border: 2px solid #0DB47B;
  background-color: transparent;
}
</style>
