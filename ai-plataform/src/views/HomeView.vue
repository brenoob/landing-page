<script setup lang="ts">
import MainComponent from '@/components/MainComponent.vue';

const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
const setDarkMode = (enabled: boolean) => document.documentElement.classList.toggle('dark', enabled)
setDarkMode(prefersDark || localStorage.theme === 'dark' )

</script>

<template>
  <MainComponent></MainComponent>
</template>
