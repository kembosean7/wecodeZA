import React from 'react'
import "./viewProfile.css"
import { FaArrowLeft } from "react-icons/fa6";
import ProfileHome from '../profileHome/ProfileHome';
import ProfileAbout from '../profileAbout/ProfileAbout';

function ViewProfile() {
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
                    <button>
                        Home
                    </button>

                    <button>
                        About
                    </button>
                </div>
                
                <ProfileHome />
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