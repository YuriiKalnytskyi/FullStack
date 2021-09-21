import axios from "axios";
// import {useCallback, useState} from "react";

let options = {
    baseURL: 'http://localhost:5000/api/',
}
let axiosInstance = axios.create(options);

export const register = async (data) => {
    try {
        console.log(data)

        const response = await axiosInstance.post('user/register', data);
        console.log(response)
        return response.data
    } catch (e) {
        alert(JSON.stringify(e.response.data, null, 2))
    }
}
export const login1 = async (data) => {
    try {
        const response = await axiosInstance.post('user/login', data);
        console.log(response)
        return response.data
    } catch (e) {
        alert(JSON.stringify(e.response.data, null, 2))
    }

}
