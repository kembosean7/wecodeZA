import React, { useEffect, useReducer, useState } from 'react'
import { BiLike } from "react-icons/bi";
import "./feedPost.css"
import { use } from 'react';
import PostHome from '../postHome/PostHome';

function getPostDescription(post){
/* 
    TODO:
        Gets a small amount of the post to display on the post
        Lenth of description should be 18
*/
    let splitPost = post.split(" ");
    let getDescription = "";

    if (splitPost.length < 25){
        for (let x = 0; x <= splitPost.length; x++){
            if (x == 0) getDescription += splitPost[x];
            getDescription += " " + splitPost[x];
        } 
    } else{
        for (let x = 0; x <= 25; x++){
            if (x == 0) getDescription += splitPost[x];
            getDescription += " " + splitPost[x];
        }
    }
    getDescription += "...";
    return getDescription;
};

function FeedPost({id, author, publishDate, profession,title, description, findPage, postState, getData}) {
  const [postPage, setPostPage] = useState(0); // State of the page

  
  useEffect(()=>{
    if (postPage == 0){
      setPostPage(0)
      
    } else if(postPage == 1){
      setPostPage(1)
      // Sends postPage state to the Feed component
      findPage(postPage);

      // Sends Selected post data to the Feed component
      getData({ ...postState,
        id: id,
        author: author,
        publishDate: publishDate,
        profession: profession,
        title: title,
        description: description
      })
    }
  },[postPage])

  return (
    <article className='postContainer' key={id}>

      <div className="owner">
        <div className="div">
          <h2>{author}</h2>
          <p>{publishDate}</p>
        </div>
        <p>{profession}</p>
      </div>

      <div className="postDes" onClick={()=> setPostPage(1)}>
        <h1>
          {title}
        </h1>
        <p>
          {
          getPostDescription(description)
          }
        </p>
      </div>

      <div className="postButtons">
        <BiLike />
      </div>
    </article>
  )
}

export default FeedPost