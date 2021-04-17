<template>

<div>
  <v-app-bar app>
        
    <v-toolbar-title>Nathan Sheryak</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-app-bar-nav-icon 
      @click="drawer = true" 
      class="d-flex d-sm-none"
    ></v-app-bar-nav-icon>
  
      <!-- NAV BAR -->
      <template v-slot:extension>
        <v-tabs v-model="tab" align-with-title class="d-none d-sm-flex">
          <v-tabs-slider color="yellow"></v-tabs-slider>
          <v-tab v-for="item in items" :key="item">
            {{ item }}
          </v-tab>
        </v-tabs>
      </template>
      <!-- NAV BAR -->

    </v-app-bar>



    <!-- EXPANDED HAMBURGER -->
    <v-navigation-drawer v-model="drawer" absolute temporary right>
      <v-list nav dense>
        <v-list-item-group>
          <v-list-item v-for="(item, index) in sections" :key="item">
            <v-list-item-title @click="tab = index">hello2! {{ item }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <!-- EXPANDED HAMBURGER -->

</div>
  <!-- <v-app-bar color="" dense dark fixed app> -->

    <!-- <v-app-bar-title>Nathan Sheryak</v-app-bar-title> -->

    <!-- <v-spacer></v-spacer> -->

    <!-- <v-app-bar-nav-icon 
      @click="drawer = true" 
      class="d-flex d-sm-none"
    ></v-app-bar-nav-icon> -->

    <!-- <v-navigation-drawer
      v-model="drawer"
      absolute
      bottom
      temporary
      right
    >
      <v-list nav dense>

        <v-list-item-group>
          <v-list-item>
            <v-list-item-title @click="navigationDrawerSelected('about')">About</v-list-item-title>
            <v-list-item-title @click="navigationDrawerSelected('projects')">Projects</v-list-item-title>
            <v-list-item-title @click="navigationDrawerSelected('blogs')">Blogs</v-list-item-title>
            <v-list-item-title @click="navigationDrawerSelected('contact')">Contact</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer> -->

    <!-- <div v-if="!this.drawer">
      <v-tabs align-with-title class="d-none d-sm-flex">
        <v-tab @click="$vuetify.goTo('#about')">About</v-tab>
        <v-tab @click="$vuetify.goTo('#projects')">Projects</v-tab>
        <v-tab @click="$vuetify.goTo('#blogs')">Blogs</v-tab>
        <v-tab @click="$vuetify.goTo('#contact')">Contact</v-tab>
      </v-tabs> 
    </div> -->

  <!-- </v-app-bar> -->
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
    sections: [
      'About', 'Projects', 'Blogs', 'Contact'
    ]
  }),
  methods: {
    navigationDrawerSelected: function (location) {
      this.$vuetify.goTo(`#${location}`)
      this.drawer = false
    }
  }
};
</script>
