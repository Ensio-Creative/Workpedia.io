<template>
  <div class="relative-container">
    <SignUp
      v-if="!ownAccount"
      @changeComponent="ownAccount = true"
    />
    <LogIn
      v-if="ownAccount"
      @changeComponent="ownAccount = false"
    />
  </div>
</template>

<script>
export default {
  layout: 'auth',
  name: 'Auth',
  data () {
    return {
      ownAccount: false
    }
  }
}
</script>

<style scoped>
.relative-container{
  position: absolute;
  margin: auto;
  width: 420px;
  top: 33px;
  left: 420px;
  padding: 40px 60px 0px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 3px 7px 9px rgb(0 0 0 / 16%);
  border-radius: 8px;
}
</style>
