import axios from 'axios';

const request = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
});

export const get = async (path, options = {}) => {
    try {
        const response = await request.get(path, options);

        return response.data;
    } catch (err) {
        console.log('Failed to get: ', err);
    }
};
