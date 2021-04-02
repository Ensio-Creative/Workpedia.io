<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-5 bg-white my-5 px-4 sub-container">
        <form
          @submit.prevent="onSubmit"
        >
          <div class="form-heading">
            <h2 class="my-4">
              Become a freelancer
            </h2>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BecomeFreelancer',
  layout: 'auth'
}
</script>

<style scoped>
.sub-container{
  border-radius: 8px;
}
</style>
