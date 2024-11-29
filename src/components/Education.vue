<template>
  <section class="space-y-2 p-4">
    <h2 class="text-2xl font-bold">Education</h2>
    <div v-for="(school, index) in education" :key="index" class="mb-4.5 break-inside-avoid">
      <h4 class="text-normal">{{ school.degree }} - {{ school.school }}</h4>
      <p class="leading-normal text-gray-650">{{ school.years }}</p>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { type Education } from '../types/resume';

export default defineComponent({
  props: {
    education: Array as () => Education[]
  }
});
</script>
