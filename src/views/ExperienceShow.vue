<template>
  <h1>We are into experience</h1>
  <section>
    <h1>{{ props.name }}</h1>
    <img :src="`/images/${props.image}`" :alt="props.name" />
    <p>{{ props.description }}</p>
  </section>
</template>

<script setup>
const props = defineProps({
  experience: {
    type: Object,
    required: true,
  },
});
console.log("shoow log: ", props);
</script>

<style lang="scss" scoped></style>
