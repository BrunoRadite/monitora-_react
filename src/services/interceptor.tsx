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

// interceptor response
api.interceptors.response.use(response => {
    return response;
}, (err) => {
    return new Promise((resolve, reject) => {
        const originalReq = err.config;
        // if error is 401, if exist config and not type retry
        if (err.response.status == 401 && err.config && !err.config._retry) {
            originalReq._retry = true;
            let res = api.post('token/refresh/', { refresh: localStorage.getItem('refreshToken') }).then((res) => {
                localStorage.setItem('accessToken', res.data.access);
                originalReq.headers['Authorization'] = `Bearer ${res.data.access}`
                return api(originalReq)
            });
            resolve(res);
        } else {
            reject(err);
        }
    })
});
