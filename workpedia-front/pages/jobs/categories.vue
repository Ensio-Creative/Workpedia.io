<template>
  <div>
    <!-- Categories Nav -->
    <div
      class="container bg-jobs-categories my-3"
    />
    <NuxtChild />
  </div>
</template>

<script>
export default {
  name: 'Categories',
  data () {
    return {
      displaySidenav: false
    }
  }
}
</script>

<style scoped>
.categories-nav{
  background-color: #fff;
}
.categories-nav a{
  color: rgba(0, 0, 0, 0.5);
}
.categories-nav a:hover,
.categories-nav a:active,
.categories-nav a.nuxt-link-active {
  color: #251E8C;
}
.bg-jobs-categories {
  background-image: url('~static/img/workpedia-jobs-header.svg');
  height: 80vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
/* .select-control option {
  padding: 40px;
} */
</style>
