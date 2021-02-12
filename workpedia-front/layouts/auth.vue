<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-6 auth-column">
        <h3>One Account for all</h3>
        <FixedNav />
      </div>
      <div class="col-lg-6 auth-column" />
    </div>
    <Nuxt />
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.auth-column:nth-child(1){
  background-image: url('~assets/img/pexels-julia-m-cameron-4143791.png');
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
