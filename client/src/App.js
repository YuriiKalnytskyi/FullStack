import {BrowserRouter as Router} from "react-router-dom"
import './App.css';
import 'materialize-css'
import {useRouters} from "./components/routes";
import {Context} from "./context/context";
import {useAuth} from "./hooks/auth.hook";
import {Header} from "./components/pages/Header/Header";
import React from "react";

function App() {
    const { token, login,logout, userId, ready } = useAuth()

    let isAuthenticated;
    if (token) {
        isAuthenticated = true
    } else {
        isAuthenticated = false
    }

    const routes = useRouters(isAuthenticated)


    return (

        <div className="app_container">
            <Router>

                <Context.Provider value={{
                    token, login, logout, userId, isAuthenticated, ready
                }}>
                    <Header/>

                    <div className={'component'}>

                        {
                            routes
                        }

                    </div>
                </Context.Provider>

            </Router>
        </div>
    );
}

export default App;
