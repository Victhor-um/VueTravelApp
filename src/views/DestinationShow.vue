<template>
  <section v-if="destination" class="destination">
    <h1>{{ destination.name }}</h1>
    <div class="destination-details">
      <img :src="`/images/${destination.image}`" :alt="destination.name" />
      <p>{{ destination.description }}</p>
    </div>
  </section>
  <section v-if="experiences" class="experiences">
    <h2>Top Experiences in {{ destination.name }}</h2>
    <div class="cards">
      <router-link
        v-for="experience in experiences"
        :key="experience.slug"
        :to="{
          name: 'experience.show',
          params: { experienceSlug: experience.slug },
        }"
        :experience="experience"
      >
        <experience-card :experience="experience" />
      </router-link>
    </div>
  </section>
</template>

<script setup>
import ExperienceCard from "@/components/ExperienceCard.vue";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const destination = ref(undefined);
const experiences = ref(undefined);
const route = useRoute();
const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
});

// console.log(props.id === 3);
const loadDestination = async () => {
  const response = await fetch(
    `https://travel-dummy-api.netlify.app/${route.params.slug}.json`
  );
  destination.value = await response.json();
  experiences.value = await destination.value.experiences;
  console.log(
    "🚀 ~ file: DestinationShow.vue:38 ~ loadDestination ~  experiences.value:",
    experiences.value
  );
  console.log(destination.value.experiences);
};

onMounted(() => loadDestination());

// watch(() => route.params.slug, loadDestination);
</script>

<style lang="scss" scoped></style>
