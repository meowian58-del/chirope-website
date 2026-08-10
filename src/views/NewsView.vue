<script setup lang="ts">
import InnerHero from '../components/common/InnerHero.vue'
import { news } from '../data/news'
import { images } from '../data/site'
</script>

<template>
  <main>
    <InnerHero title="News" subtitle="Freight notes for commercial cargo planning." :image="images.containers" />
    <section class="news-list">
      <article v-for="item in news" :key="item.id" class="news-item">
        <img :src="item.image" :alt="item.title" />
        <div>
          <time>{{ item.date }}</time>
          <h2>{{ item.title }}</h2>
          <p>{{ item.summary }}</p>
          <RouterLink class="news-read-more" :to="`/news/${item.slug}`">Read More</RouterLink>
        </div>
      </article>
    </section>
  </main>
</template>
