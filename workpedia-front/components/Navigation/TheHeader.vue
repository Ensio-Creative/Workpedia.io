<template>
  <div class="header-container">
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
      <div class="container">
        <NuxtLink class="navbar-brand" to="/">
          Navbar
        </NuxtLink>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent">
          <TheSideNavToggle @toggle="$emit('sidenavToggle')" />
        </button>

        <div class="collapse navbar-collapse">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/tutor">
                Tutor
              </NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/freelancing">
                Freelancing / Handy Men
              </NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" to="jobs">
                Jobs
              </NuxtLink>
            </li>
          </ul>
          <button class="btn landing-outline">
            Sign in
          </button>
          <button class="btn landing-outline ml-3">
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
</style>
