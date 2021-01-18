<template>
  <div>
    <Header />
    <Projects />
    <Blogs />
    <Contact />
  </div>
</template>

<script>
import Header from './Header.vue';
import Contact from './Contact.vue';
import Projects from './Projects.vue';
import Blogs from './Blogs.vue';

export default {
  name: 'Home',
  components: {
    Header,
    Projects,
    Blogs,
    Contact,
  },
};
</script>
