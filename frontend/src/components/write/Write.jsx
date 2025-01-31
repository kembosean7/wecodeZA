import React, { useState } from 'react'
import { FaArrowLeft } from "react-icons/fa6";
import './write.css'

function Write() {


  return (
    <article className='writerContainer'>
      <FaArrowLeft />
      <div className="writeDes">
        <h2>Write a post</h2>
        <button>
          Post
        </button>
      </div>



      <div className="canva">
        <input type="text" placeholder='Title' className='writerTitle' />
        <p contentEditable placeholder="Hello" className='writePost'></p>
      </div>
    </article>
  )
}

export default Write