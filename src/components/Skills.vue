<template>
  <section class="space-y-2 p-4">
    <h2 class="text-2xl font-bold">Skills</h2>
    <ul class="flex flex-wrap text-md leading-relaxed -mr-1.6 -mb-1.6">
      <li class="px-2.5 mr-1.5 mb-1.5 rounded text-base text-gray-750 print:bg-white print:border-inset bg-gray-200"
        v-for="(skill, index) in skills" :key="index">{{ skill }}</li>
    </ul>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    skills: Array as () => string[]
  }
});
</script>
