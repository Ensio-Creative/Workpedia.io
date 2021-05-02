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
          title: 'Admin settings',
          url: '/admin/settings'
        },
        {
          title: 'General',
          url: '/admin/settings/general'
        },
        {
          title: 'Tutors',
          url: '/admin/settings/tutors'
        },
        {
          title: 'Jobs',
          url: '/admin/settings/jobs'
        },
        {
          title: 'Freelance/Handymen',
          url: '/admin/settings/freelance'
        }
      ]
    }
  }
}
</script>

<style scoped>
a {
  font-size: 18px;
  color: #0C0573;
}
.hire-nav-item:nth-child(1){
  border-right: 1px solid #000;
}
.hire-nav-item:nth-child(2){
  border-right: 1px solid #000;
}
.hire-nav-item:nth-child(3){
  border-right: 1px solid #000;
}
.hire-nav-item:nth-child(4){
  border-right: 1px solid #000;
}
a.nuxt-link-active{
  color: #000;
}
@media screen and (max-width: 780px) {
  .hire-nav-item:nth-child(4){
  border-right: 0px solid #000;
}
.hire-nav-item:nth-child(5){
  border-right: 1px solid #000;
  margin-top: 20px;
}
}
</style>
