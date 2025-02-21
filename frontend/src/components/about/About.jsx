import React from 'react'
import "./about.css"
import Feature from '../feature/Feature'
import HashTag from './HashTag'

function About() {
  return (
    <article className='aboutContainer'>
        <div className="aboutTags">
            <HashTag one={"#Prompt_Engineering"} two={""} />
            <HashTag one={"#Coding"} two={"#ChatGPT"} />
            <HashTag one={"#Loops"} two={"#DeepSeek"} />
            <HashTag one={"#Best_Practices"} two={""} />
        </div>

        <div className="aboutF">
            <Feature />
        </div>
    </article>
  )
}

export default About