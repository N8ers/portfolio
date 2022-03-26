<template>
  <div>
    <v-card class="mx-auto d-flex flex-column" width="350" height="350">
      <v-img
        class="white--text align-end grey lighten-1"
        height="200px"
        :src="require(`@/assets/projects/${cardData.image}`)"
      >
        <v-card-title class="grayOpacity semi-transparent">{{ cardData.name }}</v-card-title>
      </v-img>

      <v-card-text class="text--primary h-76">
        <div>{{ cardData.description }}</div>
      </v-card-text>

      <v-spacer></v-spacer>

      <v-card-actions>
        <v-btn :href="cardData.github" target="_blank"> GitHub </v-btn>

        <v-btn v-if="cardData.site" :href="cardData.site" target="_blank"> Demo </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "ProjectCard",
  props: {
    cardData: {
      type: Object,
      default: () => {},
    },
  },
  methods: {},
  computed: {},
};
</script>

<style lang="scss">
.semi-transparent {
  background-color: rgb(189, 189, 189, 0.8);
}
</style>
