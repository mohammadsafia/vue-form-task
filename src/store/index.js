import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from "vuex-persist";

import state from "./state";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

Vue.use(Vuex);

const vuexLocalStorage = new VuexPersist({
    key: "vuex",
    storage: window.localStorage
});

export default new Vuex.Store({
    getters,
    mutations,
    state,
    actions,
    plugins: [vuexLocalStorage.plugin],
    strict: process.env.NODE_ENV !== "production"
});
