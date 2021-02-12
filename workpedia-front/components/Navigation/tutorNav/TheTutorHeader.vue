<template>
  <div class="header-container">
    <nav class="navbar navbar-expand-lg transparent">
      <div class="container">
        <NuxtLink class="navbar-brand" to="/">
          <img src="~/assets/img/Workpedia logo transparent (Blue).png" alt="">
        </NuxtLink>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent">
          <TheTutorSideNavToggle @toggle="$emit('sidenavToggle')" />
        </button>

        <div class="collapse navbar-collapse">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" href="#">
                About
              </a>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/tutor/tutors">
                Tutors
              </NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link become-tutor" to="/tutor/becomeTutor">
                Become a Tutor
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
  color: #FF9B17;
  text-decoration: #FF9B17 1px;
}
.become-tutor{
  background-color: #FF9B17;
  border-radius: 2px;
  color: #000 i !important;
}
.tutor-outline {
  border: 2px solid #FF9B17;
}
.tutor-outline:hover {
  border: 2px solid #FF9B17;
  background-color: #FF9B17;
}
.tutor-outline:nth-child(3){
  border: 2px solid #FF9B17;
  background-color: #FF9B17;
}
.tutor-outline:nth-child(3):hover{
  box-shadow: 0px 3px 19px #00000029;
  border: 2px solid #FF9B17;
  background-color: transparent;
}
</style>
