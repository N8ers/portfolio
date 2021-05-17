<template>
  <div id="contact">
    <h1>Contact</h1>
    <p>Please reach out if you're interested in learning more about me and my work</p>
    <div class="text-center">
      <v-btn 
        v-for="icon in icons" 
        :key="icon.name" 
        :href="icon.url" 
        target="_blank" 
        class="mx-4" 
        icon
      >
        <v-icon size="24px">
          {{ icon.name }}
        </v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  metaInfo: {
    title: 'Contact'
  },
  data: () => ({
    icons: [
      { name: 'mdi-github', url: 'https://github.com/N8ers' },
      { name: 'mdi-linkedin', url: 'https://www.linkedin.com/in/nathan-sheryak/' }
    ],
  }),
};
</script>
