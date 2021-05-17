<template>
  <v-app color="deep-purple">
    
    <Header />
    <br>
    <br>
    <NavDrawer />
    
    <div class="body-content">
      <v-col>
        <v-container class="px-0 text-right" fluid>
          <v-row class="justify-end">
            <v-spacer></v-spacer>
            <div>
              <p class="mb-0">{{ themeLabel }}</p>
              <v-switch class="mt-0" :value="darkThemeEnabled" @change="toggleTheme"></v-switch>
            </div>
          </v-row>
        </v-container>
      </v-col>

      <About />
      <Projects class="mt-5" />
      <Blogs class="mt-5" />
      <Contact class="mt-5" />
    </div>

  </v-app>
</template>

<script>
import Header from './components/Header.vue';
import Projects from './components/Projects.vue';
import Blogs from './components/Blogs.vue';
import Contact from './components/Contact.vue';
import About from './components/About.vue';
import NavDrawer from './components/NavDrawer.vue';

export default {
  name: 'App',
  metaInfo: {
    title: 'Nathan Sheryak Software Developer',
    titleTemplate: '%s | Nathan Sheryak Portfolio',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'description', content: 'An example Vue application with vue-meta.' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]
  },
  components: {
    Header,
    Projects,
    Blogs,
    Contact,
    About,
    NavDrawer
  },
  data: () => ({
    darkThemeEnabled: false
  }),
  methods: {
    toggleTheme: function () {
      this.darkThemeEnabled = !this.darkThemeEnabled
      this.$vuetify.theme.dark = this.darkThemeEnabled
    }
  },
  computed: {
    themeLabel: function () {
      if (this.darkThemeEnabled) {
        return "toggle light theme"
      } 
      return "toggle dark theme"
    }
  },
  created() {
    console.log(`
      ////////////////////////////////////////////////////////////////////////
      // Hello There!                                                       //
      // Welcome to my portfolio.                                           //
      // Feel free to look around and see some of my work.                  //
      // The site is still under construction, so please ignore any errors! //
      //                                                                    //
      // I hope to be in touch, Nathan.                                     //
      ////////////////////////////////////////////////////////////////////////
    `)
  }
};
</script>

<style lang="scss">
.body-content {
  max-width: 1250px;
  margin: 20px auto;
  padding: 0px 25px;
}

$color-pack: false;
@import './scss/main.scss';
</style>