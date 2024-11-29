<script>
  import resumeData from "./resumeData.json";
  import Header from "./components/Header.svelte";
  import Summary from "./components/Summary.svelte";
  import Experience from "./components/Experience.svelte";
  import Education from "./components/Education.svelte";
  import Skills from "./components/Skills.svelte";
</script>
<main>
  <Header name={resumeData.name} title={resumeData.title} contact={resumeData.contact} />
  <Summary summary={resumeData.summary} />
  <Skills skills={resumeData.skills} />
  <Experience experience={resumeData.experience} />
  <Education education={resumeData.education} />
</main>
