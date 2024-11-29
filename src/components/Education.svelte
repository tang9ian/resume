<script>
  export let education;
</script>

<section class="space-y-2 p-4">
  <h2 class="text-2xl font-bold">Education</h2>
  {#each education as school}
    <div class="mb-4.5 break-inside-avoid">
      <h4 class="text-lg font-semibold text-gray-700 leading-snugish">
        {school.school}
      </h4>
      <p class="leading-normal text-md text-gray-650">
        {school.degree}
        {school.years && `| ${school.years}`}
      </p>
    </div>
  {/each}
</section>
