<template>
  <div>
    <h3 class="cream header ml-20">Blogs</h3>
    <div class="grid-container-blog">
      <div
        v-for="blog in blogs"
        :key="blog.name"
        class="green-gray-background grid-container-card-blog">
        <div class="align-left pointer" @click="openBlogInNewTab(blog.url)">
          <h2>{{ blog.name }}</h2>
          <div>{{ blog.description }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from '../../data';

export default {
  name: 'Blogs',
  computed: {
    blogs() {
      return data.blogs;
    },
  },
  methods: {
    openBlogInNewTab(url) {
      alert(url);
    },
  },
};
</script>
