import { createRouter, createWebHistory } from 'vue-router';
import { isLoggedIn } from '../auth';

const routes = [
  { path: '/', redirect: '/dashboard', meta: { requiresAuth: true } },
  {
    path: '/dashboard',
    component: () => import('../pages/DashboardView.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/tasks',
    component: () => import('../pages/tasks/TasksView.vue'),
    children: [
      {
        path: ':id',
        component: () => import('../pages/tasks/TasksDetailsView.vue'),
        meta: { requiresAuth: true },
      },
    ],
    meta: { requiresAuth: true },
  },
  {
    path: '/settings',
    meta: { requiresAuth: true },
    component: () => import('../pages/settings/SettingsView.vue'),
    redirect: '/settings/profile',
    children: [
      {
        path: 'profile',
        component: () => import('../pages/settings/ProfileView.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: 'security',
        component: () => import('../pages/settings/SecurityView.vue'),
        meta: { requiresAuth: true },
      },
    ],
  },
  { path: '/login', component: () => import('../pages/LoginView.vue') },
  { path: '/404', component: () => import('../pages/NotFoundView.vue') },
  { path: '/:pathMatch(.*)*', redirect: '/404' },
];

const route = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'router-link--intermediate',
  linkExactActiveClass: 'router-link--active',
});

route.beforeEach((to) => {
  if (to.meta.requiresAuth && !isLoggedIn.value) {
    return '/login';
  }

  if (to.fullPath === '/login' && isLoggedIn.value) {
    return '/';
  }
});

export default route;
