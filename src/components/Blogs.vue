<template>
  <div>
    <div class="flex-container-portfolio">
      <h3 class="cream flex-header">Blogs</h3>
      <div
        v-for="blog in blogs"
        :key="blog.name"
        class="green-gray-background flex-container-card">
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
