import React, { useState } from 'react'
import "./write.css"
import { FaArrowLeft } from "react-icons/fa6";

function Write() {
    const [title, setTitle] = useState("");
    const [topic, setTopic] = useState("");
    const [content, setContent] = useState("");

  return (
    <main className='writeMain'>
        <section className="writeButtons">
            <button className='postBackButton'>
                <FaArrowLeft />
            </button>

            <button className='postButton'>
                Post
            </button>
        </section>

        <section className='writeInputs'>
            <input type="text" onChange={e => setTitle(e.target.value)} placeholder='Title:' value={title} className='writeTitle' />

            <input type="text" onChange={e => setTopic(e.target.value)} value={topic} className='writeTopic' placeholder='Topic:' />

            <p contentEditable onChange={e => setContent(e.target.value)} value={content} className='writeContent'>

            </p>
        </section>
    </main>
  )
}

export default Write