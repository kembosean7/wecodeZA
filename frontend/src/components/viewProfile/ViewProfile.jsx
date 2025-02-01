import React, { useState } from 'react'
import "./viewProfile.css"
import ViewProfileHome from '../viewProfileHome/ViewProfileHome'
import ViewProfileAbout from '../viewProfileAbout/ViewProfileAbout'
import PostHome from '../postHome/PostHome';

function ViewProfile() {
    let [viewNavPage, setViewNavPage] = useState(0);
    let [getData, setData] = useState({
        id: null,
        author: null,
        publishDate: null,
        profesion: null,
        title: null,
        post: null
    })
    if (viewNavPage == 0){
        return (
            <article className='viewProfileContainer'>
                <div className="viewProfileR">
                    <h1 className='viewAboutName'>Alexander I. Agu</h1>

                    <nav className='viewProfileNavbar'>
                        <button onClick={()=> setViewNavPage(0)} style={{borderBottom: "1px solid black", transition: "300ms"}}>Posts</button>
                        <button onClick={()=> setViewNavPage(1)}>About</button>
                    </nav>
                    <ViewProfileHome getPage={setViewNavPage} setData={setData}/>
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
    } else if (viewNavPage == 1){
        return (
            <article className='viewProfileContainer'>
                <div className="viewProfileR">
                    <h1 className='viewAboutName'>Alexander I. Agu</h1>
                    <nav className='viewProfileNavbar'>
                        <button onClick={()=> setViewNavPage(0)} >Posts</button>
                        <button onClick={()=> setViewNavPage(1)} style={{borderBottom: "1px solid black", transition: "200ms"}}>About</button>
                    </nav>
                    <ViewProfileAbout />
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
    } else if(viewNavPage == 2){
        return (
            <PostHome id={getData.id} author={getData.author} publishDate={getData.publishDate} profession={getData.profesion} title={getData.title} post={getData.post} />
        )
    }
}

export default ViewProfile