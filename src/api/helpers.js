import axios from 'axios';
import { errorAlert, successAlert } from '../utils';

export const apiBaseUrl = process.env['VUE_APP_API_DOMAIN'];
export const apiDB = process.env['VUE_APP_API_DB'];

export const getAuthenticatedAxios = () => {
    return axios.create({
        baseURL: `${ apiDB }`,
    });
};

export const getUnAuthenticatedAxios = () => {
    return axios.create({ baseURL: apiBaseUrl });
};

export const getDataFromResponse = response => {
    successAlert();
    return response.data;
};

export const getDataFromError = error => {
    errorAlert(error.response.data.error.message);
    return error;
};
