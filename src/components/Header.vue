<template>
  <div>
    <v-app-bar app>       
      <v-toolbar-title>
        <span class="font-weight-medium">Nathan Sheryak</span> 
        <span class="grey--text"> | software developer</span>
      </v-toolbar-title>
    
      <v-spacer></v-spacer>

      <v-app-bar-nav-icon 
        @click="drawer = true" 
        class="d-flex d-md-none"
      ></v-app-bar-nav-icon>

      <v-navigation-drawer v-model="drawer" app absolute right>
        <v-list>
          <v-list-item @click="navigationDrawerSelected('about')">
              <v-list-item-content>
                  <v-list-item-title class="primary--text">About</v-list-item-title>
              </v-list-item-content>
          </v-list-item>
          <v-list-item @click="navigationDrawerSelected('projects')">
              <v-list-item-content>
                  <v-list-item-title class="primary--text">Projects</v-list-item-title>
              </v-list-item-content>
          </v-list-item>
          <v-list-item @click="navigationDrawerSelected('blogs')"> 
              <v-list-item-content>
                  <v-list-item-title class="primary--text">Blogs</v-list-item-title>
              </v-list-item-content>
          </v-list-item>
          <v-list-item @click="navigationDrawerSelected('contact')">
              <v-list-item-content>
                  <v-list-item-title class="primary--text">Contact</v-list-item-title>
              </v-list-item-content>
          </v-list-item>
        </v-list> 
      </v-navigation-drawer>

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
    tab: null,
    items: [
      'About', 'Projects', 'Blogs', 'Contact'
    ],
  }),
  methods: {
    navigationDrawerSelected: function (location) {
      this.$vuetify.goTo(`#${location}`)
      this.drawer = false
    }
  }
};
</script>
