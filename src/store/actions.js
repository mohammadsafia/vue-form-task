import { Api } from '../api';
import { authUserMutation, logoutUserMutation } from './mutations';

const actions = {
    async signUpAction(context, data) {
        try {
            const response = await Api.auth.signUp(data);
            await context.commit(authUserMutation, {
                token: response['idToken'],
                userId: response['localId'],
            });
            if (response['idToken']) {
                await context.dispatch('setUserDetailsAction', { data, token: response['idToken'] });
            }
        }
        catch (e) {
            console.error(e);
        }
    },

    async signInAction(context, data) {
        try {
            const response = await Api.auth.signIn(data);
            await context.commit(authUserMutation, {
                token: response['idToken'],
                userId: response['localId'],
            });
        }
        catch (e) {
            console.error(e);
        }
    },

    async getUserDetailsAction(context, token) {
        if (!context.state.accessToken) return;
        try {
            const response = await Api.auth.getUsers(token);
            console.log(response);
        }
        catch (e) {
            console.error(e);
        }
    },

    async setUserDetailsAction(context, { data, token }) {
        if (!context.state.accessToken) return;

        try {
            const response = await Api.auth.createUser({ data, token });
            console.log(response);
        }
        catch (e) {
            console.error(e);
        }
    },

    logoutUserAction(context){
        context.commit(logoutUserMutation);
    }
};

export default actions;
