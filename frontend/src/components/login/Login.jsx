import React, { useEffect, useState } from 'react'
import './login.css'
import Header from '../header/Header';


function Login({getId}) {
    const [email, setEmail] = useState("");
    const [passcode, setPasscode] = useState("");
    const [userId, setUserId] = useState();
    const [page, setPage] = useState(0);

    useEffect(()=>{
        const getUserId = async ()=> {
            let fetchData = await fetch(`/email/passcode`);
            let getData = await fetchData.json();

            setUserId(getData);
        }
    },[email, passcode])

    if (page == 0){
        return <>
            <Header />
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
        </>
    } else if( page == 1 && userId){
        
    }
}

export default Login;