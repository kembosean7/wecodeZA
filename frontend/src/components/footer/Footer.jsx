import React from 'react'
import './footer.css'

function Footer() {
    return (
        <footer>
            <div className='main_container'>
                <div className='container'>
                    <h3 className='footer_header'>Company</h3>
                    <ul>
                        <li>Home</li>
                        <li>Login</li>
                        <li>Signup</li>
                        <li>Contact</li>
                        <li>About</li>
                    </ul>
                </div>
                <div className='container'>
                    <h3 className='footer_header'>Latest</h3>
                    <ul>
                        <li>Blog</li>
                        <li>News</li>
                        <li>Events</li>
                        <li>Press</li>
                    </ul>
                </div>
                <div className='container'>
                    <h3 className='footer_header'>Follow Us</h3>
                    <ul>
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>Twitter</li>
                        <li>LinkedIn</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;