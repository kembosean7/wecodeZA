import React from 'react'
import "./stats.css"
import Stat from './Stat'

function Stats() {
  return (
    <article className='statSection'>
        <h2>We Code ZA</h2>
        <p>
            WeCodeZA has become a global hub for developers, attracting thousands of users worldwide. With its intuitive platform, engaging content, and focus on collaboration.
        </p>

        <div className="statsContainer">
            {<Stat stat={"12K"} />}
            {<Stat stat={"50"} />}
            {<Stat stat={"30"}/>}
            {<Stat stat={90}/>}
        </div>
    </article>
  )
}

export default Stats