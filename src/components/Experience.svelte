<script>
  export let experience;
</script>

<section class="space-y-2 p-4">
  <h2 class="text-2xl font-bold">Experience</h2>
  {#each experience as job}
    <div>
      <p class="my-px mt-4 flex justify-between font-bold">
        <span class="w-fit rounded-md bg-gray-300 px-2"
          >{job.position} at {job.company}</span
        >
        <span>{job.years}</span>
      </p>
      <p class="flex gap-1">{job.description}</p>
    </div>
  {/each}
</section>
