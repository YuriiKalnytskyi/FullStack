import "./Header&Footer.css"
import React, {useContext, useState} from "react";
import {Link} from "react-router-dom";
import {Context} from "../../../context/context";
import {UserId} from "../UserId/UserId";
import {UserDetail} from "../UserId/UserDetail";

export const Header = () => {
    const auth = useContext(Context)
    const [flag, setFlag]= useState(false)
    localStorage.setItem("flag", flag)
    return(
        <div className={"helper_container"}>
            <Link to="/"><button  className={'headerButton'}>Home</button></Link>

            {/*{ !auth.isAuthenticated ? <Link to="/register"><button className={'headerButton'}>Sind in</button></Link> :*/}
            {/*   <Link to={`/user/${auth.userId}`}><UserId/></Link>*/}
            {/*}*/}

            { !auth.isAuthenticated ? <Link to="/register"><button className={'headerButton'}>Sind in</button></Link> :
                <div onClick={()=>setFlag(!flag)}><UserId></UserId> <UserDetail flag={flag} setFlag={setFlag}/></div>
            }
        </div>
    )
}