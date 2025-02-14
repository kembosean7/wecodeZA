import React from 'react'
import { BsArrowRightSquareFill } from "react-icons/bs";
import { BsArrowRightSquare } from "react-icons/bs";
import "./hero.css"

function Hero() {
  return (
    <section className='heroContainer'>
        <div className="topHero">
            <h2>
                WeCodeZA -
            </h2>

            <h2>
                An online blogging website that brings
            </h2>

            <h2>
                top minds in the tech industry
            </h2>

            <h2>
                to share Ideas
            </h2>
        </div>

        <div className="bottomHero">
            <div className="heroLinks">
                <button className='heroPost'>
                    <p>Create a Post</p> <BsArrowRightSquare />
                </button>

                <button className='heroRead'>
                    <p>Read Post</p> <BsArrowRightSquareFill />
                </button>
            </div>

            <div className="heroDetails">
                <h2>
                     Our tech blog offers clear, insightful content, fresh perspectives and practical advice, making complex topics accessible to all readers.
                </h2>

                <div className="hDetails">
                    <p>
                        WeCodeZA is a vibrant and inclusive blogsite dedicated to empowering and inspiring South Africa's tech community. From beginner coders to seasoned developers, WeCodeZA offers a space to share ideas, learn, and grow
                    </p>
                    
                    <p>
                        WeCodeZA is a vibrant and inclusive blogsite dedicated to empowering and inspiring South Africa's tech community. From beginner coders to seasoned developers, WeCodeZA offers a space to share ideas, learn, and grow
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero