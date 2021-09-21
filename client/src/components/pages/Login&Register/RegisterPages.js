import React, {useState} from "react";
import {Link} from "react-router-dom";
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import VisibilityIcon from '@material-ui/icons/Visibility';
import {register} from '../../../services/users.service'
import "./RegisterPages.css"


export const RegisterPages = () => {
    const [pass, setPass] = useState(false);
    const [avatar, setAvatar] = useState({ avatar: '' });

    const [form, setForm] = useState({
        name: '',
        firstname: '',
        age: '',
        gender: '',
        email: '',
        password: '',
        phone: ''
    })

    const changeHandlerFile = e => {
        setAvatar({ ...form, [e.target.name]: e.target.files[0] })
    }
    const changeHandler = e => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const registerHandler = async () => {
        const formData = new FormData()
        formData.append("avatar", avatar.avatar)
        formData.append("name", form.name)
        formData.append("firstname", form.firstname)
        formData.append("age", form.age)
        formData.append("gender", form.gender)
        formData.append("email", form.email)
        formData.append("password", form.password)
        formData.append("phone", form.phone)

        for (let value of formData.values()) {
            console.log(value);
        }

        let a = await register(formData)
        console.log(a)
    }

    return (
        <div className="register_container">

            <div className="Q" >
                <span className="card-title">Реєстрація</span>

                <div>
                        <label className='labelClass'>Avatars</label>
                        <div className="input-field ">
                            <input className="inputClass"
                                   id="file"
                                   type="file"
                                   name="avatar"
                                   onChange={changeHandlerFile}
                            />
                        </div>

                        <div className='A'>
                            <div className="ageClass ">
                                <label className='labelClass'>Name</label>
                                <input className="inputClass2"
                                       id="name"
                                       type="text"
                                       name="name"
                                       onChange={changeHandler}
                                />
                            </div>

                            <div className="ageClass ">
                                <label className='labelClass'>Firstname</label>
                                <input className="inputClass2"
                                       id="firstname"
                                       type="text"
                                       name="firstname"
                                       onChange={changeHandler}
                                />
                            </div>
                        </div>


                        <div className='A'>
                            <div className='ageClass'>
                                <label className='labelClass'>Age</label>
                                <div>
                                    <input className={'ageInput'}
                                        id="age"
                                        type="number"
                                        name="age"
                                        onChange={changeHandler}
                                    />
                                </div>

                            </div>

                            <div className='ageClass'>
                                <label className='labelClass'>Gender</label>
                                <select className={'ageInput2'} name="gender" onChange={changeHandler}>
                                    <option defaultValue value="a" disabled selected>Choose your option</option>
                                    <option value="man">man</option>
                                    <option value="woman">woman</option>
                                    <option value="other">other</option>
                                </select>
                            </div>
                        </div>

                        <div className="register_input_container ">
                            <label className='labelClass'>Email</label>

                            <input className="inputClass"
                                   placeholder="email@gmail.com"
                                   id="email"
                                   type="email"
                                   name="email"
                                   onChange={changeHandler}
                            />
                        </div>

                        <div className="register_input_container ">
                            <div className='labelClass'><label>Password</label></div>
                            <div className='position'>
                                <input className="inputClass" placeholder="password"
                                       id="password"
                                       name='password'
                                       onChange={changeHandler}
                                       type={pass ? "text" : "password"}
                                />
                                <div className={"icon2"}>
                                    {pass ? <VisibilityIcon style={{color: "black"}}  onClick={() => {
                                            setPass(!pass)
                                        }}/>
                                        : <VisibilityOffIcon style={{color: "black"}} onClick={() => {
                                            setPass(!pass)
                                        }}/>}
                                </div>
                            </div>
                        </div>

                        <div className="register_input_container ">
                            <label className='labelClass'>Phone</label>
                            <input className="inputClass"
                                   placeholder="+380(__) ___ __ __"
                                   id="phone"
                                   type="number"
                                   name="phone"
                                   onChange={changeHandler}
                            />
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
    )
}