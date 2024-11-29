<script>
  export let skills;
</script>

<section class="space-y-2 p-4">
  <h2 class="text-2xl font-bold">Skills</h2>
  <ul class="flex flex-wrap text-md leading-relaxed -mr-1.6 -mb-1.6">
    {#each skills as skill}
      <li
        class="px-2.5 mr-1.5 mb-1.5 rounded text-base text-gray-750 print:bg-white print:border-inset bg-gray-200"
      >
        {skill}
      </li>
    {/each}
  </ul>
</section>
