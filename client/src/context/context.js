import {createContext} from 'react'

function noop() {}

export const Context = createContext({
    token: null,
    userId: null,
    login: noop,
    isAuthenticated: false
})
