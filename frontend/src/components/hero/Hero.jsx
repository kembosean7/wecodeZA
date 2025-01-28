import React from 'react'
import "./hero.css"

function Hero() {
  return (
    <section className='heroContainer'>
        <div className="rightSection">
            <div className="heroIntro">
                <h1>
                    Publish your passion, your way
                </h1>

                <p>
                    Create a unique and beautiful blog easily
                </p>
            </div>

            <button className='toLogin'>
                Create your blog
            </button>
        </div>

        <div className="leftSection">

        </div>
    </section>
  )
}

export default Hero