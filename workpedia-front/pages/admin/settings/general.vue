<template>
  <div class="container">
    <TopNavInfo
      dash-title="Settings"
    />
    <SettingsNavAdmin
      class="mt-5"
    />
    <main class="welcomeImages mt-4">
      <h2>Start images</h2>
      <form
        class="images-form"
      >
        <div class="row">
          <div class="col">
            <label for="formFile" class="form-label">Landing image*</label>
            <input
              id="formFile"
              class="form-control"
              type="file"
            >
          </div>
          <div class="col">
            <label for="formFile" class="form-label">Tutor image*</label>
            <input
              id="formFile"
              class="form-control"
              type="file"
            >
          </div>
        </div>
        <div class="row  mt-3">
          <div class="col">
            <label for="formFile" class="form-label">Job image*</label>
            <input
              id="formFile"
              class="form-control"
              type="file"
            >
          </div>
          <div class="col">
            <label for="formFile" class="form-label">Freelance image*</label>
            <input
              id="formFile"
              class="form-control"
              type="file"
            >
          </div>
        </div>
        <AppButton
          type="submit"
          class="save-image-btn mt-3"
        >
          Save
        </AppButton>
      </form>
    </main>
    <FooterDash
      class="fixed-bottom"
    />
  </div>
</template>

<script>
export default {
  name: 'GeneralSettings',
  layout: 'admin',
  data () {
    return {
      message: ''
    }
  }
}
</script>

<style scoped>
.container, .container-sm, .container-md, .container-lg {
  max-width: 1050px;
}
.save-image-btn{
  background-color: #251E8C;
  float: right;
  width: 129px;
}
.signin-btn{
  background-color: #251E8C;
}
</style>
