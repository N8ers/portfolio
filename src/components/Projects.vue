<template>
  <div id="projects">
    <h1>Projects</h1>

    <v-row>
      <v-col class="d-md-flex justify-left" v-for="cardData in cardsData" :key="cardData.name">
        <ProjectCard :cardData="cardData" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import data from "../../data";
import ProjectCard from "./ProjectCard";

export default {
  name: "Projects",
  metaInfo: {
    title: "Projects",
  },
  components: {
    ProjectCard,
  },
  data() {
    return {
      cardsData: data.projects,
    };
  },
  methods: {},
  computed: {},
};
</script>
