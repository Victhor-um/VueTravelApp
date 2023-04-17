<template>
  <div class="card">
    <img
      :src="`/images/${props.experience.image}`"
      :alt="props.experience.name"
    />
    <span class="card__text">{{ props.experience.name }}</span>
    <!-- <p>{{ experience.experience.description }}</p>-->
    <!-- <p>{{ experience }}</p> -->
  </div>
</template>

<script setup>
const props = defineProps({
  experience: {
    type: Object,
    required: true,
  },
});
console.log("child log: ", props);
</script>

<style lang="scss" scoped></style>
