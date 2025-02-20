import React from 'react'
import "./post.css"
import { Link } from 'react-router-dom';


function Post({buttonTypes, id, author, title, content}) {
  return (
    <div className="postContainer" key={id}>
        <div className="feedPostDetails">
            <p>
                {author}
            </p>
            
            <p style={{borderRight: "1px solid black", width: "10px"}}></p>

            <p>
                Student at WeThinkCode
            </p>
        </div>

        <Link to={`/postHome/${id}`} style={{color: "black", textDecoration: "none"}} >
            <div className="feedPostContent">
                <h1>
                    {title}
                </h1>

                <p>
                    {content}
                </p>
            </div>
        </Link>

            <div className="feedPostInteractions">
                {buttonTypes.map(x => {
                    const {id, icon} = x;
                    return <button key={id}> {icon} </button>
                })}
            </div>
        
    </div>
  )
}

export default Post