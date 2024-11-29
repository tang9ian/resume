<template>
  <section class="space-y-2 p-4">
    <h2 class="text-2xl font-bold">Experience</h2>
    <div v-for="(job, index) in experience" :key="index">
      <p class="my-px mt-4 flex justify-between font-bold">
        <span class="w-fit rounded-md bg-gray-300 px-2">{{ job.position }} at {{ job.company }}</span>
        <span>{{ job.years }}</span>
      </p>
      <p class="flex gap-1">{{ job.description }}</p>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { type Experience } from '../types/resume';

export default defineComponent({
  props: {
    experience: Array as () => Experience[]
  }
});
</script>
