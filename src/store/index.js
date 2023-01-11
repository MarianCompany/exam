import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
  state: {
    programs: null,
    areProgramsLoaded: false,
  },
  getters: {
    getPrograms(state) {
      return state.programs;
    },
    getAreProgramsLoaded(state) {
      return state.areProgramsLoaded;
    }
  },
  mutations: {
    setPrograms(state, payload) {
      state.programs = payload;
    },

    setAreProgramsLoaded(state, payload) {
      state.areProgramsLoaded = payload;
    },
  },
  actions: {
    fetchPrograms({ commit }) {
      axios
          .get('/data/products.json')
          .then((res) => {
            commit('setPrograms', res.data);
            commit('setAreProgramsLoaded', true);
          }).catch((err) => {
            console.log(err);
          });
    },
  },
  modules: {
  }
})
