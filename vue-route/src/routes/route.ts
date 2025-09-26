import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', redirect: '/dashboard' },
  { path: '/dashboard', component: () => import('../pages/DashboardView.vue') },
  {
    path: '/tasks',
    component: () => import('../pages/tasks/TasksView.vue'),
    children: [
      {
        path: ':id',
        component: () => import('../pages/tasks/TasksDetailsView.vue'),
      },
    ],
  },
  {
    path: '/settings',
    component: () => import('../pages/settings/SettingsView.vue'),
    redirect: '/settings/profile',
    children: [
      {
        path: 'profile',
        component: () => import('../pages/settings/ProfileView.vue'),
      },
      {
        path: 'security',
        component: () => import('../pages/settings/SecurityView.vue'),
      },
    ],
  },
  { path: '/404', component: () => import('../pages/NotFoundView.vue') },
  { path: '/:pathMatch(.*)*', redirect: '/404' },
];

const route = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'router-link--intermediate',
  linkExactActiveClass: 'router-link--active',
});

export default route;
