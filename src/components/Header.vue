<template>
  <v-app-bar color="deep-purple accent-4" dense dark fixed app>

    <v-app-bar-title>Nathan Sheryak</v-app-bar-title>

    <v-spacer></v-spacer>

    <div>
      <v-tabs>
        <v-tab @click="$vuetify.goTo('#about')">About</v-tab>
        <v-tab @click="$vuetify.goTo('#projects')">Projects</v-tab>
        <v-tab @click="$vuetify.goTo('#blogs')">Blogs</v-tab>
        <v-tab @click="$vuetify.goTo('#contact')">Contact</v-tab>
      </v-tabs> 
    </div>

  </v-app-bar>
</template>

<script>
export default {
  name: 'Header',
};
</script>
