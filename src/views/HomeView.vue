<script setup lang="ts">
import { images, site } from '../data/site'
import { services } from '../data/services'
import { solutions } from '../data/solutions'
import { news } from '../data/news'
import { partners } from '../data/partners'
import QuoteCtaBand from '../components/common/QuoteCtaBand.vue'
</script>

<template>
  <main>
    <section class="home-hero" :style="{ backgroundImage: `linear-gradient(90deg, rgba(15,30,60,.68), rgba(15,30,60,.18)), url(${images.heroShip})` }">
      <div class="container">
        <h1>CHIROPE Freight Service</h1>
        <p>Reliable freight coordination for global B2B trade.</p>
        <div class="hero-actions">
          <RouterLink to="/quote">Get A Quote</RouterLink>
          <a href="#services">Explore Services</a>
        </div>
      </div>
    </section>

    <section id="services" class="section services-preview">
      <div class="section-title">
        <h2>Services Preview</h2>
        <p>Mode-by-mode logistics support from origin planning to destination handoff.</p>
      </div>
      <div class="service-cards">
        <RouterLink v-for="item in services" :key="item.slug" :to="`/${item.slug}`" class="service-card">
          <img :src="item.heroImage" :alt="item.name" />
          <div>
            <h3>{{ item.name }}</h3>
            <p>{{ item.shortDescription }}</p>
            <b>Learn More</b>
          </div>
        </RouterLink>
      </div>
    </section>

    <section class="section overview-section soft">
      <div>
        <p class="eyebrow">{{ site.legalName }}</p>
        <h2>Freight service built around clear ownership.</h2>
        <p>CHIROPE supports B2B cargo teams with ocean, air, rail, road, warehouse and delivery coordination, keeping each shipment plan clear from origin preparation to final handoff.</p>
        <RouterLink to="/about" class="line-button">Learn More</RouterLink>
      </div>
      <div class="about-media">
        <img :src="images.office" alt="CHIROPE office logistics planning meeting" />
        <img :src="images.team" alt="CHIROPE team group photo" />
        <img :src="images.outing" alt="CHIROPE team building activity" />
      </div>
    </section>

    <section class="trust-band">
      <div class="container trust-band__inner">
        <div>
          <p>COMPLIANCE AND SAFETY</p>
          <h2>CHIROPE is your reliable supply chain service partner.</h2>
          <span>Freight coordination, document readiness and delivery handoff support.</span>
        </div>
        <aside>
          <strong>Global Service Layout</strong>
          <span>Ocean, air, rail, road, warehouse and delivery support for commercial cargo.</span>
        </aside>
      </div>
    </section>

    <section class="section advantages">
      <img :src="images.rail" alt="Rail freight containers" />
      <div class="advantage-grid">
        <article><span>01</span><h3>Quality Management</h3><p>Clear cargo checks and service ownership.</p></article>
        <article class="hot"><span>02</span><h3>Information Support</h3><p>Shipment updates and practical coordination.</p></article>
        <article><span>03</span><h3>Timely Response</h3><p>Fast quote handling and route follow-up.</p></article>
        <article><span>04</span><h3>Customized Service</h3><p>Plans based on cargo profile and delivery need.</p></article>
      </div>
    </section>

    <section v-if="partners.length" class="section partners-section">
      <div class="container partners-head">
        <div>
          <p class="eyebrow">Carrier Network</p>
          <h2>Shipping lines and express couriers</h2>
        </div>
        <p>Common carrier and courier networks support route planning, documentation coordination and final delivery handoff for commercial cargo.</p>
      </div>
      <div class="partner-logos">
        <figure v-for="partner in partners" :key="partner.name">
          <img :src="partner.logo" :alt="partner.name" />
          <figcaption>{{ partner.category }}</figcaption>
        </figure>
      </div>
    </section>

    <section class="section solutions-preview soft">
      <div class="section-title">
        <h2>Solutions</h2>
        <p>Programs for repeat shipping, marketplace inbound and warehouse distribution.</p>
      </div>
      <div class="image-card-grid">
        <RouterLink v-for="item in solutions" :key="item.slug" :to="`/${item.slug}`">
          <img :src="item.heroImage" :alt="item.name" />
          <h3>{{ item.name }}</h3>
          <p>{{ item.shortDescription }}</p>
        </RouterLink>
      </div>
    </section>

    <section class="section news-preview">
      <div class="section-title">
        <h2>News Information</h2>
        <p>Practical freight notes for cargo teams.</p>
      </div>
      <div class="image-card-grid">
        <RouterLink v-for="item in news.slice(0, 3)" :key="item.id" to="/news">
          <img :src="item.image" :alt="item.title" />
          <h3>{{ item.title }}</h3>
          <p>{{ item.summary }}</p>
        </RouterLink>
      </div>
      <RouterLink to="/news" class="center-button">View More</RouterLink>
    </section>

    <QuoteCtaBand />
  </main>
</template>
