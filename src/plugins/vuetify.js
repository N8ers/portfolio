import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

import colors from 'vuetify/lib/util/colors'
import '../scss/main.scss'

Vue.use(Vuetify);

export default new Vuetify({
  breakpoint: {
    thresholds: {
      xs: 790,
      sm: 960,
      md: 1280,
      lg: 1920,
    }
  },
  theme: {
    themes: {
      light: {
        primary: colors.red.darken1,
        secondary: colors.red.lighten4,
        accent: colors.indigo,
        header: colors.grey.lighten4
      },
      dark: {
        primary: colors.pink.accent1,
        secondary: colors.pink.accent2,
        accent: colors.pink.accent3,
        header: '#272727'
      }
    },
  },
});
