<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import InnerHero from '../components/common/InnerHero.vue'
import QuoteCtaBand from '../components/common/QuoteCtaBand.vue'
import { solutions } from '../data/solutions'

const route = useRoute()
const page = computed(() => solutions.find((item) => `/${item.slug}` === route.path))
const related = computed(() =>
  solutions.filter((item) => item.slug !== page.value?.slug && page.value?.relatedSlugs.includes(item.slug)),
)
</script>

<template>
  <main v-if="page">
    <InnerHero :title="page.name" eyebrow="Solution" :subtitle="page.shortDescription" :image="page.heroImage" />

    <section class="section detail-overview">
      <article>
        <p class="eyebrow">Customer Needs</p>
        <h2>Support for cargo teams with repeat operational requirements.</h2>
        <p>Customers need clear service scope, document readiness, warehouse instructions and delivery timing aligned before the shipment moves.</p>
      </article>
      <img :src="page.overviewImage || page.heroImage" :alt="`${page.name} operations`" />
    </section>

    <section class="section solution-overview soft">
      <div class="detail-intro">
        <p class="eyebrow">Solution Overview</p>
        <h2>{{ page.name }}</h2>
        <p>{{ page.overview }}</p>
      </div>
    </section>

    <section class="section detail-section">
      <div class="detail-intro">
        <p class="eyebrow">Included Services</p>
        <h2>What the solution can include</h2>
      </div>
      <div class="detail-grid">
        <article v-for="(item, index) in page.capabilities" :key="item">
          <span>{{ String(index + 1).padStart(2, '0') }}</span>
          <h3>{{ item }}</h3>
          <p>Each service item is coordinated around the cargo profile and the required delivery handoff.</p>
        </article>
      </div>
    </section>

    <section class="section process-section soft">
      <div class="detail-intro">
        <p class="eyebrow">Workflow</p>
        <h2>A clear sequence from requirement review to completion</h2>
      </div>
      <ol class="process-list">
        <li v-for="(item, index) in page.process" :key="item">
          <span>{{ index + 1 }}</span>
          <strong>{{ item }}</strong>
        </li>
      </ol>
    </section>

    <section class="section why-section">
      <article>
        <p class="eyebrow">Key Benefits</p>
        <h2>Connected planning for fewer disconnected handoffs.</h2>
        <p>CHIROPE keeps service selection, document checks, warehouse requirements and delivery updates aligned in one operating flow.</p>
      </article>
      <aside
        class="orange-card"
        :style="{ backgroundImage: `linear-gradient(90deg, rgba(22, 136, 173, .9), rgba(39, 170, 211, .66)), url(${page.heroImage})` }"
      >
        <strong>Solution Highlight</strong>
        <span>One coordinated plan for commercial cargo movement, storage support and final delivery closure.</span>
      </aside>
    </section>

    <section v-if="related.length" class="section related-section soft">
      <div class="detail-intro">
        <p class="eyebrow">Related Solutions</p>
        <h2>Explore connected logistics programs</h2>
      </div>
      <div class="related-cards">
        <RouterLink v-for="item in related" :key="item.slug" :to="`/${item.slug}`">
          <img :src="item.heroImage" :alt="item.name" />
          <h3>{{ item.name }}</h3>
          <p>{{ item.shortDescription }}</p>
        </RouterLink>
      </div>
    </section>

    <QuoteCtaBand />
  </main>
</template>
