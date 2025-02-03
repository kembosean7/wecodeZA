import React, { useState } from 'react'
import "./viewProfile.css"
import ViewProfileHome from '../viewProfileHome/ViewProfileHome'
import ViewProfileAbout from '../viewProfileAbout/ViewProfileAbout'
import PostHome from '../postHome/PostHome';
import { FaArrowLeft } from "react-icons/fa";
import { viewProfileData } from '../testData/TestData';

/* 
    This components recieves the User Id and uses it to fetch data from the API
*/

function ViewProfile({findPage}) {
    // USESTATES
    const [viewNavPage, setViewNavPage] = useState(0); // Navigates through the post and about
    const [page, setPage] = useState(0)

    let [getData, setData] = useState({
        id: null,
        author: null,
        publishDate: null,
        profesion: null,
        title: null,
        post: "Alexander"
    })



    // Displays selected components
    let viewComponent = <ViewProfileHome userProfileData={viewProfileData} dataState={getData} getData={setData} toPage={setPage}/>;
    if (viewNavPage == 0){
        viewComponent = <ViewProfileHome userProfileData={viewProfileData} dataState={getData} getData={setData} toPage={setPage}/>;
    } else if (viewNavPage == 1){
        viewComponent = <ViewProfileAbout />;
    }

    if (page == 0){
        return (
            <article className='viewProfileContainer'>
                <div className="viewProfileR">
                    <FaArrowLeft onClick={()=> findPage(0)} />
                    <h1 className='viewAboutName'>Alexander I. Agu</h1>

                    <nav className='viewProfileNavbar'>
                        <button onClick={()=> setViewNavPage(0)} >Posts</button>
                        <button onClick={()=> setViewNavPage(1)} >About</button>
                    </nav>
                    {viewComponent}
                </div>

                <div className="viewProfileL">
                    <div className="viewInfo">
                    <h2 className='viewFollowName'>Alexander I. Agu</h2>
                    <p>
                        I am him and nothing else and just know i will become a GOD at some point in life
                    </p>

                    <p>
                        6K Followers
                    </p>

                    <button>Follow</button>
                    </div>
                </div>
            </article>
        )
    } else if(page == 1){
        return (
            <PostHome id={getData.id} author={getData.author} publishDate={getData.publishDate} profession={getData.profesion} title={getData.title} post={getData.post} getPage={setPage} />
        )
    }
}

export default ViewProfile