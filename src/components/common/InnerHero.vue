<script setup lang="ts">
defineProps<{
  title: string
  eyebrow?: string
  subtitle: string
  image: string
}>()
</script>

<template>
  <section class="inner-hero" :style="{ backgroundImage: `linear-gradient(90deg, rgba(15,30,60,.58), rgba(15,30,60,.18)), url(${image})` }">
    <div class="container">
      <p>{{ eyebrow || 'CHIROPE FREIGHT SERVICE' }}</p>
      <h1>{{ title }}</h1>
      <span>{{ subtitle }}</span>
    </div>
  </section>
</template>
