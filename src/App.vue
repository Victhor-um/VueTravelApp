<script setup>
import { RouterView } from "vue-router";
import TheNavigation from "@/components/TheNavigation.vue";
</script>

<template>
  <the-navigation />
  <div class="container">
    <router-view />
  </div>
</template>

<style scoped></style>
