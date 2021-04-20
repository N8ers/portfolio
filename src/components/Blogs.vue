<template>
  <div id="blogs">
    <h1>Blogs</h1>
    
    <v-row>
      <v-col class="d-flex justify-left" v-for="cardData in cardsData" :key="cardData.name">
        <BlogCard :cardData="cardData" />
      </v-col>
    </v-row>
    
  </div>
</template>

<script>
import data from '../../data';
import BlogCard from './BlogCard';

export default {
  name: 'Blogs',
  components: {
    BlogCard
  },
  data() {
    return {
      cardsData: data.blogs
    };
  },
  methods: { },
  computed: { }
};
</script>
