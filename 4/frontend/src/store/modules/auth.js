import axios from 'axios';

const state = {
  user: null,
  error: null
};

const getters = {
  getUser: state => state.user,
  getError: state => state.error
};

const actions = {
  async register({ commit }, userData) {
    try {
      const response = await axios.post('/api/users/register', userData);
      commit('setUser', response.data.user);
      return Promise.resolve();
    } catch (error) {
      commit('setError', error.response.data.message);
      return Promise.reject(error);
    }
  },

  async login({ commit }, credentials) {
    try {
      const response = await axios.post('/api/users/login', credentials);
      commit('setUser', response.data.user);
      return Promise.resolve();
    } catch (error) {
      commit('setError', error.response.data.message);
      return Promise.reject(error);
    }
  },
};

const mutations = {
  setUser: (state, user) => (state.user = user),
  setError: (state, error) => (state.error = error)
};

export default {
  state,
  getters,
  actions,
  mutations
};
