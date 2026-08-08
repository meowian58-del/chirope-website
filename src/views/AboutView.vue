<script setup lang="ts">
import InnerHero from '../components/common/InnerHero.vue'
import { images, qualifications, site } from '../data/site'
</script>

<template>
  <main>
    <InnerHero title="About Us" :subtitle="site.tagline" :image="images.office" />
    <section class="section about-profile">
      <div>
        <h2>{{ site.legalName }}</h2>
        <p>CHIROPE provides freight coordination and supply chain support for B2B cargo teams that need clear planning, practical communication and reliable delivery handoff.</p>
      </div>
      <div>
        <p>Our work focuses on route planning, document readiness, warehouse handoff and practical communication across ocean, air, rail, road and delivery workflows.</p>
      </div>
    </section>
    <section class="key-points">
      <article><strong>Transparent Quote</strong><span>Clear service scope and route assumptions.</span></article>
      <article><strong>Complete Coordination</strong><span>Connected freight and handoff workflow.</span></article>
      <article><strong>Professional Service</strong><span>Practical support for commercial cargo.</span></article>
    </section>
    <section class="wide-image"><img :src="images.team" alt="CHIROPE team group photo" /></section>
    <section class="section about-cards soft">
      <article><h2>Our Advantages</h2><p>CHIROPE helps cargo owners reduce scattered updates by connecting service planning, document checks and destination requirements into one operating view.</p></article>
      <article><h2>Our Approach</h2><p>We focus on practical details: what cargo is moving, what documents are needed, where handoff happens and how the team receives updates.</p></article>
    </section>
    <section class="culture-band" :style="{ backgroundImage: `linear-gradient(rgba(38,65,129,.8), rgba(38,65,129,.8)), url(${images.outing})` }">
      <div class="container culture-grid">
        <div>
          <h2>Mission / Culture</h2>
          <p>Reliable freight service depends on accurate information, careful coordination and steady communication. CHIROPE keeps each shipment focused on the next useful step.</p>
        </div>
        <img :src="images.office" alt="CHIROPE office logistics operation" />
      </div>
    </section>
    <section class="section qualifications-section">
      <div class="section-title">
        <p class="eyebrow">Qualifications</p>
        <h2>Professional freight service credentials</h2>
      </div>
      <div class="qualification-grid">
        <figure v-for="item in qualifications" :key="item.name">
          <img :src="item.image" :alt="item.name" />
          <figcaption>{{ item.name }}</figcaption>
        </figure>
      </div>
    </section>
  </main>
</template>
