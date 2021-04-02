<template>
  <div>
    <NuxtLink
      :to="`/freelancing/categories/single-freelancing/${id}`"
      class="col"
    >
      <div class="card h-100">
        <img src="~/assets/img/Kentwood_Phone_03B-1280x850.jpg" alt="">
        <div class="card-body">
          <div class="private-tutor-text">
            <h3>{{ title }}</h3>
          </div>
          <div class="private-tutor-info">
            <p>{{ author }}</p>
            <p>${{ amount }}</p>
          </div>
        </div>
        <!-- <div class="card-footer">
          <small class="text-muted">Last updated 3 mins ago</small>
        </div> -->
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
    author: {
      type: String,
      requried: true,
      default: 'Author'
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
