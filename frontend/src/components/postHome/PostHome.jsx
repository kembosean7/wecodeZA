import React, { useState } from 'react'
import "./postHome.css"
import { FaArrowLeft } from "react-icons/fa";
import { BiLike } from "react-icons/bi";

function PostHome({id, author, publishDate, profession, title, post, getPage}) {
    const [returnFeed, setReturn] = useState(0);
    
  return (
    <article className='postHome' key={id}>
        <section className='authorDetails'>
            <FaArrowLeft onClick={()=> getPage(0)} />
            <h2>{author}</h2>
            <p>{profession}</p>
            <p>Updated on {publishDate}</p>
        </section>

        <div className='postType'>
            <h2>Article</h2>
            <BiLike />
        </div>

        <section className="postDetails">
            <h1 className='postHomeTitle'>
                {title}.
            </h1>
            
            <div className="mainPost">
                <p>
                    {post}
                </p>
            </div>

        </section>
    </article>
  )
}

export default PostHome