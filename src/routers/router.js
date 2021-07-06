import Vue from 'vue';
import VueRouter from 'vue-router';

import TheHome from '../components/TheHome';
import TheLogin from '../components/auth/TheLogin';
import TheRegister from '../components/auth/TheRegister';

Vue.use(VueRouter);

const routes = [
    { path: '/', component: TheHome },
    { path: '/login', component: TheLogin },
    { path: '/register', component: TheRegister },
];
export default new VueRouter({ mode: 'history', routes });
