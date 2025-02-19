import React from 'react'
import "./profileHome.css"
import { viewProfileData } from '../../testData/viewProfileData'
import Post from '../post/Post';

import { buttonTypes } from '../feed/buttonTypes';

function ProfileHome({buttonTypes}) {
  return (
    <div className='profileHome'>
        {
            viewProfileData.map(x => {
                const {id, name, title, content} = x;
                return <Post key={id} buttonTypes={buttonTypes} id={id} author={name} title={title} content={content} />
            })
        }
    </div>
  )
}

export default ProfileHome