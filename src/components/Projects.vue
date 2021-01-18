<template>
  <div>
    <div>I am Projects</div>

    <div v-for="project in projects" :key="project.name">
      <div>{{ project.name }}</div>
      <div>{{ project.description }}</div>
      <div>
        <a @click="clickLink(project.github)">github</a> |
        <a @click="clickLink(project.site)">site</a>
      </div>
    </div>
  </div>
</template>

<script>
import data from '../data.json';

export default {
  name: 'Projects',
  methods: {
    clickLink(url) {
      window.open(url, '_blank');
    },
  },
  computed: {
    projects() {
      return data.projects;
    },
  },
};
</script>
