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
    // sendEmail () {
    //   if (this.email === '') {
    //     console.log('Fill in your email')
    //   } else if (!this.validEmail(this.email)) {
    //     console.log('Enter a valid email')
    //   } else {
    //     console.log(this.email)
    //   }
    // },
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
  box-shadow: 0px 12px 40px #251E8C40;
  border-radius: 11px 0px 0px 11px;
  border: #FFFFFF;
  padding: 15px 70px;
}
.news-btn{
  background-color: #251E8C;
  padding: 15px 70px;
  color: #FFFFFF;
  box-shadow: 0px 12px 40px #251E8C40;
  border-radius: 0px 11px 11px 0px;
  border: #251E8C;
  margin-left: -4px;
}

</style>
