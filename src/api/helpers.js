import axios from "axios";

export const apiBaseUrl = process.env["VUE_APP_API_DOMAIN"];
export const getAuthenticatedAxios = () => {
    const token = localStorage.getItem("token");
    const headers = {
        Authorization: `Bearer ${token}`
    };

    return axios.create({
        baseURL: apiBaseUrl,
        headers
    });
};

export const getUnAuthenticatedAxios = () => {
    return axios.create({ baseURL: apiBaseUrl });
};

export const getDataFromResponse = response => response.data;
