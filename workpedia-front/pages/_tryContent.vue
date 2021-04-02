<template>
  <div class="container">
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
    <article>
      <h1>{{ texts.title }}</h1>
      <p>{{ texts.description }}</p>
      <img :src="texts.img" :alt="texts.alt">
      <!-- <p>Article last updated: {{ formatDate(article.updatedAt) }}</p> -->

      <nuxt-content :document="texts" />
    </article>
    <!-- <pre>
      {{ texts }}
    </pre> -->
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
</style>
