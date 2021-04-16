<template>
  <v-app>
    
    <Header />

    <div>
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
