import React from "react";
import {Switch, Route, Redirect, BrowserRouter as Router} from "react-router-dom"
import {LinksPages} from "./pages/LinksPages";
import {DetailPages} from "./pages/DetailPages";
import {CreatePages} from "./pages/CreatePages";
import {RegisterPages} from "./pages/Login&Register/RegisterPages";
import {LoginPages} from "./pages/Login&Register/LoginPages";

export const useRouters = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path={'/links'} exact>
                    <LinksPages/>
                </Route>
                <Route path={'/create'} exact>
                    <CreatePages/>
                </Route>
                <Route path={'/detail/:id'}>
                    <DetailPages/>
                </Route>
                <Redirect to={'/create'}/>
            </Switch>
        )
    }
    if (!isAuthenticated){
        return (
            <Router>
                <Switch>
                    <Route path={'/'} exact><RegisterPages/></Route>
                    <Route path={'/login'} exact><LoginPages/></Route>
                    {/*<Redirect to={'/'}/>*/}
                </Switch>
            </Router>
        )
    }
}