<template>

    <div v-if="gridDemo" class="grid-container">
      <div class="green-gray-background">HEY 1</div>
      <div class="blue-gray-background">HEY 2</div>
    </div>

    <div v-else>
      <div class="grid-container-header mb-5">
        <div class="green-gray-background grid-item">
          <Header class="cream" />
        </div>
    </div>
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
  data() {
    return {
      gridDemo: false,
    };
  },
};
</script>
