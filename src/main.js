import Vue from 'vue';
import App from './App.vue';
import router from './routers/router';
import store from './store'
import '@/assets/scss/main.scss';

Vue.config.productionTip = false;


new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
})
