<script setup lang="ts">
import { site } from '../../data/site'
</script>

<template>
  <div class="top-bar">
    <div class="container top-bar__inner">
      <span>Global B2B freight coordination</span>
      <a :href="`mailto:${site.email}`">{{ site.email }}</a>
    </div>
  </div>
</template>
