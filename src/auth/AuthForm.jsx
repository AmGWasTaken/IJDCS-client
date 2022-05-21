import React, { useState, useEffect } from 'react';
import { colors, TextField, Button } from '@mui/material';
import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://127.0.0.1:4000'
});

const AuthForm = ({ loginMode }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [rpassword, setRPassword] = useState('');
    const [error, setError] = useState('');
    async function sendLoginRequest(e) {
        e.preventDefault();
        setError('');
        try {
            if (username && password) {
                const response = await instance({
                    'method': 'POST',
                    'url': '/api/auth/login',
                    "withCredentials": true,
                    'data': {
                        'username': username,
                        'password': password
                    }
                });

            }
        }
        catch (error) {
            console.log(error);
            setError('Bad credentials');
        }
    }
    async function sendRegisterRequest(e) {
        e.preventDefault();
        if (!username || !password || !name || !email)
            setError("Please fill all the fields");
        if (password.length < 8 || username.length < 4)
            setError('Short credentials')
        else
            setError('');
        try {
            const response = await instance({
                'method': 'POST',
                'url': '/api/auth/register',
                'credentials': 'include',
                'data': {
                    'username': username,
                    'password': password,
                    'name': name,
                    'email': email
                }
            });

        }
        catch (error) {
            setError('Bad credentials');
        }

    }


    return (

        <>
            {loginMode ?
                <div className="login-div">
                    <div className="login-text">Login</div>
                    <div className="login-error-box">{error}</div>
                    <div className="form-div">
                        <form className="login-form" action='' method=''>
                            <TextField
                                id="outlined-password-input"
                                label="Username"
                                type="text"

                                onChange={(e) => { setUsername(e.target.value) }}
                                className="login-input-box login-username"
                                sx={{

                                    marginBottom: '2rem'
                                }
                                }
                            />
                            <TextField
                                id="outlined-password-input"
                                label="Password"
                                type="password"
                                onChange={(e) => { setPassword(e.target.value) }}
                                className="login-input-box login-password"
                                sx={{
                                }}
                            />


                            <a href="#" className="forgot">فراموشی رمز عبور</a>
                            <Button className="login-submit-btn" sx={{
                                backgroundColor: '#745393',
                                textColor: '#F7F7FF',
                                '&:hover': {
                                    backgroundColor: '#918EF4',

                                },
                                marginTop: '1rem',
                                color: '#F7F7FF'
                            }} onClick={sendLoginRequest}>Submit</Button>
                        </form>

                    </div>
                </div>
                :
                <div className="register-div">
                    <div className="register-text">Register</div>
                    <div className="register-error-box">{error}</div>
                    <div className="form-div">
                        <form className="register-form" action='' method=''>
                            <TextField
                                id="outlined-password-input"
                                label="Username"
                                type="text"
                                onChange={(e) => { setUsername(e.target.value) }}
                                className="register-input-box register-username"
                                sx={{
                                }}
                            />
                            <TextField
                                id="outlined-password-input"
                                label="Password"
                                type="password"
                                onChange={(e) => { setPassword(e.target.value) }}
                                className="register-input-box register-password"
                                sx={{
                                    marginTop: '1rem'
                                }}
                            />

                            <TextField
                                id="outlined-password-input"
                                label="Full Name"
                                type="text"
                                onChange={(e) => { setName(e.target.value) }}
                                className="register-input-box register-name"
                                sx={{
                                    marginTop: '1rem'
                                }}
                            />
                            <TextField
                                id="outlined-password-input"
                                label="Email"
                                type="email"
                                onChange={(e) => { setEmail(e.target.value) }}
                                className="register-input-box register-email"
                                sx={{
                                    marginTop: '1rem'
                                }}
                            />
                            <Button className="register-submit-btn" sx={{
                                backgroundColor: '#745393',
                                textColor: '#F7F7FF',
                                '&:hover': {
                                    backgroundColor: '#918EF4',
                                },
                                marginTop: '1rem',
                                color: '#F7F7FF'
                            }} onClick={sendRegisterRequest}>Submit</Button>
                        </form>

                    </div>
                </div>
            }
        </>
    );
}

export default AuthForm;