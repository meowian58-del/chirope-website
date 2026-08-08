<script setup lang="ts">
import TopBar from './components/layout/TopBar.vue'
import SiteHeader from './components/layout/SiteHeader.vue'
import SiteFooter from './components/layout/SiteFooter.vue'
import CookieBanner from './components/layout/CookieBanner.vue'
</script>

<template>
  <TopBar />
  <SiteHeader />
  <RouterView />
  <SiteFooter />
  <CookieBanner />
</template>
