<template>
  <div class="about-background">
    <h2 class="container text-white">
      <slot name="info-box">
        default
      </slot>
    </h2>
  </div>
</template>

<script>
export default {
  name: 'InfoBoax'
}
</script>

<style scoped>
.about-background{
  background-color: #251E8C;
  padding: 102px;
  margin-top: 21px;
}
.about-background h1 {
  font-weight: bold;
}
</style>
