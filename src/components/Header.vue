<template>
  <div>
    <v-app-bar app>
      <v-toolbar-title>
        <span class="font-weight-medium">Nathan Sheryak</span>
        <span v-if="this.$vuetify.breakpoint.width > 450" class="grey--text">
          | software developer</span
        >
        <span v-else class="grey--text"> | software dev</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-app-bar-nav-icon @click="openDrawer" class="d-md-none"></v-app-bar-nav-icon>

      <div v-if="!this.drawer">
        <v-tabs align-with-title class="d-none d-md-flex" background-color="header">
          <v-tab @click="navigationDrawerSelected('about')">About</v-tab>
          <v-tab @click="navigationDrawerSelected('projects')">Projects</v-tab>
          <v-tab @click="navigationDrawerSelected('blogs')">Blogs</v-tab>
          <v-tab @click="navigationDrawerSelected('contact')">Contact</v-tab>
        </v-tabs>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Header",
  metaInfo: {
    title: "Header",
  },
  data: () => ({
    drawer: false,
    sections: ["about", "projects", "blogs", "contact"],
  }),
  methods: {
    navigationDrawerSelected: function (location) {
      this.$vuetify.goTo(`#${location}`);
      this.drawer = false;
    },
    openDrawer: function () {
      this.$store.dispatch("toggleDrawer", true);
    },
  },
};
</script>
