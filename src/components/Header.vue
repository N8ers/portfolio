<template>
  <v-app-bar color="deep-purple accent-4" dense dark>

    <v-app-bar-title>Nathan Sheryak</v-app-bar-title>

    <v-spacer></v-spacer>

    <div>
      <v-tabs>
        <v-tab>About</v-tab>
        <v-tab>Projects</v-tab>
        <v-tab>Blogs</v-tab>
        <v-tab>Contact</v-tab>
      </v-tabs> 
    </div>

  </v-app-bar>
</template>

<script>
export default {
  name: 'Header',
};
</script>
