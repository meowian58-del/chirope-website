<script setup lang="ts">
import { site } from '../../data/site'
import { services } from '../../data/services'
import { solutions } from '../../data/solutions'
</script>

<template>
  <footer class="site-footer">
    <div class="container footer-grid">
      <div>
        <img class="footer-logo" src="/assets/chirope-logo.png" alt="CHIROPE Freight Service Limited" />
        <p>{{ site.tagline }}</p>
        <a :href="`mailto:${site.email}`">{{ site.email }}</a>
        <span>{{ site.location }}</span>
      </div>
      <nav>
        <h2>Services</h2>
        <RouterLink v-for="item in services" :key="item.slug" :to="`/${item.slug}`">{{ item.name }}</RouterLink>
      </nav>
      <nav>
        <h2>Solutions</h2>
        <RouterLink v-for="item in solutions" :key="item.slug" :to="`/${item.slug}`">{{ item.name }}</RouterLink>
      </nav>
      <nav>
        <h2>Company</h2>
        <RouterLink to="/about">About Us</RouterLink>
        <RouterLink to="/news">News</RouterLink>
      </nav>
    </div>
    <div class="footer-bottom">
      <span>Copyright 2026 CHIROPE FREIGHT SERVICE LIMITED. All rights reserved.</span>
      <RouterLink to="/privacy">Privacy Policy</RouterLink>
      <a href="https://beian.miit.gov.cn/" target="_blank" rel="noreferrer">粤ICP备20012173号-1</a>
    </div>
  </footer>
</template>
