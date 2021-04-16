<template>
  <v-footer dark padless id="contact">
    <v-card flat tile class="indigo lighten-1 white--text text-center">
      <h1>Contact</h1>
      <v-card-text>
        <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>
    </v-card>
  </v-footer> 
</template>

<script>
export default {
  name: 'Contact',
  data: () => ({
    icons: [
      'mdi-github',
      'mdi-linkedin'
    ],
  }),
};
</script>
