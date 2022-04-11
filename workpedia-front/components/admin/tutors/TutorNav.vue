<template>
  <div>
    <div class="hire-nav">
      <div
        class="row"
      >
        <NuxtLink
          v-for="links in nav"
          :key="links.url"
          class="col text-center hire-nav-item"
          :to="links.url"
        >
          {{ links.title }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TutorNav',
  data () {
    return {
      nav: [
        {
          title: 'Tutors',
          url: '/admin/tutors'
        },
        {
          title: 'Tutor request',
          url: '/admin/tutors/requests'
        }
      ]
    }
  }
}
</script>

<style scoped>
a {
  font-size: 18px;
  color: var(--bg-dark-blue);
}
.hire-nav-item:nth-child(1){
  border-right: 1px solid #000;
}
a.nuxt-link-active{
  color: #000;
}
</style>
