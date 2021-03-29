<template>
  <div>
    <div class="popular-column-heading">
      <i class="fas fa-suitcase" />
      <h3>{{ title }}</h3>
      <h5>{{ location }}</h5>
    </div>
    <div class="popular-durations">
      <span class="gray-background">
        <h6>{{ dayOfPostMade }}</h6>
      </span>
      <span class="gray-background">
        <h6>{{ timelineOfJobs }}</h6>
      </span>
      <span class="gray-background">
        <h6>{{ experience }}</h6>
      </span>
      <NuxtLink
        :to="`/jobs/categories/single-job/${id}`"
        class="btn-apply text-center"
      >
        VIEW NOW
      </NuxtLink>
    </div>
    <div class="popular-text mt-3 mb-4">
      <h3>Job description</h3>
      <p>
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JobsList',
  props: {
    id: {
      type: Number,
      requried: true,
      default: 0
    },
    title: {
      type: String,
      requried: true,
      default: 'Job title'
    },
    location: {
      type: String,
      requried: true,
      default: 'Job location'
    },
    dayOfPostMade: {
      type: String,
      requried: true,
      default: 'When posted'
    },
    timelineOfJobs: {
      type: String,
      requried: true,
      default: 'Job location'
    },
    experience: {
      type: String,
      requried: true,
      default: 'Job location'
    },
    description: {
      type: String,
      requried: true,
      default: 'Job location'
    }
  }
}
</script>

<style scoped>
.btn-apply{
  background-color: #0DB47B;
  padding: 10px;
  border-radius: 8px;
  color: #fff;
  margin-left: 250px;
}

.btn-apply:hover{
  text-decoration: none;
}
</style>
