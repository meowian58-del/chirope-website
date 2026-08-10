<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import InnerHero from '../components/common/InnerHero.vue'
import QuoteCtaBand from '../components/common/QuoteCtaBand.vue'
import { services } from '../data/services'

const route = useRoute()
const page = computed(() => services.find((item) => `/${item.slug}` === route.path))
const related = computed(() =>
  services.filter((item) => item.slug !== page.value?.slug && page.value?.relatedSlugs.includes(item.slug)),
)
</script>

<template>
  <main v-if="page">
    <InnerHero :title="page.name" :subtitle="page.shortDescription" :image="page.heroImage" />

    <section class="section detail-overview">
      <img :src="page.heroImage" :alt="page.name" />
      <article>
        <p class="eyebrow">Service Overview</p>
        <h2>{{ page.name }} coordination for commercial cargo teams.</h2>
        <p>{{ page.overview }}</p>
      </article>
    </section>

    <section class="section detail-section soft">
      <div class="detail-intro">
        <p class="eyebrow">Key Capabilities</p>
        <h2>Core support areas</h2>
      </div>
      <div class="detail-grid">
        <article v-for="(item, index) in page.capabilities" :key="item">
          <span>{{ String(index + 1).padStart(2, '0') }}</span>
          <h3>{{ item }}</h3>
          <p>Structured coordination keeps requirements clear before the shipment moves to the next handoff.</p>
        </article>
      </div>
    </section>

    <section class="section process-section">
      <div class="detail-intro">
        <p class="eyebrow">Service Process</p>
        <h2>From cargo review to final handoff</h2>
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
        <p class="eyebrow">Why Choose CHIROPE</p>
        <h2>Clear ownership across every service step.</h2>
        <p>CHIROPE connects route planning, document checks, cargo handoff and delivery communication into one practical workflow for B2B freight teams.</p>
      </article>
      <aside
        class="orange-card"
        :style="{ backgroundImage: `linear-gradient(90deg, rgba(22, 136, 173, .9), rgba(39, 170, 211, .66)), url(${page.heroImage})` }"
      >
        <strong>Reliable Freight Support</strong>
        <span>Practical planning, responsive updates and coordinated handoff for commercial cargo.</span>
      </aside>
    </section>

    <section v-if="related.length" class="section related-section soft">
      <div class="detail-intro">
        <p class="eyebrow">Related Services</p>
        <h2>Explore connected service options</h2>
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
