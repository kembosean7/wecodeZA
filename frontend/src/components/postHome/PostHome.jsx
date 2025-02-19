import React from 'react'
import "./postHome.css"
import { FaArrowLeft } from "react-icons/fa6";

function PostHome() {
  return (
    <main className='postHomeContainer'>
        <div className="postHomebackButton">
            <button>
                <FaArrowLeft />
            </button>
        </div>

        <article className='postHomeMain'>
            <h2 className='postHomeName'>Alexander I. Agu</h2>
            <p>Student at WeThinkCode</p>

            <h2 className='postHomeTopic'>
                WeThinkCode
            </h2>

            <h1 className='postHomeTitle'>How to pass the WeThinkCode bootcamp</h1>

            <p>
                Nobody knows how the selection process of WeThinkCode works but you can trust that we are here to help you. Nobody knows how the selection process of WeThinkCode works but you can trust that we are here to help you. Nobody knows how the selection process of WeThinkCode works but you can trust that we are here to help you. Nobody knows how the selection process of WeThinkCode works but you can trust that we are here to help you. Nobody knows how the selection process of WeThinkCode works but you can trust that we are here to help you. Nobody knows how the selection process of WeThinkCode works but you can trust that we are here to help you.
                Nobody knows how the selection process of WeThinkCode works but you can trust that we are here to help you. Nobody knows how the selection process of WeThinkCode works but you can trust that we are here to help you. Nobody knows how the selection process of WeThinkCode works but you can trust that we are here to help you. Nobody knows how the selection process of WeThinkCode works but you can trust that we are here to help you. Nobody knows how the selection process of WeThinkCode works but you can trust that we are here to help you. Nobody knows how the selection process of WeThinkCode works but you can trust that we are here to help you.
            </p>
        </article>
    </main>
  )
}

export default PostHome