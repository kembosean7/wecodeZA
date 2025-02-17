import React, { useState } from 'react'
import './login.css'

function Login() {
    const [email, setEmail] = useState();
    const [passcode, setPasscode] = useState();

    return (
        <article className='loginApp'>
            <h2 className='loginWelcome'>
                Welcome back to WeCodeZa
            </h2>

            <div className="loginContainer">
                <div className="loginForm">
                    <input type="text" onChange={e => setEmail(e.target.value)} placeholder='Email' value={email} />
                    <input type="text" onChange={e => setPasscode(e.target.value)} placeholder='Password' value={passcode} />
                </div>

                <button className='loginSubmit'>
                    Login
                </button>
                <p>
                    Dont't have an account? <a href="">Sign Up</a> instead.
                </p>
            </div>
        </article>
    )
}

export default Login;