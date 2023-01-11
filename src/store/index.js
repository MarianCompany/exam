import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
  state: {
    programs: null,
    areProgramsLoaded: false,
    reviews: null,
    areReviewsLoaded: false,
  },
  getters: {
    getPrograms(state) {
      return state.programs;
    },
    getAreProgramsLoaded(state) {
      return state.areProgramsLoaded;
    },
    getReviews(state) {
      return state.reviews;
    },
    getAreReviewsLoaded(state) {
      return state.areReviewsLoaded;
    },
  },
  mutations: {
    setPrograms(state, payload) {
      state.programs = payload;
    },
    setAreProgramsLoaded(state, payload) {
      state.areProgramsLoaded = payload;
    },
    setReviews(state, payload) {
      state.reviews = payload;
    },
    setAreReviewsLoaded(state, payload) {
      state.areReviewsLoaded = payload;
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
    fetchReviews({ commit }) {
      axios
          .get('/data/reviews.json')
          .then((res) => {
            commit('setReviews', res.data);
            commit('setAreReviewsLoaded', true);
          }).catch((err) => {
            console.log(err);
          });
    },
  },
});