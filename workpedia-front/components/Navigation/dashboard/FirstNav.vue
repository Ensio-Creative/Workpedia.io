<template>
  <div
    class="side-nav-container"
  >
    <div class="side-nav-links">
      <NuxtLink
        to="/dashboard"
        data-toggle="LogOut"
        data-placement="right"
        title="Dashboard"
        :class="[!checkResize ? 'side-nav-item' : 'side-nav-item-resized']"
      >
        <i class="fas fa-clipboard-list" />
        <span
          v-if="!checkResize"
        >
          Dashboard
        </span>
      </NuxtLink>
      <NuxtLink
        to="/dashboard/messages"
        data-toggle="LogOut"
        data-placement="right"
        title="Messages"
        :class="[!checkResize ? 'side-nav-item' : 'side-nav-item-resized']"
      >
        <i class="far fa-envelope-open" />
        <span
          v-if="!checkResize"
        >
          Messages
        </span>
      </NuxtLink>
      <NuxtLink
        to="/dashboard/payments"
        data-toggle="LogOut"
        data-placement="right"
        title="Payments"
        :class="[!checkResize ? 'side-nav-item' : 'side-nav-item-resized']"
      >
        <i class="fas fa-money-check-alt" />
        <span
          v-if="!checkResize"
        >
          Payments
        </span>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FirstNav',
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
.side-nav-item:hover{
  border-right: 1px solid #FF9B17;
}
.side-nav-item-resized:hover{
  border-right: 1px solid #FF9B17;
}
.nuxt-link-active {
  border-right: 1px solid #FF9B17;
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
</style>
