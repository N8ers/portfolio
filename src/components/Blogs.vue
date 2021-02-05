<template>
  <div>
    <div class="flex-container-portfolio">
      <h3 class="cream flex-header">Blogs</h3>
      <div
        v-for="blog in blogs"
        :key="blog.name"
        class="green-gray-background flex-container-card">
        <a :href="blog.url" class="link">
          <div class="align-left pointer">
            <h2>{{ blog.name }}</h2>
            <div>{{ blog.description }}</div>
          </div>
        </a>
      </div>
      <div v-if="oddNumberOfBlogs" class="flex-container-card-empty">empty cell</div>
    </div>
  </div>
</template>

<script>
import data from '../../data';

export default {
  name: 'Blogs',
  methods: {
    openBlogInNewTab(url) {
      alert(url);
    },
  },
  computed: {
    blogs() {
      return data.blogs;
    },
    oddNumberOfBlogs() {
      return this.blogs.length % 2 !== 0;
    },
  },
};
</script>
