import React from 'react'
import './signup.css'

function Signup() {
  return (
    <section>
      <h1>Signup</h1>

      <div className='signup_container'>
        <form className='signup_form'>
            <div className='form_group'>
                <label>Name</label>
                <input type='text' id='name' name='name' placeholder='Enter your name' />
            </div>
            <div className='form_group'>
                <label>Email</label>
                <input type='email' id='email' name='email' placeholder='Enter your email' />
            </div>
            <div className='form_group'>
                <label>Password</label>
                <input type='password' id='password' name='password' placeholder='Enter your password' />
            </div>
            <div className='form_group'>
                <label>Confirm Password</label>
                <input type='password' id='confirm_password' name='confirm_password' placeholder='Confirm your password' />
            </div>
            <button type='submit'>Signup</button>
        </form>
      </div>
    </section>
  )
}

export default Signup;