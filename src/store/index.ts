import { createStore } from "vuex";

export default createStore({
  // State: data used throughout the app
  state: {
    counter: 0,
    isAuthenticated: false,
  },

  // Getters: methods to access state data
  getters: {
    getCounter(state) {
      return state.counter;
    },
    isAuthenticated(state) {
      return state.isAuthenticated;
    },
  },

  // Mutations: modify the state data
  mutations: {
    incrementCounter(state) {
      state.counter++;
    },
    decrementCounter(state) {
      state.counter--;
    },
    setAuthStatus(state, status) {
      state.isAuthenticated = status;
    },
  },

  // Actions: commit mutations asynchronously or perform logic
  actions: {
    async login({ commit }) {
      // Simulate an API call
      setTimeout(() => {
        commit("setAuthStatus", true);
      }, 1000);
    },
    logout({ commit }) {
      commit("setAuthStatus", false);
    },
    incrementCounterAsync({ commit }) {
      setTimeout(() => {
        commit("incrementCounter");
      }, 1000);
    },
  },
});
