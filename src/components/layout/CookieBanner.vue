<script setup lang="ts">
import { ref } from 'vue'

const accepted = ref(localStorage.getItem('chirope-cookie-accepted') === 'true')

function accept() {
  localStorage.setItem('chirope-cookie-accepted', 'true')
  accepted.value = true
}
</script>

<template>
  <aside v-if="!accepted" class="cookie-banner">
    <p>We use essential cookies to keep this website reliable. See our <RouterLink to="/privacy">Privacy Policy</RouterLink>.</p>
    <button type="button" @click="accept">Accept</button>
  </aside>
</template>
