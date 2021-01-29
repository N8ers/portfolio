<template>
  <div>
    <div class="flex-container-portfolio">
      <h3 class="cream flex-header">Portfolio</h3>
      <div
        v-for="(project) in projects"
        :key="project.name"
        class="green-gray-background flex-container-card"
        >
        <div class="grid-project-card">
          <div>
            <div class="temp-img">
              <img v-if="project.image" :src="'../../projects/' + project.image" class="image" />
            </div>
          </div>

          <div class="align-left">
            <h2>{{ project.name }}</h2>
            <div>{{ project.description }}</div>
            <div class="portfolio-links">
              <a @click="clickLink(project.github)" class="pointer">github</a> |
              <a @click="clickLink(project.site)" class="pointer">site</a>
            </div>
          </div>
        </div>
      </div>
      <div v-if="oddNumberOfProjects" class="flex-container-card-empty">empty cell</div>
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
    lastCartIsOdd(index) {
      const isLastProject = !!(index === (this.projects.length - 1));
      const lastProjectIsOdd = !!(index % 2 === 0);
      return isLastProject && lastProjectIsOdd ? 'flex-container-last-odd-card' : null;
    },
  },
  computed: {
    projects() {
      return data.projects;
    },
    oddNumberOfProjects() {
      return this.projects.length % 2 !== 0;
    },
  },
};
</script>
