import Vue from 'vue';
import App from './App.vue';
import router from './routers/router';
import '@/assets/scss/main.scss';

Vue.config.productionTip = false;


new Vue({
    el: '#app',
    router,
    render: h => h(App),
})
