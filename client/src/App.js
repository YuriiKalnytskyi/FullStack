import React from "react";
import {BrowserRouter as Router} from "react-router-dom"
import {useRouters} from "./components/routes";
import {Context} from "./context/context";
import {useAuth} from "./hooks/auth.hook";
import {Header} from "./components/pages/Header&Footer/Header";
import './App.css';
import 'materialize-css'
import {Footer} from "./components/pages/Header&Footer/Footer";


function App() {
    const { token, login, logout, userId, ready, user } = useAuth()

    let isAuthenticated;
    if (token) {
        isAuthenticated = true
    } else {
        isAuthenticated = false
    }

    // useEffect(() => {
    //     if (localStorage.getItem("accessToken")) {
    //         isAuthenticated = true
    //         refresh()
    //     }
    //     else {
    //         isAuthenticated = false
    //     }
    // }, [isAuthenticated, token])

    const routes = useRouters(isAuthenticated)


    return (

        <div className="app_container">
            <Router>

                <Context.Provider value={{
                    token, login, logout, userId, isAuthenticated, ready, user
                }}>
                    <Header/>
                    <div className={'component'}>
                        {
                            routes
                        }

                    </div>
                    <Footer/>
                </Context.Provider>

            </Router>
        </div>
    );
}

export default App;
