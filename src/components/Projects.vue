<template>
  <div>
    <h3 class="cream header ml-20">Portfolio</h3>
    <div class="grid-container-portfolio">
      <div
        v-for="project in projects"
        :key="project.name"
        class="green-gray-background grid-container-card">
        <div>
          <div class="temp-img"></div>
        </div>

        <div class="align-left">
          <h2>{{ project.name }}</h2>
          <div>{{ project.description }}</div>
          <div>
            <a @click="clickLink(project.github)" class="pointer">github</a> |
            <a @click="clickLink(project.site)" class="pointer">site</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from '../../data';

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
