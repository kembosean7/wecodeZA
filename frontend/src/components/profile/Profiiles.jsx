import React, { useState } from 'react';
import './profiles.css';
import { viewProfileData } from '../testData/TestData';
import FeedPost from '../post/FeedPost';
import ManagePost from '../managePost/ManagePost';

function Profiiles() {
    const [page, setPage] = useState(0);
    const [data, setData] = useState({
        id: null,
        author: null,
        publishDate: null,
        profession: null,
        title: null,
        description: null
    })


  return (
    <main className='profileContainer'>
            <div className="profileInfo">
                <h1>Alexander I. Agu</h1>
                <p>Software Developer at WeThinCode</p>
                <div className="profileFriends">
                    <p>6M Followers</p>
                    <p>0 Following</p>
                </div>

                <div className="profileDes">
                    <input type="checkbox" id='reveal' />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat illum beatae quaerat pariatur nulla a quae facere architecto! Voluptates aspernatur doloribus nobis. Repudiandae nobis accusamus perspiciatis. Neque beatae cupiditate accusantium. <label htmlFor="reveal">show more...</label></p>
                    <br />
                    <div className="more">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto dolore ratione voluptates quis blanditiis maiores eius maxime provident et optio alias possimus assumenda at, qui debitis soluta iusto libero doloribus? <label htmlFor="reveal" className='show'>show less</label></p>
                    </div>
                </div>
            </div>

            <div className="profilePosts">
                <h2 className='managerHeader'>Manage Posts</h2>

                {
                    viewProfileData.map(x => {
                        const {id, author, publishDate, profession, title, description} = x;

                        return (
                            <ManagePost
                                id={id}
                                author={author}
                                publishDate={publishDate}
                                profession={profession}
                                title={title}
                                description={description}
                            />
                        )
                    })
                }
            </div>
    </main>
  )
}

export default Profiiles