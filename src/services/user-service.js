import axios from 'axios';

const API_BASE = 'http://localhost:4000';
const USER_API = `${API_BASE}/profile`;

export const findUser = async () => {
    const response = await axios.get(USER_API);
    return response.data;
}

export const register = async (user) => {
    const response = await axios.post(`${API_BASE}/register`, user);
    return response.data;
}

export const login = async (user) => {
    const response = await axios.post(`${API_BASE}/login `, user);
    console.log(response.data)
    return response.data;
}

export const profile = async (user) => {
    const response = await axios.get(`${API_BASE}/profile `);
    return response.data;
}