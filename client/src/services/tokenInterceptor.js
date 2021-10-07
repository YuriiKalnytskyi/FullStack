import axios from 'axios';

const AUTHORIZATION = "Authorization"
const _endpoint = {
    REFRESH: 'user/refresh'
}
const d = localStorage.getItem("accessToken")
console.log(d)
const c = localStorage.getItem("refreshToken")
console.log(c)

// const axiosInstance = axios.create({
//     baseURL: 'http://localhost:4000/api/',
//     timeout: 10000,
//     headers: {
//         Authorization: localStorage.getItem("accessToken") ? localStorage.getItem("accessToken") : null,
//         'Content-Type': 'application/json',
//         'accept': 'application/json'
//     }
//
// });
const axiosInstance = axios.create({
    baseURL: 'http://localhost:4000/api/',
    withCredentials:true,
})
axiosInstance.interceptors.request.use((config)=>{
    config.headers.Authorization = `Bearer ${localStorage.getItem("accessToken")}`
})

// axiosInstance.interceptors.response.use(
//     response => {
//         return response
//     },
//     error => {
//         console.log(error)
//         const originalRequest = error.config;
//
//         // Prevent infinite loops
//         if (error.response.status === 401 && (originalRequest.url === `${_endpoint.REFRESH}`
//             || originalRequest.url === originalRequest.url + `${_endpoint.REFRESH}`)) {
//             localStorage.clear()
//             window.location.href = 'http://localhost:3000/login';
//             return Promise.reject(error);
//         }
//
//         if (error.response.data.message === "Token not valid!" &&
//             error.response.status === 401) {
//             const refreshToken = localStorage.getItem("refresh_token");
//
//             if (refreshToken) {
//                 axiosInstance.defaults.headers[AUTHORIZATION] = refreshToken;
//                 return axiosInstance
//                     .post(`${_endpoint.REFRESH}`, {})
//                     .then((response) => {
//
//                         localStorage.setItem("access_token", response.data.access_token);
//                         localStorage.setItem("refresh_token", response.data.refresh_token);
//                         localStorage.setItem("user", response.data.user);
//
//                         axiosInstance.defaults.headers[AUTHORIZATION] = response.data.access_token;
//                         originalRequest.headers[AUTHORIZATION] = response.data.access_token;
//
//                         return axiosInstance(originalRequest);
//                     })
//                     .catch(err => {
//                         // console.log(err)
//                         if (err.status === 401) {
//                             window.location.href = 'http://localhost:3000/login';
//                         }
//                         return err
//                     });
//
//             }
//             else {
//                 console.log("Refresh token not available.")
//                 window.location.href = 'http://localhost:3000/login';
//
//             }
//         }
//         throw error.response
//     }
// );

export default axiosInstance;