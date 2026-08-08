<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { services } from '../../data/services'
import { solutions } from '../../data/solutions'

const route = useRoute()
const mobileOpen = ref(false)
const servicesOpen = ref(false)
const solutionsOpen = ref(false)

function closeMenus() {
  mobileOpen.value = false
  servicesOpen.value = false
  solutionsOpen.value = false
}

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') closeMenus()
}

function onBodyClick(event: MouseEvent) {
  if (event.target instanceof Element && !event.target.closest('.site-header')) closeMenus()
}

onMounted(() => {
  document.addEventListener('keydown', onKeydown)
  document.addEventListener('click', onBodyClick)
})

onUnmounted(() => {
  document.removeEventListener('keydown', onKeydown)
  document.removeEventListener('click', onBodyClick)
})
</script>

<template>
  <header class="site-header">
    <div class="container header-inner">
      <RouterLink class="brand" to="/" @click="closeMenus">
        <img src="/assets/chirope-logo.png" alt="CHIROPE Freight Service Limited" />
      </RouterLink>

      <button class="menu-button" type="button" :aria-expanded="mobileOpen" @click="mobileOpen = !mobileOpen">
        <span></span><span></span><span></span>
      </button>

      <nav class="main-nav" :class="{ 'is-open': mobileOpen }" aria-label="Primary navigation">
        <RouterLink to="/" :class="{ active: route.path === '/' }" @click="closeMenus">Home</RouterLink>

        <div class="nav-group" :class="{ open: servicesOpen }">
          <button type="button" @click="servicesOpen = !servicesOpen">Services</button>
          <div class="dropdown">
            <RouterLink v-for="item in services" :key="item.slug" :to="`/${item.slug}`" @click="closeMenus">
              <strong>{{ item.name }}</strong>
              <span>{{ item.shortDescription }}</span>
            </RouterLink>
          </div>
        </div>

        <div class="nav-group" :class="{ open: solutionsOpen }">
          <button type="button" @click="solutionsOpen = !solutionsOpen">Solutions</button>
          <div class="dropdown">
            <RouterLink v-for="item in solutions" :key="item.slug" :to="`/${item.slug}`" @click="closeMenus">
              <strong>{{ item.name }}</strong>
              <span>{{ item.shortDescription }}</span>
            </RouterLink>
          </div>
        </div>

        <RouterLink to="/about" :class="{ active: route.path === '/about' }" @click="closeMenus">About Us</RouterLink>
        <RouterLink to="/news" :class="{ active: route.path === '/news' }" @click="closeMenus">News</RouterLink>
        <RouterLink class="quote-nav" to="/quote" @click="closeMenus">Get A Quote</RouterLink>
      </nav>
    </div>
  </header>
</template>
