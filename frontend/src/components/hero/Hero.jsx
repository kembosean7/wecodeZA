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
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                    </p>
                    
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero