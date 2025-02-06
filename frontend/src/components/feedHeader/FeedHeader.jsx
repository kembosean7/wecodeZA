import React, { useState } from 'react'
import { CgProfile } from "react-icons/cg";
import { TfiWrite } from "react-icons/tfi";
import { SlMenu } from "react-icons/sl";
import "./feedHeader.css"

function FeedHeader({setPage}) {
    const [page, setPagee] = useState(0);

    setPage(page)

  return (
    <header className='feedHeader'>
        <p>
            <SlMenu />
        </p>

        <h2 onClick={()=> setPagee(0)}>
            WeCodeZA
        </h2>

        <div className="accountNav">
            <div onClick={()=> setPagee(1)}>
                <CgProfile />
            </div>

            <button onClick={()=> setPagee(2)}>
                <TfiWrite />
            </button>
        </div>
    </header>
  )
}

export default FeedHeader