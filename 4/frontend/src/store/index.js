import Vue from 'vue';
import Vuex from 'vuex';
import auth from './modules/auth';
import organization from './modules/organization';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    organization
  }
});
