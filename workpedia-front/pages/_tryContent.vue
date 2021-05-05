<template>
  <div>
    <nav>
      <ul>
        <li
          v-for="link of texts.toc"
          :key="link.id"
        >
          <NuxtLink
            :to="`#${link.id}`"
            :class="{ 'py-2': link.depth === 2, 'ml-2 pb-2': link.depth === 3 }"
          >
            {{ link.text }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
    <div class="bg-hero container">
      <div class="row justify-content-around">
        <div class="col-12 col-md-12 col-lg-6 bg-texts order-6 order-sm-2">
          <h1>
            {{ texts.title }}
          </h1>
        </div>
        <div class="col-12 col-md-12 col-lg-6 order-2 order-sm-6">
          <div class="image-rap">
            <img src="~static/img/workpedia-privacy-policy.svg">
          </div>
        </div>
      </div>
    </div>
    <article class="container content-container">
      <!-- <h1>{{ texts.title }}</h1>
      <p>{{ texts.description }}</p>
      <img :src="texts.img" :alt="texts.alt"> -->
      <!-- <p>Article last updated: {{ formatDate(article.updatedAt) }}</p> -->

      <nuxt-content :document="texts" />
    </article>
    <Footer />
  </div>
</template>

<script>
export default {
  name: 'TryContent',
  async asyncData ({ $content, params }) {
    const texts = await $content('sitetexts', params.tryContent).fetch()

    return { texts }
  }
}
</script>

<style scoped>
.bg-hero{
  background-color: #fff;
}
.image-rap {
  margin-top: 48px;
  height: 116%;
  overflow: hidden;
}
.bg-hero h1 {
  padding: 10px 107px 5px 0px;
  margin-top: 109px;
}
.bg-hero img{
  width: 623px;
  margin-bottom: 20px;
}
.about-background{
  background-color: #251E8C;
  padding: 102px;
  margin-top: 21px;
}
.about-background h1 {
  font-weight: bold;
}
 .nuxt-content h2 {
    font-weight: bold;
    font-size: 28px;
  }
  .nuxt-content h3 {
    font-weight: bold;
    font-size: 22px;
  }
  .nuxt-content p {
    margin-bottom: 20px;
  }
  .content-container {
    margin-top: 85px;
    margin-bottom: 85px;
  }
</style>
