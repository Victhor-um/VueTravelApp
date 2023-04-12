<template>
  <div class="card">
    <img
      :src="`/images/${experience.experience.image}`"
      :alt="experience.experience.name"
    />
    <span class="card__text">{{ experience.experience.name }}</span>
    <!-- <p>{{ experience.experience.description }}</p>-->
    <!-- <p>{{ experience }}</p> -->
  </div>
</template>

<script setup>
const experience = defineProps({
  experience: {
    type: Object,
    required: true,
  },
});
console.log("child log: ", experience);
</script>

<style lang="scss" scoped></style>
