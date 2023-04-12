<template>
  <h1>We are into experience</h1>
  <section>
    <h1>{{ experience.name }}</h1>
    <img :src="`/images/${experience.image}`" :alt="experience.name" />
    <p>{{ experience.description }}</p>
  </section>
</template>

<script setup>
const experience = defineProps({
  experience: {
    type: Object,
    required: true,
  },
});
console.log("shoow log: ", experience);
</script>

<style lang="scss" scoped></style>
