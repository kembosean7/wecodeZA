import React, { useState } from 'react'
import "./profile.css"
import { FaArrowLeft } from "react-icons/fa6";
import ProfileHome from '../profileHome/ProfileHome';
import { CiHeart } from "react-icons/ci";
import { TfiWrite } from "react-icons/tfi";
import { FaRegTrashAlt } from "react-icons/fa";
import ProfileAbout from '../profileAbout/ProfileAbout';

function Profile({}) {
    const postButtons = [
        {
            id: "l",
            icon: <CiHeart />
        },
        {
            id: "e",
            icon: <TfiWrite />
        },
        {
            id: "d",
            icon: <FaRegTrashAlt />
        }
    ]

    const [userPage, setUserPage] = useState(0);
    let currentPage = <ProfileHome buttonTypes={postButtons} />

    if (userPage === 0) currentPage = <ProfileHome buttonTypes={postButtons} />
    else if (userPage === 1) currentPage = <ProfileAbout />
  return (
    <main className='userProfileMain'>
        <article className='userProfileTop'>
            <div className="userBack">
                <button>
                    <FaArrowLeft />
                </button>
            </div>

            <h1 className='userName'>Alexander I. Agu</h1>

            <p className='userDes'>
                Nobody knows how the selection process of WeThinkCode works but you can trust that we are here to help you.
            </p>

            <p className='userFollowing'>
                25 Following
            </p>
        </article>

        <article className='userProfileBottom'>
            <div className="userProfileNav">
                <button onClick={()=> setUserPage(0)}>
                    Home
                </button>

                <button onClick={()=> setUserPage(1)}>
                    About
                </button>
            </div>
            {currentPage}
        </article>
    </main>
  )
}

export default Profile