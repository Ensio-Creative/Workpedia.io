<template>
  <div>
    <NuxtLink
      :to="`/tutor/categories/single-tutor/${id}`"
      class=" private-tutor-column"
    >
      <div
        class="private-img-head"
      >
        <img src="~/assets/img/biology.png" alt="">
      </div>
      <div class="private-tutor-text">
        <h3>{{ tutorTitle }}</h3>
      </div>
      <div class="private-tutor-info">
        <p>{{ author }}</p>
        <p>{{ courseCategory }}</p>
      </div>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'TutorList',
  props: {
    id: {
      type: String,
      requried: true,
      default: '0'
    },
    tutorTitle: {
      type: String,
      requried: true,
      default: 'Tutor Course'
    },
    author: {
      type: String,
      requried: true,
      default: 'Tutor Course'
    },
    courseCategory: {
      type: String,
      requried: true,
      default: 'Tutor Course'
    }
  }
}
</script>

<style scoped>
.private-img-head img{
  width: 174px;
}
</style>
