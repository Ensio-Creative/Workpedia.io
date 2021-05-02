<template>
  <div>
    <section class="news-letter text-center">
      <div class="container">
        <h3>Subscribe to our Newsletter</h3>
        <p
          class="news-paragraph"
        >
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
          magna aliquyam erat, sed diam voluptua. At vero eos et a et ea rebum. Stet clita kasd gubergren, no \
        </p>
        <div class="input-area mt-5">
          <input
            v-model="email"
            class="news-input"
            type="email"
            placeholder="Enter Your Email Address"
          >
          <button
            :disabled="!validEmail(email)"
            class="news-btn"
            @click="sendEmail"
          >
            Subscribe
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'NewsLetter',
  data () {
    return {
      email: ''
    }
  },
  methods: {
    async sendEmail () {
      try {
        const res = await this.$axios.$post('public/subcribe-newsletter',
          { email: this.email }
        )
        this.$toast.success(res.message)
      } catch (error) {
        if (error.response.status === 422) {
          this.$toast.error(error.response.data.message)
        } else if (error.response.status === 404) {
          this.$toast.error(error.response.data.message)
        } else if (error.response.status === 401) {
          this.$toast.error(error.response.data.message)
        } else if (error.response.status === 402) {
          this.$toast.error(error.response.data.message)
        } else if (error.response.status === 400) {
          this.$toast.error(error.response.data.message)
        } else {
          this.$toast.error('Something went wrong')
        }
      }
    },
    validEmail (email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    }
  }
}
</script>

<style scoped>
.news-paragraph{
  padding: 20px 232px 10px 232px;
}
.news-input {
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 5px #251E8C40;
  border-radius: 11px 0px 0px 11px;
  border: #FFFFFF;
  padding: 15px 70px;
}
.news-btn{
  background-color: #251E8C;
  padding: 15px 70px;
  color: #FFFFFF;
  box-shadow: 0px 0px 5px #251E8C40;
  border-radius: 0px 11px 11px 0px;
  border: #251E8C;
  margin-left: -4px;
}
@media screen and (max-width: 780px) {
  .news-paragraph{
  padding: 0px;
  }
  .news-input{
    padding: 15px 8px;
  }
  .news-btn{
    padding: 15px 8px;
  }
}
</style>
