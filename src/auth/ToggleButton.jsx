import React, { StrictMode, useState, useEffect } from 'react';
import AuthForm from '../auth/AuthForm';
import '../css/app.css';
const ToggleButton = () => {
    const [loginMode, setLoginMode] = useState(true);

    function handleClick() {
        loginMode ? setLoginMode(false) : setLoginMode(true);
    }

    return (

        <div id='child-modal-description' className="authform">
            <div id="child-modal-description" className='toggle'>
                < input
                    onClick={handleClick}
                    className={loginMode ? 'login-btn activated' : 'login-btn'}
                    type='button'
                    value='Login'
                />
                <input
                    onClick={handleClick}
                    className={loginMode ? 'register-btn' : 'register-btn activated'}
                    type='button'
                    value='Register'
                />
                <AuthForm loginMode={loginMode} />
            </div >
        </div >
    );
}

export default ToggleButton;