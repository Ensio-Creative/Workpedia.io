<template>
  <div
    class="side-nav-container"
  >
    <div class="side-nav-links">
      <NuxtLink
        to="/dashboard/tutor"
        data-toggle="LogOut"
        data-placement="right"
        title="Tutor"
        :class="[!checkResize ? 'side-nav-item' : 'side-nav-item-resized']"
      >
        <i class="fas fa-chalkboard-teacher" />
        <span
          v-if="!checkResize"
        >
          Tutor
        </span>
      </NuxtLink>
      <NuxtLink
        to="/dashboard/jobs"
        data-toggle="LogOut"
        data-placement="right"
        title="Jobs"
        :class="[!checkResize ? 'side-nav-item' : 'side-nav-item-resized']"
      >
        <i class="fas fa-suitcase" />
        <span
          v-if="!checkResize"
        >
          Jobs
        </span>
      </NuxtLink>
      <NuxtLink
        to="/dashboard/freelance"
        data-toggle="LogOut"
        data-placement="right"
        title="Freelance"
        :class="[!checkResize ? 'side-nav-item' : 'side-nav-item-resized']"
      >
        <i class="fas fa-search" />
        <span
          v-if="!checkResize"
        >
          Freelance
        </span>
      </NuxtLink>
    </div>
    <div class="side-nav-links mt-5">
      <NuxtLink
        to="/dashboard/tutor"
        data-toggle="LogOut"
        data-placement="right"
        title="Settings"
        :class="[!checkResize ? 'side-nav-item' : 'side-nav-item-resized']"
      >
        <i class="fas fa-cog" />
        <span
          v-if="!checkResize"
        >
          Settings
        </span>
      </NuxtLink>
      <NuxtLink
        to="/dashboard/jobs"
        data-toggle="LogOut"
        data-placement="right"
        title="Logout"
        :class="[!checkResize ? 'side-nav-item' : 'side-nav-item-resized']"
      >
        <i class="fas fa-sign-out-alt" />
        <span
          v-if="!checkResize"
        >
          Logout
        </span>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SecondNav',
  props: {
    checkResize: Boolean
  }
}
</script>

<style scoped>
.side-nav-item{
 display: block;
  color: #fff;
  letter-spacing: 2px;
  font-size: 14px;
  width: 158px;
}
.side-nav-item-resized {
  display: block;
  color: #fff;
  font-size: 18px;
   width: 0px;
}

.side-nav-item-resized i {
  padding: 19px;
}

.side-nav-item:hover{
  text-decoration: none;
}
.side-nav-item i {
  padding: 19px;

}
.side-nav-item:hover{
  border-right: 1px solid #FF9B17;
}
.side-nav-item-resized:hover{
  border-right: 1px solid #FF9B17;
}
.nuxt-link-active {
  border-right: 1px solid #FF9B17;
}
</style>
