import React, {useContext, useEffect} from "react";
import {Context} from "../../../context/context";
import "./UserId.css"
import {Link} from "react-router-dom";
import {logout} from "../../../services/users.service";
// import {RegisterPages} from "../Login&Register/RegisterPages";

export const UserDetail = ({ flag, setFlag }) => {
    const auth = useContext(Context)


    const logoutHandler = async (e) => {
        const token = localStorage.getItem("refreshToken")
        e.preventDefault()
        setFlag(false)
        auth.logout()
        const data = await logout(token)
        console.log(data)
    }
    useEffect(() => {
        localStorage.setItem("flag", flag)
    }, [flag])

    return (
        <div className={flag ? "modal active" : "modal"} onClick={() => {
            setFlag(!flag)
        }}>
            <div className={flag ? "modal_content active" : "modal"} onClick={event => event.stopPropagation()}>

                <div className="avatarClass">
                    <img style={{ width: "75px", height: '75px', borderRadius: '50%' }} src={auth.user.avatar}
                         alt={'dcdkc'}/>
                </div>
                <div className={"user_info"}>
                    <div style={{width:"100%", display:"flex", justifyContent:"center"}}>{auth.user.name} {auth.user.firstname}</div>
                    <div>age: {auth.user.age}</div>
                    <div>email: {auth.user.email}</div>
                    <div>phone: {auth.user.phone}</div>

                </div>
                <Link to={`/update`}><button onClick={()=>{setFlag(false)}} >update</button></Link>
                <button onClick={logoutHandler}>logout</button>
            </div>
        </div>

    )
}