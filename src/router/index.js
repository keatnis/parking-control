import { createRouter, createWebHistory } from 'vue-router';

import { useAuthStore } from '@/stores';
import { DasboardView, LoginView } from '../views';

export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    linkActiveClass: 'active',
    routes: [
        { path: '/', component: DasboardView },
        { path: '/login', component: LoginView }
    ]
});

router.beforeEach(async (to) => {
    // redirect to login page if not logged in and trying to access a restricted page
    const publicPages = ['/login'];
    const authRequired = !publicPages.includes(to.path);
    const auth = useAuthStore();

    if (authRequired && !auth.user) {
        auth.returnUrl = to.fullPath;
        return '/login';
    }
});


// {
//   // Document title tag
//   // We combine it with defaultDocumentTitle set in `src/main.js` on router.afterEach hook
//   meta: {
//     title: 'Dashboard'
//   },
//   path: '/dashboard',
//   name: 'dashboard',
//   component: DasboardView
// },