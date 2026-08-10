<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import InnerHero from '../components/common/InnerHero.vue'
import QuoteCtaBand from '../components/common/QuoteCtaBand.vue'
import { news } from '../data/news'
import { images } from '../data/site'

const route = useRoute()
const article = computed(() => {
  const slug = String(route.params.slug || '')
  return news.find((item) => item.slug === slug || item.id === slug)
})
const related = computed(() => news.filter((item) => item.id !== article.value?.id).slice(0, 3))
</script>

<template>
  <main v-if="article">
    <InnerHero :title="article.title" eyebrow="CHIROPE News" :subtitle="article.summary" :image="article.image" />

    <section class="article-detail">
      <aside class="article-sidebar">
        <RouterLink to="/news">Back to News</RouterLink>
        <span>{{ article.date }}</span>
        <RouterLink to="/quote">Request a lane review</RouterLink>
      </aside>

      <article class="article-content">
        <p v-for="paragraph in article.body" :key="paragraph">{{ paragraph }}</p>
      </article>
    </section>

    <section class="section related-section soft">
      <div class="detail-intro">
        <p class="eyebrow">More News</p>
        <h2>Related freight notes</h2>
      </div>
      <div class="related-cards">
        <RouterLink v-for="item in related" :key="item.id" :to="`/news/${item.slug}`">
          <img :src="item.image" :alt="item.title" />
          <h3>{{ item.title }}</h3>
          <p>{{ item.summary }}</p>
        </RouterLink>
      </div>
    </section>

    <QuoteCtaBand />
  </main>

  <main v-else>
    <InnerHero title="Article Not Found" subtitle="The requested news article could not be found." :image="images.containers" />
    <section class="simple-page not-found">
      <RouterLink to="/news">Back to News</RouterLink>
    </section>
  </main>
</template>
