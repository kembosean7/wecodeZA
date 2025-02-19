import React, { useState } from 'react'
import "./viewProfile.css"
import { FaArrowLeft } from "react-icons/fa6";
import ProfileHome from '../profileHome/ProfileHome';
import ProfileAbout from '../profileAbout/ProfileAbout';
import { CiHeart } from "react-icons/ci";

function ViewProfile() {
    const postButtons = [
        {
            id: "l",
            icon: <CiHeart />
        }
    ]

    const [viewerPage, setViewerPage] = useState(0);
    let currentViewerPage = <ProfileHome buttonTypes={postButtons} />

    // Navigating the Home and About sections
    if (viewerPage === 0) currentViewerPage = <ProfileHome buttonTypes={postButtons} />;
    else if( viewerPage === 1) currentViewerPage = <ProfileAbout />

  return (
    <main className='viewProfileMain'>
        <article className="viewProfileLeft">
            <section className='viewLeftTop'>
                <div className="viewBack bigScreenButton">
                    <button>
                        <FaArrowLeft />
                    </button>
                </div>

                <h1 className='viewName'>Alexander I. Agu</h1>

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
                Alexander I. Agu
            </h2>

            <p>
                Student at WeThinkCode
            </p>

            <p className='viewDes'>
                Nobody knows how the selection process of WeThinkCode works but you can trust that we are here to help you.
            </p>

            <div className="viewFollow">
                <button>
                    Follow
                </button>

                <p>
                    25 Following
                </p>
            </div>
        </article>
    </main>
  )
}

export default ViewProfile