<template>
  <div class="container">
    <TopNavInfo
      dash-title="Settings"
    />
    <div class="settings-nav mt-5">
      <div
        class="row"
      >
        <NuxtLink
          v-for="links in nav"
          :key="links.url"
          class="col text-center settings-nav-item"
          :to="links.url"
        >
          {{ links.title }}
        </NuxtLink>
      </div>
    </div>
    <main class="row justify-content-center my-5">
      <div class="col-12 col-md-5 mt-4">
        <UpdatePassword />
      </div>
    </main>
    <!-- Footer -->
    <FooterDash />
  </div>
</template>

<script>
import UpdatePassword from '~/components/dashboard/UpdatePassword.vue'
import FooterDash from '~/components/dashboard/FooterDash.vue'
import TopNavInfo from '~/components/Navigation/dashboard/TopNavInfo.vue'
export default {
  name: 'Settings',
  components: { UpdatePassword, FooterDash, TopNavInfo },
  layout: 'dashboard',
  data () {
    return {
      nav: [
        {
          title: 'User settings',
          url: '/dashboard/settings'
        },
        {
          title: 'Update Password',
          url: '/dashboard/settings/password'
        }
      ]
    }
  }
}
</script>

<style  scoped>
.container, .container-sm, .container-md, .container-lg {
  max-width: 1050px;
}
.settings-nav{
  margin-top: 20px;
}
.signin-btn{
  background-color: #251E8C;
}

a {
  font-size: 18px;
  color: #251E8C;
}
.settings-nav-item:nth-child(1){
  border-right: 1px solid #251E8C;
}
a.nuxt-link-active{
  color: #000;
}
</style>
