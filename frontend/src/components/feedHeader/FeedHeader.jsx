import React from 'react'
import { CgProfile } from "react-icons/cg";
import { TfiWrite } from "react-icons/tfi";
import { SlMenu } from "react-icons/sl";
import "./feedHeader.css"

function FeedHeader() {
  return (
    <header className='feedHeader'>
        <p>
            <SlMenu />
        </p>

        <h2>
            WeCodeZA
        </h2>

        <div className="accountNav">
            <div>
                <CgProfile />
            </div>

            <button>
                <TfiWrite />
            </button>
        </div>
    </header>
  )
}

export default FeedHeader