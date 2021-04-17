<template>
  <div id="contact">
    <h1>About</h1>
    <p>Please reach out if you're interested in learning more about me and my work</p>
    <v-card-text>
        <v-btn v-for="icon in icons" :key="icon" class="mx-4" icon>
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>
  </div>
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
