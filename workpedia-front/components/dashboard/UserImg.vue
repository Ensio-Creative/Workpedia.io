<template>
  <div>
    <div class="card">
      <div class="card-header">
        <h3 class="text-success font-weight-bold">
          File Upload Form
        </h3>
      </div>
      <div class="card-body">
        <div class="form-group">
          <label
            class="text-success font-weight-bold font-size-sm"
            for="single-uploader-component"
          >Single File Uploader</label>
          <SingleUpload id="single-uploader-component" api-url="/images/single-upload" />
        </div>
        <hr>
        <div class="form-group">
          <label
            class="text-success font-weight-bold font-size-sm"
            for="multiple-uploader-component"
          >Multiple File Uploader</label>
          <MultiUpload id="multiple-uploader-component" api-url="/images/multi-upload" />
        </div>
        <hr>
        <div class="form-group">
          <label
            class="text-success font-weight-bold font-size-sm"
            for="dropzone-component"
          >Dropzone</label>
          <Dropzone id="dropzone-component" api-url="/images/single-upload" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageUpload',
  methods: {
    onChange (image) {
      console.log(image)
    }
  }
}
</script>

<style scoped>

</style>
