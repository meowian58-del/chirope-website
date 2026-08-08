<script setup lang="ts">
import { ref } from 'vue'
import InnerHero from '../components/common/InnerHero.vue'
import { news } from '../data/news'
import { images } from '../data/site'

const activeId = ref(news[0]?.id || '')
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
          <div v-if="activeId === item.id" class="news-body">
            <p v-for="paragraph in item.body" :key="paragraph">{{ paragraph }}</p>
          </div>
          <button type="button" @click="activeId = activeId === item.id ? '' : item.id">
            {{ activeId === item.id ? 'Collapse' : 'Read More' }}
          </button>
        </div>
      </article>
    </section>
  </main>
</template>
