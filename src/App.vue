<template>
  <div class="app">
    <Header :name="resume.name" :title="resume.title" :contact="resume.contact" />
    <Summary :summary="resume.summary" />
    <Skills :skills="resume.skills" />
    <Experience :experience="resume.experience" />
    <Education :education="resume.education" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import resumeData from '@/resumeData.json';
import { type ResumeData } from '@types/resume';

import Header from '@components/Header.vue';
import Summary from '@components/Summary.vue';
import Skills from '@components/Skills.vue';
import Experience from '@components/Experience.vue';
import Education from '@components/Education.vue';

export default defineComponent({
  name: 'App',
  components: {
    Header,
    Summary,
    Skills,
    Experience,
    Education
  },
  data() {
    return {
      resume: resumeData as ResumeData
    };
  }
});
</script>
