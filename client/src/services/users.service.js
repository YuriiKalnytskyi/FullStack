import axios from "axios";
// import {useCallback, useState} from "react";

let options = {
    baseURL: 'http://localhost:5000/api/auth/',
}
let axiosInstance = axios.create(options);

// const createUser = (data) => {
//     return axiosInstance.post('/register', { ...data });
// }

export const register = async (data) => {
    try {
        const response = await axiosInstance.post('/register', data);
        console.log(response)
        return response.data
    } catch (e) {
        alert(JSON.stringify(e.response.data, null, 2))
    }
}
export const login1 = async (data) => {
    try {
        const response = await axiosInstance.post('/login', data);
        console.log(response)
        return response.data
    } catch (e) {
        alert(JSON.stringify(e.response.data, null, 2))
    }

}

// export const useHttp1 = () => {
//     const [loading, setLoading] = useState(false)
//     const [Error, setError] = useState(null)
//
//     const register = useCallback(async (data) => {
//         setLoading(true)
//         try {
//             const response = await axiosInstance.post('/register', data);
//             setLoading(false)
//             return response.data
//         } catch (e) {
//             setError(e.response.data)
//             // console.log(e.response.data)
//             // console.log(e.message)
//         }
//     }, [])
//
//     const login = useCallback(async (data) => {
//         setLoading(true)
//         try {
//             const response = await axiosInstance.post('/login', data);
//             setLoading(false)
//             return response.data
//         } catch (e) {
//             setError(e.response.data)
//         }
//     }, [])
//     return { loading, Error, login, register}
// }

// export {
//      register, login1,
// }