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
    <Projects :screenWidth="screenWidth" />
    <Blogs />
    <Contact class="cream h-100" />
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
      screenWidth: null,
    };
  },
  methods: {
    myEventHandler(e) {
      console.log('e ', e);
      this.screenWidth = e.srcElement.innerWidth;
    },
  },
  created() {
    this.screenWidth = window.innerWidth;
    window.addEventListener('resize', this.myEventHandler);
  },
  destroyed() {
    window.removeEventListener('resize', this.myEventHandler);
  },
};
</script>
