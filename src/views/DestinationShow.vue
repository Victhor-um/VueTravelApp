<template>
  <section v-if="destination" class="destination">
    <h1>{{ destination.name }}</h1>
    <div class="destination-details">
      <img :src="`/images/${destination.image}`" :alt="destination.name" />
      <p>{{ destination.description }}</p>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const destination = ref(undefined);
const route = useRoute();
const props = defineProps({
  id: String,
});

console.log(props.id === 3);
const loadDestination = async () => {
  const response = await fetch(
    `https://travel-dummy-api.netlify.app/${route.params.slug}.json`
  );
  destination.value = await response.json();
};

onMounted(() => loadDestination());

// watch(() => route.params.slug, loadDestination);
</script>

<style lang="scss" scoped></style>
