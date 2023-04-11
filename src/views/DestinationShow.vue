<template>
  <section class="destination">
    <h1>{{ destination.name }}</h1>
    <div class="destination-details">
      <img :src="`/images/${destination.image}`" :alt="destination.name" />
      <p>{{ destination.description }}</p>
    </div>
  </section>
</template>

<script setup>
import sourceData from "@/data.json";
import { ref, computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const state = ref({
  destinationId: parseInt(route.params.id),
  destinations: sourceData.destinations,
});
const destination = computed(() => {
  return state.value.destinations.find(
    (destination) => destination.id === state.value.destinationId
  );
});
</script>

<style lang="scss" scoped></style>
