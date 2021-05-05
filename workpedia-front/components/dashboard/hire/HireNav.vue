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
  data () {
    return {
      nav: [
        {
          title: 'Company Details',
          url: '/dashboard/hire'
        },
        {
          title: 'Post a Job',
          url: '/dashboard/hire/post-a-job'
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
  color: #251E8C;
}
.hire-nav-item:nth-child(1){
  border-right: 1px solid #251E8C;
}
a.nuxt-link-active{
  color: #251E8C;
}
</style>
