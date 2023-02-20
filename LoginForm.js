import React, { useState } from "react";
import "./LoginForm.css"
import lincoln from './lincoln.png';


const LoginForm = () => {


    const [popupStyle, showPopup] = useState("hide")

    const popup = () => {
        showPopup("login-popup")
        setTimeout(() => showPopup("hide"), 3000)
    }
 
    return (
        
        <div className="cover">
        <div className="logo">
            <img src={lincoln} alt=''/>
        </div>
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />
            <input type="email" placeholder="email" /> 
            <input type="confirm password" placeholder="confirm password" /><br></br>

            <button onClick={popup}>submit</button>

            <div className="alt login">
                <div className="facebook"></div>
                <div className="google"></div>
            </div>

            <div className={popupStyle}>
                <h3> submit Failed</h3>
                <p>Username or password incorrect</p>
            </div>
        </div>
    )
}

export default LoginForm;

