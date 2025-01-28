import React from 'react'
import "./about.css"
import Feature from '../feature/Feature'

function About() {
  return (
    <article className='aboutContainer'>
        <div className="aboutRightS">
            <h2>
                Features
            </h2>

            <p>
                WeCodeZA is a vibrant and inclusive blogsite dedicated to empowering and inspiring South Africa's tech community. From beginner coders to seasoned developers, WeCodeZA offers a space to share ideas, learn, and grow
            </p>
        </div>

        <div className="aboutLeftS">
            {<Feature />}
        </div>
    </article>
  )
}

export default About