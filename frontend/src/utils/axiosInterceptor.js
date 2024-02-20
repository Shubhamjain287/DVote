import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL_DEV;

axios.interceptors.request.use((req) => {
    // console.log(req);
    return req;
});

axios.interceptors.response.use((res) => {
    // console.log(res);
    return res;
});