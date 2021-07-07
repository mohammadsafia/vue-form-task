import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';
import Welcome from '../components/Welcome';
import TheLogin from '../components/auth/TheLogin';
import TheRegister from '../components/auth/TheRegister';
import TheHome from '../components/TheHome';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: TheHome
    },
    {
        path: '/welcome', component: Welcome,
        meta: {
            requiresAuth: true,
        },
    },
    { path: '/login', component: TheLogin },
    { path: '/register', component: TheRegister },
];
const router = new VueRouter({ mode: 'history', routes });
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        const token = store.state.accessToken;
        if (!token) {
            next({ path: '/login' });
        }
        else {
            next();
        }
    }
    next();
});

export default router;
