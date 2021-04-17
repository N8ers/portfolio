<template>
  <v-navigation-drawer :value="drawer" @input="toggleDrawer($event)" right absolute>
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
import { mapState } from 'vuex'

export default {
  name: 'NavDrawer',
  components: {
  },
  data: () => ({ }),
  methods: {
    navigationDrawerSelected: function (location) {
      this.$vuetify.goTo(`#${location}`)
      this.$store.dispatch('toggleDrawer', false)
    },
    toggleDrawer: function (value) {
      console.log('drawer: ', this.drawer)
      console.log('value: ', value)
      this.$store.dispatch('toggleDrawer', value)
    }
  },
  computed: {
    ...mapState({
      drawer: state => state.drawerIsOpen
    })


    // drawer: {
    //   get () {
    //     console.log('GET')
    //     let value = this.$store.state.drawerIsOpen
    //     // this.lastDrawerValue = value
    //     return value
    //   },
    //   set (newValue) {
    //     console.log('SET ', newValue)
    //     if (newValue !== this.lastDrawerValue) {
    //       return this.$store.dispatch('toggleDrawer', newValue)
    //     }
    //   }
    // } 
  }
};
</script>
