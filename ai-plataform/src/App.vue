<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <!-- class="wrapper" -->

    <!-- <HelloWorld msg="You did it!" /> -->

    <NavBar />

  </header>

  <RouterView class="" />
</template>
