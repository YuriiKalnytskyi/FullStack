import "./Header.css"
import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {Context} from "../../../context/context";

export const Header = () => {
    const auth = useContext(Context)

    const logoutHandler = () =>{
        auth.logout()
    }
    return(
        <div className={"helper_container"}>
            <Link to="/"><button  className={'headerButton'}>Home</button></Link>

            { !auth.isAuthenticated ? <Link to="/register"><button className={'headerButton'}>Sind in</button></Link> :
                <Link to="/login"><button className={'headerButton'} onClick={logoutHandler}>logout</button></Link>
            }


        </div>
    )
}