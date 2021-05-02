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
    <div class="about-background">
      <h1
        class="container text-white"
      >
        {{ texts.title }}
      </h1>
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
