<template>
  <div v-if="blogs.length">I Am Blogs {{ blogs }}</div>
</template>

<script>
import data from '../data.json';

export default {
  name: 'Blogs',
  computed: {
    blogs() {
      return data.blogs;
    },
  },
};
</script>
