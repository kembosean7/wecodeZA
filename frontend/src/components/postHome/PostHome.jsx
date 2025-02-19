import React from 'react'
import "./postHome.css"
import { FaArrowLeft } from "react-icons/fa6";
import { Link, useParams } from 'react-router-dom';
import { getPostDataById } from '../../testData/testData';



function PostHome() {
    const params = useParams();
    const postID = params.postId;

    const getPostData = getPostDataById(Number(postID))
    const {userId, postId, name, topic, title, content} = getPostData;

  return (
    <main className='postHomeContainer'>
        {/* <div className="postHomebackButton">
            <button>
                <FaArrowLeft />
            </button>
        </div> */}

        <article className='postHomeMain'>
            <Link to={`/viewAuthor/${userId}`} className='postHomeName' style={{color: "black", textDecoration: "none"}}>
                {name}
            </Link>
            <p>Student at WeThinkCode</p>

            <h2 className='postHomeTopic'>
                {topic}
            </h2>

            <h1 className='postHomeTitle'>{title}</h1>

            <p>
                {content}
            </p>
        </article>
    </main>
  )
}

export default PostHome