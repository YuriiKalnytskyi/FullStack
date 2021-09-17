import {BrowserRouter as Router} from "react-router-dom"
import './App.css';
import 'materialize-css'
import {useRouters} from "./components/routes";
import {Context} from "./context/context";
import {useAuth} from "./hooks/auth.hook";
import {Loader} from "./components/Loader";
import {Header} from "./components/pages/Header/Header";

function App() {
    const { token, login, userId, ready } = useAuth()
    let isAuthenticated;
    if (token) {
        isAuthenticated = true
    } else {
        isAuthenticated = false
    }

    const routes = useRouters(isAuthenticated)

    if (!ready) {
        return <Loader/>
    }
    return (
        <div className="app_container">
            <Header/>

            <div className={'component'}>
                <Context.Provider value={{
                    token, login, userId, isAuthenticated
                }}>

                    <Router>

                        {
                            routes
                        }
                    </Router>
                </Context.Provider>
            </div>
        </div>
    );
}

export default App;
