import React from "react";
import "./Menù.css"
import newyorktimeImg from "../../image/TheNewYorkTime.PNG"

export default function MenùLogin() {
return(
<div>
<div className="menù3-container">
    <div className="title3-container">
       <img src={newyorktimeImg} className="img3-logo" alt=""></img>
    </div>
</div>
<div className="Login-container">
    <p className="title-login">Login or Create an account</p>
    <div className="form-container">
        <div className="subform-container">
            <label className="label-login">Email:</label>
            <input type="email" className="input-login"/>
        </div>
        <div className="subform-container">
        <label className="label-password">password:</label>
        <input type="password" className="input-login2"/>
        </div>
        <button className="btn-login">Continua</button> 
    </div>
    <div className="social-login-container">
        <p className="or-text">OR</p>
        <hr className="separatore"></hr>
        <div className="social-login-button-container">
            <button type="button" className="google-sign-in-button" >
            Sign in with Google
            </button>
        </div>
    </div>
</div>
</div>
)
}