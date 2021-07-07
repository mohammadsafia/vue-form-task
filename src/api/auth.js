import { getAuthenticatedAxios, getDataFromError, getDataFromResponse, getUnAuthenticatedAxios } from './helpers';

export const apiKey = process.env['VUE_APP_API_KEY_FIREBASE'];
export const authApiEndpoints = {
    signUp: (data) =>
        getUnAuthenticatedAxios().post(`/accounts:signUp?key=${ apiKey }`, data).then(getDataFromResponse).catch(getDataFromError),

    getUsers: (token) =>
        getAuthenticatedAxios().get(`?auth=${ token }`).then(getDataFromResponse).catch(getDataFromError),

    signIn: (data) =>
        getUnAuthenticatedAxios().post(`/accounts:signInWithPassword?key=${ apiKey }`, data).then(getDataFromResponse).catch(getDataFromError),

    createUser: ({ data, token }) =>
        getAuthenticatedAxios().post(`?auth=${ token }`, data).then(getDataFromResponse).catch(getDataFromError),
};
