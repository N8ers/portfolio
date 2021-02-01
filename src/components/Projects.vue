<template>
  <div class="portfolio-container">
    <div class="flex-container-portfolio">
      <!-- <h3 class="flex-header">Portfolio</h3> -->
      <h3 class="cream flex-header">Portfolio {{screenWidth}}</h3>
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
              <a :href="project.github">github</a> |
              <a :href="project.site">site</a>
            </div>
          </div>
        </div>
      </div>
      <!-- <div v-if="oddNumberOfProjects" class="flex-container-card-empty">empty cell</div> -->
      <div v-if="renderEmptyCellOne" class="flex-container-card-empty">empty cell</div>
      <div v-if="renderEmptyCellTwo" class="flex-container-card-empty">empty cell</div>
    </div>
  </div>
</template>

<script>
import data from '../../data';

export default {
  name: 'Projects',
  props: {
    screenWidth: {
      type: Number,
      default: null,
    },
  },
  methods: {
    // clickLink(url) {
    //   window.open(url, '_blank');
    // },
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
    renderEmptyCellOne() {
      // identify number of cards per page width
      let cardsPerRow;
      if (this.screenWidth < '1200px') {
        cardsPerRow = 1;
      } else if (this.screenWidth < '1201px' && this.screenWidth > '1800px') {
        cardsPerRow = 2;
      } else {
        cardsPerRow = 3;
      }

      // are we missing some?
      const numberOfCards = this.projects.length;

      if (numberOfCards % cardsPerRow === 0) {
        return false;
      }

      return false;
    },
    renderEmptyCellTwo() {
      return false;
    },
  },
};
</script>
