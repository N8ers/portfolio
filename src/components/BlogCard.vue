<template>
  <div>
    <v-card class="mx-auto" width="350">
      <v-card-title class="grey lighten-1">{{ cardData.name }}</v-card-title>

      <v-card-text class="text--primary">
        <div>{{ cardData.description }}</div>
      </v-card-text>

      <v-card-actions>
        <v-btn :href="cardData.url" target="_blank">
          Link
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>

export default {
  name: 'BlogCard',
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
