<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
import FooterComponent from './components/FooterComponent.vue';
</script>

<template>
  <header>
    <NavBar />
  </header>
  <main>
    <RouterView />
  </main>
  <FooterComponent />
</template>
