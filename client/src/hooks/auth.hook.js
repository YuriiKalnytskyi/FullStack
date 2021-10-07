import {useCallback, useEffect, useState} from "react";

const storageName = 'userData'

export const useAuth = () => {
    const [token, setToken] = useState(null)
    const [ready, setReady] = useState(false)
    const [userId, setUserId] = useState(null)
    const [user, setUser] = useState({
        name: '',
        firstname: '',
        age: '',
        gender: '',
        email: '',
        password: '',
        phone: ''
    })


    const login = useCallback((jwtToken, id, user) => {
        setToken(jwtToken)
        setUserId(id)
        setUser(user)

        localStorage.setItem("accessToken", jwtToken.accessToken)
        localStorage.setItem("refreshToken", jwtToken.refreshToken)
        localStorage.setItem(storageName, JSON.stringify({
            userId: id, user:user, token:jwtToken
        }))
    }, [])

    const logout = useCallback(() => {
        setToken(null)
        setUserId(null)
        localStorage.removeItem(storageName)
        localStorage.removeItem("accessToken")
        localStorage.removeItem("refreshToken")
        setReady(false)

    }, [])

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(storageName))

        if (data && data.token) {
            login(data.token, data.userId, data.user)
        }
        setReady(true)
    }, [login])
    return { login, token, userId, ready, logout, user }

}