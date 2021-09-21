import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import {Link} from "react-router-dom";
import React, {useContext, useState} from "react";
import {login1} from "../../../services/users.service"
import {Context} from "../../../context/context";
import "./LoginPages.css"

export const LoginPages = () => {
    const auth = useContext(Context)

    // const {Error, login } = useHttp1();
    const [pass, setPass] = useState(false);
    const [form, setForm] = useState({ email: '', password: '' })

    const changeHandler = e => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const loginHandler = async () => {
        const data = await login1(form)
        console.log(data)
        if (data) {
            auth.login({ accessToken: data.accessToken, refreshToken: data.refreshToken }, data.userId)
        }
    }


    return (
        <div className={'login_container'}>

            <div className="col s6 offset-s3">
                    <div className="card-content white-text">
                        <div className="card-title">Логінація</div>

                        <div className={"login_content"}>
                            <div className="input_container">
                                <div className={'labelClass'}><label>Email</label></div>
                                <input className="inputClass" placeholder="email@gmail.com"
                                       id="email"
                                       type="email"
                                       name="email"
                                       onChange={changeHandler}
                                />
                            </div>

                            <div className="input_container ">
                                <div className={'labelClass'}><label>Password</label></div>
                                <div className={'position'}>
                                    <input className="inputClass" placeholder="password"
                                           id="password"
                                           name='password'
                                           onChange={changeHandler}
                                           type={pass ? "text" : "password"}
                                    />
                                    <div className={"icon"}>
                                        {pass ? <VisibilityIcon style={{color: "black"}} onClick={() => {
                                                setPass(!pass)
                                            }}/>
                                            : <VisibilityOffIcon style={{color: "black"}} onClick={() => {
                                                setPass(!pass)
                                            }}/>
                                        }
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                    <div className="card-action">
                        <Link to={'/register'} style={{ marginRight: 10 }}>
                            <button className="btn grey lighten-1 black-text "> Реєстрація</button>
                        </Link>

                        <button className="btn yellow darken-4" onClick={loginHandler}>Ввійти</button>
                    </div>

            </div>

        </div>
    )
}