import axios from "axios";

// import axiosInstance from "./tokenInterceptor";

let options = {
    // baseURL: 'http://localhost:4000/api/',
    baseURL: ' https://b169-178-212-111-37.ngrok.io/api/',
}
let axiosInstance = axios.create(options);


export const register = async (data) => {
    try {
        console.log(data)

        const response = await axiosInstance.post('user/register', data);
        console.log(response)
        return response.data
    } catch (e) {
        alert(JSON.stringify(e.response.data?.message, null, 2))
    }
}
export const login1 = async (data) => {
    try {
        const response = await axiosInstance.post('user/login', data);
        // console.log(response);
        return response.data
    } catch (e) {
        alert(JSON.stringify(e.response?.data?.message, null, 2))
    }
}
export const logout = async (token) => {
    try {
        const response = await axiosInstance.post('user/logout', {},{
            headers: {
                // тут має бути accessToken але поки  не налаштований токенінтерсептор
                'Authorization': token
            }
        })
        console.log(response)
        return response.data

    } catch (e) {
        alert(JSON.stringify(e.response?.data, null, 2))
    }
}
export const refresh = async () => {
    try {
        const ref = JSON.parse(localStorage.getItem("refreshToken"))
        const response = await axios.post('/user/refresh', ref , {
            Authorization: ref
        } )
        console.log(response)
        localStorage.setItem("accessToken", response.data.accessToken)

    } catch (e) {
        alert(JSON.stringify(e.response?.data?.message, null, 2))
    }
}



export const getUserDetail = async (userId) => {
    try {
        const response = await axiosInstance.get(`user/${userId}`)
        // console.log(response)
        return response.data
    } catch (e) {
        alert(JSON.stringify(e.response?.data, null, 2))
    }
}
export const updateUserId = async (data) => {
    try {
        const response = await axiosInstance.patch(`user/update`, data, {
                headers: {
                    // тут має бути accessToken але поки  не налаштований токенінтерсептор

                    'Authorization': localStorage.getItem('refreshToken')
                }
            }

            )
        console.log(response)
        return response.data
    } catch (e) {
        console.log(e)
        console.log(e.response.data.message)
        alert(JSON.stringify(e.response, null, 2))
    }
}