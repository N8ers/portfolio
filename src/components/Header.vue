<template>
  <div>
    <v-app-bar app>       
      <v-toolbar-title>
        <span class="font-weight-medium">Nathan Sheryak</span> 
        <span class="grey--text"> | software developer</span>
      </v-toolbar-title>
    
      <v-spacer></v-spacer>

      <v-app-bar-nav-icon 
        @click="openDrawer" 
        class="d-md-none"
      ></v-app-bar-nav-icon>

      <div v-if="!this.drawer">
        <v-tabs align-with-title class="d-none d-md-flex">
          <v-tab @click="$vuetify.goTo('#about')">About</v-tab>
          <v-tab @click="$vuetify.goTo('#projects')">Projects</v-tab>
          <v-tab @click="$vuetify.goTo('#blogs')">Blogs</v-tab>
          <v-tab @click="$vuetify.goTo('#contact')">Contact</v-tab>
        </v-tabs> 
      </div>

    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'Header',
   data: () => ({
    drawer: false,
    items: ['About', 'Projects', 'Blogs', 'Contact'],
  }),
  methods: {
    navigationDrawerSelected: function (location) {
      this.$vuetify.goTo(`#${location}`)
      this.drawer = false
    },
    openDrawer: function () {
      this.$store.dispatch('toggleDrawer', true)
    }
  },
};
</script>
