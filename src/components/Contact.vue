<template>
  <div class="green-gray-background">
    <!-- <div class="flex-container-portfolio">
      <h3 class="cream flex-header">Contact</h3>
      <div class="flex-container-card">
        <div class="contact-info">
          If you want to get in touch or to see more projects, <br> feel free to reach out on
          <a href="https://www.linkedin.com/in/nathan-sheryak/" target="_blank">LinkedIn</a>
          or visit my
          <a href="https://github.com/N8ers" target="_blank">GitHub</a>
        </div>
      </div>
    </div> -->

    <hr>


    <v-footer
      dark
      padless
    >
      <v-card
        flat
        tile
        class="indigo lighten-1 white--text text-center"
      >
        <h1>Contact</h1>
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4 white--text"
            icon
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="white--text pt-0">
          Hi
        </v-card-text>

      </v-card>
    </v-footer>

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
