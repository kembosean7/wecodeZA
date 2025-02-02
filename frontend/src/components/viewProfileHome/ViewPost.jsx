import React from 'react'
import "./viewProfileHome.css"

function ViewPost({id, author, publishDate,profession, title, post, dataState, getData, toPage}) {

    
  return (
    <div className="viewPostContainer" key={id} onClick={()=> {
                                    getData({...dataState, id: id, author:author, publishDate: publishDate, profession: profession, title: title, post: post});
                                    toPage(1)
                                    console.log(post)
                                }
                                }>
        <div className="viewInfo">
            <h2 className='viewAuthor'>
                {author}
            </h2>
            <p>{publishDate}</p>
        </div>
        <h2 className='viewTitle'>
            {title}
        </h2>
        <p>5M Likes</p>
    </div>
  )
}

export default ViewPost