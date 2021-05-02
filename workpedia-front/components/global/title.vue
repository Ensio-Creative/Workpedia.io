<template>
  <div class="about-background">
    <h1
      class="container text-white"
    >
      <slot name="page-title">
        Title
      </slot>
    </h1>
  </div>
</template>

<script>
export default {
  name: 'TitleHeading'
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
