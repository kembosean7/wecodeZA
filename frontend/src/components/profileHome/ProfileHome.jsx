import React from 'react'
import "./profileHome.css"
import { viewProfileData } from '../../testData/viewProfileData'
import Post from '../post/Post';
import { CiHeart } from "react-icons/ci";
import { buttonTypes } from '../feed/buttonTypes';

function ProfileHome({userId}) {
    const postButtons = [
        {
            id: "l",
            icon: <CiHeart />
        }
    ]
    
  return (
    <div className='profileHome'>
        {
            viewProfileData.map(x => {
                const {id, name, title, content} = x;
                return <Post key={id} buttonTypes={postButtons} id={id} author={name} title={title} content={content} />
            })
        }
    </div>
  )
}

export default ProfileHome