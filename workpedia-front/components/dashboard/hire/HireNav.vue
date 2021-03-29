<template>
  <div>
    <div class="hire-nav">
      <div
        class="row"
      >
        <NuxtLink
          v-for="links in nav"
          :key="links.url"
          class="col text-center"
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
  data () {
    return {
      nav: [
        {
          title: 'Company Info',
          url: '/dashboard/hire'
        },
        {
          title: 'Post a Job',
          url: '/dashboard/hire/post-a-job'
        },
        {
          title: 'Applications',
          url: '/dashboard/hire/applications'
        }
      ]
    }
  }
}
</script>

<style scoped>
.hire-nav{
  margin-top: 20px;
}

a {
  font-size: 18px;
  border-right: 1px solid #0C0573;
  color: #0C0573;
}
a.nuxt-link-active{
  color: #000;
}
</style>
