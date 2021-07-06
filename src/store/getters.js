const getters = {
    isAuthenticated(state){
        return state.accessToken !== null
    }
};

export default getters;
