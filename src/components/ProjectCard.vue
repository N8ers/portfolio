<template>
  <div>
    <v-card
      class="mx-auto"
      max-width="350"
    >
      <v-img
        class="white--text align-end grey lighten-1"
        height="200px"
        :src="require(`@/assets/projects/${cardData.image}`)"
      >
        <v-card-title class="grey lighten-1">{{ cardData.name }}</v-card-title>
      </v-img>


      <v-card-text class="text--primary">
        <div>{{ cardData.description }}</div>
      </v-card-text>

      <v-card-actions>
        <v-btn color="orange" :href="cardData.github" target="_blank">
          GitHub
        </v-btn>

        <v-btn color="orange" :href="cardData.site" target="_blank">
          Demo
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>

export default {
  name: 'ProjectCard',
  props: {
    cardData: {
      type: Object,
      default: () => {}
    }
  },
  methods: { },
  computed: { },
};
</script>
