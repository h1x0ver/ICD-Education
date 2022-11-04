import React, { useState } from "react";
import "../../Assets/Css/Login.css";
import { Formik, Form, Field } from "formik";
import loginVal from '../../Validation/loginValidation'
import {useSelector,useDispatch} from 'react-redux'
import axios from 'axios'
import {useNavigate,Link} from 'react-router-dom'
import logo from '../../Assets/Images/EducationLogo.jpeg'

import {setToken} from '../../Redux/loginSlice'
function Login({setAuth}) {
    const [type, setType] = useState("password");
    const [eye, setEye] = useState("bi-eye-slash-fill");
    const [logerrusr,setLogerrUsr] = useState("")
    const [logerrpsw,setLogerrPsw] = useState("")
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const handleIcon = () => {
        if (type === "password") {
            setType("text");
            setEye("bi-eye-fill");
        } else {
            setType("password");
            setEye("bi-eye-slash-fill");
        }
    };

    return (
        <div className="login">
            <div className="logged">
                <div className="ent-img">
                    <img
                        src={logo}
                        alt=""
                        width='300px'
                    />
                    <h1>ICD Academy</h1>
                </div>
                <Formik
                    validationSchema={loginVal}
                    initialValues={{
                        username: "",
                        password: "",
                    }}
                    onSubmit={(e)=>
                    {
                        axios.post("https://localhost:44313/api/Auth/login",e)
                            .then(resp=>
                            {
                                if(resp.status===200)
                                {
                                    localStorage.setItem("Utoken",JSON.stringify(resp.data))
                                    dispatch(setToken(JSON.parse(localStorage.getItem("Utoken"))))
                                    navigate("/")

                                }
                            }).catch(e=> alert("Username or Password incorrect"))
                    }}
                >
                    {({ errors, touched }) => (
                        <Form className="form-log">
                            <div className="form-div">
                                <label className="log-usr" htmlFor="log-usr">
                                    Username
                                </label>
                                <Field
                                    name="username"
                                    id="log-usr"
                                    className={`form-input ${logerrusr}`}
                                    placeholder="Enter your username"
                                />
                                {errors.username&&touched.username?setLogerrUsr("err-log"):setLogerrUsr("")}
                            </div>
                            <div className="form-div  psw-log">
                                <label className="log-usr" htmlFor="log-psw">
                                    Password
                                </label>
                                <Field
                                    name="password"
                                    type={type}
                                    id="log-psw"
                                    className={`form-input ${logerrpsw}`}
                                    placeholder="Enter your password"
                                />
                                {errors.password&&touched.password?setLogerrPsw("err-log"):setLogerrPsw("")}
                                <i onClick={handleIcon} className={`bi bi-eys ${eye}`}></i>
                            </div>
                            <input className="form-sub" type="submit" value="LOGIN" />

                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}
export default Login;