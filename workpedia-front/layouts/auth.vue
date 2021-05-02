<template>
  <div class="auth">
    <!-- <video id="videoBG" autoplay muted loop>
      <source src="~/assets/video/VID-20210221-WA0001.mp4" type="video/mp4">
    </video> -->
    <Errors />
    <!-- <div class="row">
      <div class="col-lg-6 auth-column">
        <h3>One Account for all</h3>
      </div>
      <div class="col-lg-6 auth-column" />
    </div> -->
    <!-- <Responses /> -->
    <Nuxt />
  </div>
</template>

<script>
export default {
  name: 'AuthLayout'
}
</script>

<style scoped>
#videoBG {
    position:fixed;
    z-index: -1;
    width:100%;
    height: auto;
}
.auth{
  background-image: url('~assets/img/bg_forall.svg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

h3{
  margin-top: 474px;
  margin-bottom: 100px;
  text-align: left;
  font: normal normal bold 30px/60px Archivo;
  letter-spacing: 0px;
  color: #000;
  opacity: 1;
}
</style>
