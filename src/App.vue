<template>
  <v-app color="deep-purple">
    
    <Header />

    <!-- Manage this better Nathan -->
    <br>
    <br>
    <br>

    <div class="body-content">
      <About />
      <Projects />
      <Blogs />
      <Contact />
    </div>

  </v-app>
</template>

<script>
import Header from './components/Header.vue';
import Projects from './components/Projects.vue';
import Blogs from './components/Blogs.vue';
import Contact from './components/Contact.vue';
import About from './components/About.vue';

export default {
  name: 'App',

  components: {
    Header,
    Projects,
    Blogs,
    Contact,
    About
  },

  data: () => ({
    //
  }),
};
</script>

<style>
.body-content {
  max-width: 1250px;
  margin: 20px auto;
  padding: 0px 50px;
}
</style>