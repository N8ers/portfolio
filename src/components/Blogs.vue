<template>
  <div id="blogs">
    <h1>Blogs</h1>

    <v-row>
      <v-col class="d-md-flex justify-left" v-for="cardData in cardsData" :key="cardData.name">
        <BlogCard :cardData="cardData" />
      </v-col>

      <v-col v-if="breakpoint">
        <v-spacer></v-spacer>
      </v-col>
    </v-row>
    
  </div>
</template>

<script>
import data from '../../data';
import BlogCard from './BlogCard';

export default {
  name: 'Blogs',
  metaInfo: {
    title: 'Blogs'
  },
  components: {
    BlogCard
  },
  data() {
    return {
      cardsData: data.blogs
    };
  },
  methods: { },
  computed: { 
    breakpoint: function () {
      let width = this.$vuetify.breakpoint.width
      if (width < 0 || width > 1162) {
        return true
      } else {
        return false
      }
    }
  }
};
</script>
