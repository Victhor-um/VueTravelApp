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
import { reactive, computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const state = reactive({
  destinationId: parseInt(router.currentRoute.value.params.id),
  destinations: sourceData.destinations,
});

const destination = computed(() => {
  return state.destinations.find(
    (destination) => destination.id === state.destinationId
  );
});
</script>

<style lang="scss" scoped></style>
