<script setup>
import sourceData from "@/data.json";
const destinations = sourceData.destinations;
</script>

<template>
  <h1>Hello</h1>
  <router-link
    v-for="destination in destinations"
    :key="destination.id"
    :to="destination.slug"
  >
    <h2>{{ destination.name }}</h2>
    <img :src="`/images/${destination.image}`" :alt="destination.name"
  /></router-link>
</template>
