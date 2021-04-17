import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    drawerIsOpen: false
  },
  mutations: {
    setDrawer: function (state, bool) {
      console.log('MUTATUION')
      state.drawerIsOpen = bool;
    }
  },
  actions: {
    toggleDrawer: function ({ commit, state }, newValue) {
      console.log('action!')

      commit('setDrawer', newValue)
    }
  },
  modules: {
  },
});
