<template>
  <div>
    <NuxtLink
      class="freelance-column text-center"
      :to="`/freelancing/categories/single-freelancing/${id}`"
    >
      <div class="freelance-img-head" />
      <div class="freelance-text">
        <h3>{{ title }}</h3>
      </div>
      <div class="freelance-amount">
        <p>${{ amount }}</p>
      </div>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'FreelanceList',
  props: {
    id: {
      type: String,
      requried: true,
      default: '0'
    },
    title: {
      type: String,
      requried: true,
      default: 'Tutor Course'
    },
    amount: {
      type: String,
      requried: true,
      default: '$$$'
    }
  }
}
</script>

<style scoped>

</style>
