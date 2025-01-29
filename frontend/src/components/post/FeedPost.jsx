import React from 'react'
import { BiLike } from "react-icons/bi";
import "./feedPost.css"

function FeedPost() {
  return (
    <article className='postContainer'>

      <div className="owner">
        <div className="div">
          <h2>Alexander I. Agu</h2>
          <p>25 November 2025</p>
        </div>
        <p>Software Developer at Wethinkcode</p>
      </div>

      <div className="postDes">
        <h1>
          How to pass the bootcamp and become a WeThinkCoder
        </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam porro accusantium nemo laborum a nesciunt ut consectetur reprehenderit ullam deserunt harum pariatur nihil, doloremque ab animi iste facere ipsa repellendus!</p>
      </div>

      <div className="postButtons">
        <BiLike />
      </div>
    </article>
  )
}

export default FeedPost