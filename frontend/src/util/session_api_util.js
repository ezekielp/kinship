import axios from 'axios';

export const setAuthToken = token => {
    if (token) {
        axios.defaults.headers.common['Authorization'] = token;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
};

export const signup = (userData) => {
    // return axios.post // SIGNUP API ROUTE WILL GO HERE
}

export const login = (userData) => {
    // return axios.post // LOGIN API ROUTE WILL GO HERE
}