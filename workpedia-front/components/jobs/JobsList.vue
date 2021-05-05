<template>
  <div>
    <div class="popular-column-heading">
      <i class="fas fa-suitcase" />
      <h3>{{ title }}</h3>
      <h5>{{ location }}</h5>
    </div>
    <div class="popular-durations">
      <span class="gray-background">
        <h6>{{ $moment(dayOfPostMade).format('LL') }}</h6>
      </span>
      <span class="gray-background">
        <h6>{{ timelineOfJobs }}</h6>
      </span>
      <span class="gray-background">
        <h6>NGN {{ amount }}</h6>
      </span>
      <NuxtLink
        :to="`/jobs/categories/single-job/${id}`"
        class="btn-apply text-center"
      >
        View
      </NuxtLink>
    </div>
    <div class="popular-text mt-3 mb-4">
      <h4>Job description</h4>
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
      type: String,
      requried: true,
      default: ''
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
    amount: {
      type: String,
      requried: true,
      default: '000,000'
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
  background-color: #251E8C;
  padding: 10px 28px;
  border-radius: 5px;
  color: #fff;
  margin-left: 250px;
}

.btn-apply:hover{
  text-decoration: none;
}
@media screen and (max-width: 780px) {
  .btn-apply{
    padding: 18px 10px;
    margin-left: 0px;
  }
}
</style>
