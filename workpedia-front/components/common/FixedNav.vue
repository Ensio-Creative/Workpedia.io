<template>
  <div class="fixed">
    <div class="nav-fixed">
      <NuxtLink
        class="nav-fixed-item tutor"
        to="/tutor"
      >
        <i class="fas fa-suitcase" />
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
  border-radius: 20px;
  padding: 10px;
  font-size: 15px;
}
</style>
