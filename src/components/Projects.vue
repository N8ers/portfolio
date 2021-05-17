<template>
  <div id="projects">
    <h1>Projects</h1>

    <v-row>
      <v-col class="d-md-flex justify-left" v-for="cardData in cardsData" :key="cardData.name">
        <ProjectCard :cardData="cardData" />
      </v-col>

      <v-spacer v-if="breakpoint"></v-spacer>
    </v-row>

  </div>
</template>

<script>
import data from '../../data';
import ProjectCard from './ProjectCard';

export default {
  name: 'Projects',
  metaInfo: {
    title: 'Projects'
  },
  components: {
    ProjectCard
  },
  data() {
    return {
      cardsData: data.projects
    };
  },
  methods: { },
  computed: { 
    breakpoint: function () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return false
        case 'sm': return true
        case 'md': return false
        case 'lg': return false
        case 'xl': return false
      }
      return true
    }
  },
};
</script>
