import React from 'react'
import './login.css'

function Login() {
    return (
        <section>
            <h1>Login</h1>
            
            <div className='login_container'>
                <form className='login_form'>
                    <div className='form_group'>
                        <label>Email</label>
                        <input type='email' name='email' id='email' placeholder='Email' />
                    </div>
                    <div className='form_group'>
                        <label>Password</label>
                        <input type='password' name='password' id='password' placeholder='password' />
                    </div>
                    <button type='submit'>Login</button>
                </form>
            </div>
        </section>
    )
}

export default Login;