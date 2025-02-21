import React from 'react'
import "./about.css"

function HashTag({one, two}) {
  return (
    <div className='hashTag'>
        <h2>{one}</h2>
        <h2>{two}</h2>
    </div>
  )
}

export default HashTag