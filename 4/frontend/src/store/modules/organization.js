import axios from 'axios';

const state = {
  organizations: [],
  error: null
};

const getters = {
  getOrganizations: state => state.organizations,
  getError: state => state.error
};

const actions = {
  async createOrganization({ commit }, organizationData) {
    try {
      const response = await axios.post('/api/organizations', organizationData);
      commit('addOrganization', response.data.organization);
      return Promise.resolve();
    } catch (error) {
      commit('setError', error.response.data.message);
      return Promise.reject(error);
    }
  },

  async updateOrganization({ commit }, organizationData) {
    try {
      const response = await axios.put(`/api/organizations/${organizationData.id}`, organizationData);
      commit('updateOrganization', response.data.organization);
      return Promise.resolve();
    } catch (error) {
      commit('setError', error.response.data.message);
      return Promise.reject(error);
    }
  },

  async fetchOrganizations({ commit }) {
    try {
      const response = await axios.get('/api/organizations');
      commit('setOrganizations', response.data.organizations);
      return Promise.resolve();
    } catch (error) {
      commit('setError', error.response.data.message);
      return Promise.reject(error);
    }
  }
};

const mutations = {
  setOrganizations: (state, organizations) => (state.organizations = organizations),
  addOrganization: (state, organization) => state.organizations.push(organization),
  updateOrganization: (state, updatedOrganization) => {
    const index = state.organizations.findIndex(org => org.id === updatedOrganization.id);
    if (index !== -1) {
      state.organizations.splice(index, 1, updatedOrganization);
    }
  },
  setError: (state, error) => (state.error = error)
};

export default {
  state,
  getters,
  actions,
  mutations
};
