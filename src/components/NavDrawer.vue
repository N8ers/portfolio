<template app>
  <v-navigation-drawer v-if="drawer" :value="drawer" @input="toggleDrawer($event)" right app>
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
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "NavDrawer",
  components: {},
  data: () => ({}),
  methods: {
    navigationDrawerSelected: function (location) {
      this.$vuetify.goTo(`#${location}`);
      this.$store.dispatch("toggleDrawer", false);
    },
    toggleDrawer: function (value) {
      if (this.$vuetify.breakpoint.width < 1263) {
        this.$store.dispatch("toggleDrawer", value);
      }
    },
  },
  computed: {
    ...mapState({
      drawer: (state) => state.drawerIsOpen,
    }),
  },
};
</script>

<style>
.mt-50 {
  margin-top: 50px;
}
</style>
