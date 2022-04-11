<template>
  <div class="single-upload">
    <div class="d-flex justify-content-around">
      <div class="upload-container d-flex justify-content-center align-items-center">
        <input
          type="file"
          accept=".jpeg,.jpg,.png,image/jpeg,image/png"
          class="input-uploader"
          @change="selectFile"
        >
        <img class="uploader-icon" src="@/assets/img/upload.png">
      </div>
      <div class="flex-grow-1 d-flex flex-column px-3 justify-content-around">
        <bProgress v-if="isUploading" :value="value" :max="max" show-progress animated />
        <bImg
          v-if="uploadedImage"
          class="mt-1"
          height="80px"
          width="80px"
          :src="uploadedImage"
          thumbnail
          fluid
          alt="Responsive image"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      value: 0,
      max: 100,
      file: null,
      isUploading: false,
      uploadedImage: null
    }
  },
  methods: {
    async selectFile (e) {
      const file = e.target.files[0]

      /* Make sure file exists */
      if (!file) {
        return
      }

      /* create a reader */
      const readData = f => new Promise((resolve) => {
        const reader = new FileReader()
        reader.onloadend = () => resolve(reader.result)
        reader.readAsDataURL(f)
      })

      /* Read data */
      const data = await readData(file)
      console.log(data)
      /* upload the converted data */
      const instance = this.$cloudinary.upload(data, {
        uploadPreset: 'workpedia-preset'
      })

      this.$axios.$post('https://api.cloudinary.com/v1_1/www-ensiocreative-com/image/upload', instance)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
  }
}
</script>
