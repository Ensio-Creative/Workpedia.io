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
  name: 'JobsNavAdmin',
  data () {
    return {
      nav: [
        {
          title: 'Freelancers/Handymen',
          url: '/admin/freelance'
        },
        {
          title: 'Gigs',
          url: '/admin/freelance/gigs'
        }
      ]
    }
  }
}
</script>

<style scoped>
a {
  font-size: 18px;
  color: #2B7DC4;
}
.hire-nav-item:nth-child(1){
  border-right: 1px solid #000;
}
/* .hire-nav-item:nth-child(2){
  border-right: 1px solid #000;
} */
/* .hire-nav-item:nth-child(3){
  border-right: 1px solid #000;
} */
a.nuxt-link-active{
  color: #000;
}
</style>
