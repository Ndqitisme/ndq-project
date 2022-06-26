import axios from 'axios';

export const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

export const get = async (url, params = {}) => {
    const response = await httpRequest.get(url, params);
    return response.data;
};
