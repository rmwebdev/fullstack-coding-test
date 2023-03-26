import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../components/Login.vue';
import Register from '../components/Register.vue';
import OrganizationList from '../components/OrganizationList.vue';
import OrganizationForm from '../components/OrganizationForm.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/organizations',
    name: 'OrganizationList',
    component: OrganizationList,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/organizations/new',
    name: 'OrganizationFormCreate',
    component: OrganizationForm,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/organizations/:id/edit',
    name: 'OrganizationFormEdit',
    component: OrganizationForm,
    meta: {
      requiresAuth: true
    }
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('user');
  if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
    next({ name: 'Login' });
  } else {
    next();
  }
});

export default router;
