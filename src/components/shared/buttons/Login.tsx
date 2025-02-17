import React from "react";
import { useNavigate } from "react-router-dom";

function LoginButton() {
    const navigate = useNavigate();
    const goToMain = () => {
        navigate("/help/About");
    }
    return (
        <div>
            <button className="loginButton" onClick={goToMain}>
                About
            </button>
        </div>
    )
}

export default LoginButton