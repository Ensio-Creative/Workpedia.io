<template>
  <div>
    <b-navbar
      toggleable="lg"
      variant="white"
    >
      <b-container>
        <b-navbar-brand>
          <NuxtLink to="/">
            NavBar
          </NuxtLink>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse" />
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item>
              <NuxtLink to="/">
                Tutor
              </NuxtLink>
            </b-nav-item>

            <b-nav-item>
              <NuxtLink to="/">
                Freelancing / Handy Men
              </NuxtLink>
            </b-nav-item>

            <b-nav-item>
              <NuxtLink to="/">
                Jobs
              </NuxtLink>
            </b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <button class="sign-in">
              Welcome
            </button>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </div>
</template>

<script>
export default { }
</script>

<style lang="scss" scoped>

</style>
