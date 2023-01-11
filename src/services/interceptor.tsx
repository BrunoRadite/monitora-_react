import axios from "axios";

// Create instance of axios
export const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/',
    headers: {
        'Content-Type': 'application/json',
    }
});

//interceptor request 
api.interceptors.request.use(
    config => {
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken !== '' && accessToken !== null) {
            // injecting access token
            config.headers! = { Authorization: `Bearer ${accessToken}` };
        }
        return config;
    },
    error => {
        alert(error.response || error.message)
        Promise.reject(error.response || error.message);
    }
);
