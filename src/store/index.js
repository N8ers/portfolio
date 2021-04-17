import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    drawerIsOpen: false
  },
  mutations: {
    setDrawer: function (state, bool) {
      state.drawerIsOpen = bool;
    }
  },
  actions: {
    toggleDrawer: function ({ commit }, newValue) {
      commit('setDrawer', newValue)
    }
  },
  modules: {
  },
});
