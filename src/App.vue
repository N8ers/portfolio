<template>
  <div id="app" class="dark-gray-background">
    <Home />
  </div>
</template>

<script>
import Home from './components/Home.vue';

export default {
  components: {
    Home,
  },
};
</script>

<style lang="scss">
  @import './scss/main.scss';
</style>
