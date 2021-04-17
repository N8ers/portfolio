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
  created() {
    console.log(`
      /////////////////////////////////////////////////////////////////////////////
      // Hello There!                                                            //
      // Welcome to my portfolio.                                                //
      // Feel free to look around and see some of my work.                       //
      // The site is still under some construction, so please ignore the errors! //
      //                                                                         //
      // I hope to be in touch, Nathan.                                           //
      /////////////////////////////////////////////////////////////////////////////
    `)
  }
};
</script>

<style>
.body-content {
  max-width: 1250px;
  margin: 20px auto;
  padding: 0px 50px;
}
</style>