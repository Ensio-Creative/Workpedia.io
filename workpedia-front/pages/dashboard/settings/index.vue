<template>
  <div class="container">
    <!-- Top nav -->
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
    <main>
      <div class="row justify-content-center">
        <div class="col-12 col-md-8 mt-5">
          <UserImg />
        </div>
        <div class="col-12 col-md-8 mt-4">
          <UpdateUser />
        </div>
      </div>
    </main>

    <!-- Footer -->
    <FooterDash />
  </div>
</template>

<script>
import TopNavInfo from '@/components/Navigation/dashboard/TopNavInfo.vue'
import UserImg from '@/components/dashboard/UserImg.vue'
import UpdateUser from '@/components/dashboard/UpdateUser.vue'
import FooterDash from '~/components/dashboard/FooterDash.vue'
export default {
  name: 'Settings',
  components: { TopNavInfo, UserImg, UpdateUser, FooterDash },
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

<style scoped>
.container, .container-sm, .container-md, .container-lg {
  max-width: 1050px;
}
.input-error{
  display: block;
  background-color: #E9E9E9;
  width: 100%;
  box-sizing: border-box;
  font: inherit;
  border: 1px solid red;
  border-radius: 8px;
}

.signin-btn{
  background-color: #251E8C;
}

.sign-privacy{
  padding-top: 10px;
  text-align: center;
}
.sign-options-btn {
  border: 1px solid #BCBCBC;
  background: #FBFBFB;
  border-radius: 5px !important;
  font-weight: bold;
  font-size: 16px;
  letter-spacing: 0px;
  color: #707070;
}
.sign-options-btn img {
  float: left;
  padding: 5px;
  width: 29px;
  height: 29px;
}
.sign-options-btn:nth-child(2){
  background: #FBFBFB;
  border-radius: 5px !important;
  font-family: 'Roboto' !important;
}

.settings-nav{
  margin-top: 20px;
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
