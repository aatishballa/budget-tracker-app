import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      alias: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/DashboardPage.vue'),
      meta: {
        title: 'Dashboard',
        layout: 'default',
        requiresAuth: true
      }
    },
    {
      path: '/activity',
      name: 'activity',
      component: () => import('../views/ActivityPage.vue'),
      meta: {
        title: 'Activity',
        layout: 'default',
        requiresAuth: true
      }
    },
    {
      path: '/add',
      name: 'Add',
      component: () => import('../views/ReportsPage.vue'),
      meta: {
        title: 'Add',
        layout: 'default',
        requiresAuth: true
      }
    },
    {
      path: '/reports',
      name: 'reports',
      component: () => import('../views/ReportsPage.vue'),
      meta: {
        title: 'Reports',
        layout: 'default',
        requiresAuth: true
      }
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('../views/SettingsPage.vue'),
      meta: {
        title: 'Settings',
        layout: 'default',
        requiresAuth: true
      }
    }
  ]
})

export default router
