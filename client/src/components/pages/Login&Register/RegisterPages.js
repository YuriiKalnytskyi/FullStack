import React, {useState} from "react";
import {Link} from "react-router-dom";
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import VisibilityIcon from '@material-ui/icons/Visibility';
import "./RegisterPages.css"
import {register} from '../../../services/users.service'


export const RegisterPages = () => {
    // const { register , Error } = useHttp1()
    const [pass, setPass] = useState(false);
    const [form, setForm] = useState({
        avatar: '',
        name: '',
        firstname: '',
        age: '',
        gender: '',
        email: '',
        password: ''
    })

    // console.log(Error)
    const changeHandler = e => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const registerHandler = async () => {
        let a = await register(form)
        if (!a) {
            console.log(Error)
            alert(JSON.stringify(Error))

        }
    }

    console.log(form)
    return (
        <div className="register_container">
            <div className="col s6 offset-s3 container">
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Реєстрація</span>
                        <div>

                            <label htmlFor="first_name">Avatars</label>
                            <div className="input-field ">
                                <input
                                    // placeholder="+380(__) ___ __ __"
                                    id="file"
                                    type="file"
                                    name="file"
                                    onChange={changeHandler}
                                />
                            </div>

                            <div className="input-field ">
                                <input
                                    // placeholder="email@gmail.com"
                                    id="name"
                                    type="text"
                                    name="name"
                                    onChange={changeHandler}
                                />
                                <label htmlFor="first_name">Name</label>
                            </div>

                            <div className="input-field ">
                                <input
                                    // placeholder="email@gmail.com"
                                    id="firstname"
                                    type="text"
                                    name="firstname"
                                    onChange={changeHandler}
                                />
                                <label htmlFor="first_name">Firstname</label>
                            </div>

                            <div className="input-field ">
                                <input
                                    // placeholder="email@gmail.com"
                                    id="age"
                                    type="number"
                                    name="age"
                                    onChange={changeHandler}
                                />
                                <label htmlFor="first_name">Age</label>
                            </div>

                            <div className="input-field col s12">
                                <select>
                                    <option value="" disabled selected>Choose your option</option>
                                    <option value="1" >man</option>
                                    <option value="2">woman</option>
                                </select>
                                <label>Materialize Select</label>
                            </div>

                            <div className="input-field ">
                                <input
                                    placeholder="email@gmail.com"
                                    id="email"
                                    type="email"
                                    name="email"
                                    onChange={changeHandler}
                                />
                                <label htmlFor="first_name">Email</label>
                            </div>

                            <div className="clasInput input-field ">
                                <input
                                    // placeholder="password"
                                    id="password"
                                    name='password'
                                    onChange={changeHandler}
                                    type={pass ? "text" : "password"}
                                />
                                <div className={"icon"}>
                                    {pass ? <VisibilityIcon onClick={() => {
                                            setPass(!pass)
                                        }}/>
                                        : <VisibilityOffIcon onClick={() => {
                                            setPass(!pass)
                                        }}/>}
                                </div>

                                <label htmlFor="first_name">password</label>
                            </div>
                            <div className="input-field ">
                                <input placeholder="+380(__) ___ __ __"
                                       id="phone"
                                       type="number"
                                       name="phone"
                                       onChange={changeHandler}
                                />
                                <label htmlFor="first_name">Phone</label>
                            </div>


                        </div>

                    </div>

                    <div className="card-action">


                        <button className="btn grey lighten-1 black-text " style={{ marginRight: 10 }}
                                onClick={registerHandler}
                            // disabled={loading}
                        > Реєстрація
                        </button>

                        <Link to={'/login'}>
                            <button className="btn yellow darken-4"> Ввійти</button>
                        </Link>

                    </div>
                </div>
            </div>

        </div>
    )
}