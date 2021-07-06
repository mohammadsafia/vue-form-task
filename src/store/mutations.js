export const authUserMutation = 'authUserMutation';
export const logoutUserMutation = 'logoutUserMutation';
const mutations = {
    [authUserMutation](state, data) {
        state.accessToken = data['token'];
        state.loggedInUserId = data['userId'];
    },
    [logoutUserMutation](state) {
        state.accessToken = null;
        state.loggedInUserId = null;
    },
};

export default mutations;
