import React, { useState } from 'react'
import "./viewProfile.css"
import { FaArrowLeft } from "react-icons/fa6";
import ProfileHome from '../profileHome/ProfileHome';
import ProfileAbout from '../profileAbout/ProfileAbout';
import { CiHeart } from "react-icons/ci";
import { useParams } from 'react-router-dom';
import { getUserDataById } from '../../testData/testData';

function ViewProfile() {
    const postButtons = [
        {
            id: "l",
            icon: <CiHeart />
        }
    ]

    const params = useParams()
    const authorID = params.authorId;

    const getData = getUserDataById(Number(authorID));
    const {userId, name, miniDes, mainDes, following, followers, dateJoined} = getData;

    const [viewerPage, setViewerPage] = useState(0);
    let currentViewerPage = <ProfileHome buttonTypes={postButtons} />

    // Navigating the Home and About sections
    if (viewerPage === 0) currentViewerPage = <ProfileHome buttonTypes={postButtons} userId={userId} />;
    else if( viewerPage === 1) currentViewerPage = <ProfileAbout des={mainDes} following={following} followers={followers} dateJoined={dateJoined} />

  return (
    <main className='viewProfileMain'>
        <article className="viewProfileLeft">
            <section className='viewLeftTop'>
                {/* <div className="viewBack bigScreenButton">
                    <button>
                        <FaArrowLeft />
                    </button>
                </div> */}

                <h1 className='viewName'>{name}</h1>

            </section>

            <section className='viewLeftBottom'>
                <div className="viewNav">
                    <button onClick={()=> setViewerPage(0)}>
                        Home
                    </button>

                    <button onClick={()=> setViewerPage(1)}>
                        About
                    </button>
                </div>
                
                {currentViewerPage}
            </section>
        </article>

        <article className='viewProfileRight'>
            <div className="viewBack smallScreenButton">
                <button>
                    <FaArrowLeft />
                </button>
            </div>
            <h2>
                {name}
            </h2>

            <p>
                Student at WeThinkCode
            </p>

            <p className='viewDes'>
                {miniDes}
            </p>

            <div className="viewFollow">
                <button>
                    Follow
                </button>

                <p>
                    {following} Following
                </p>
            </div>
        </article>
    </main>
  )
}

export default ViewProfile