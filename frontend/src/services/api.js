import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.PROD ? '/api' : 'http://127.0.0.1:5000/api',
});

export const submitInterest = async (data) => {
    try {
        const response = await api.post('/interest', data);
        return response.data;
    } catch (error) {
        throw error.response?.data?.message || 'Failed to submit interest.';
    }
};
