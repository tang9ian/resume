<template>
  <section class="space-y-2 p-4">
    <h2 class="text-2xl font-bold">Summary</h2>
    <p>{{ summary }}</p>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    summary: String
  }
});
</script>
