<template>
  <div>

    <Header />
    <About />
    <Projects />


    <Blogs />
    <Contact />

  </div>
</template>

<script>
import Projects from './Projects.vue';
import Contact from './Contact.vue';
import Header from './Header.vue';
import About from './About.vue';
import Blogs from './Blogs.vue';

export default {
  name: 'Home',
  components: {
    Projects,
    Contact,
    Header,
    About,
    Blogs
  },
  data() {
    return {
      darkMode: false,
    };
  },
};
</script>
