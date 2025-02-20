import React from 'react'
import "./postHome.css"
import { FaArrowLeft } from "react-icons/fa6";
import { Link, useParams } from 'react-router-dom';
import { getPostDataById } from '../../testData/testData';



function PostHome() {
    const params = useParams();
    const postID = params.postId;

    const getPostData = getPostDataById(Number(postID))
    const {userId, name, topic, title, content} = getPostData;

    // If i direct to my account it will take me to my profile page else to other Authores profiles
    const passCorrectUrl = userId === 1? `/viewProfile` : `/viewAuthor/${userId}`;
  return (
    <main className='postHomeContainer'>
        {/* <div className="postHomebackButton">
            <button>
                <FaArrowLeft />
            </button>
        </div> */}

        <article className='postHomeMain'>
            <Link to={passCorrectUrl} className='postHomeName' style={{color: "black", textDecoration: "none"}}>
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