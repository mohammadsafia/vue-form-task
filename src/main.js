import Vue from 'vue';
import App from './App.vue';
import VueSweetalert2 from 'vue-sweetalert2';
import router from './routers/router';
import store from './store';
import 'sweetalert2/dist/sweetalert2.min.css';
import '@/assets/scss/main.scss';

const options = {
    confirmButtonColor: 'rgb(69, 23, 83)',
    cancelButtonColor: 'rgb(232, 80, 91)',
};

Vue.use(VueSweetalert2, options);

Vue.config.productionTip = false;

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
});
