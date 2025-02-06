import React, { useState } from 'react'
import FeedHeader from '../feedHeader/FeedHeader'
import Feed from '../feed/Feed'
import Profiiles from '../profile/Profiiles';
import Write from '../write/Write';

function LoggedIn() {
    const [activePage, setActivePage] = useState(0);
    console.log(activePage)
    if (activePage === 0){
        return <>
            <FeedHeader setPage={setActivePage} />
            <Feed />
        </>
    } else if (activePage === 1){
        return<>
            <FeedHeader setPage={setActivePage}/>
            <Profiiles />
        </>
    } else if (activePage === 2){
        return<>
            <FeedHeader setPage={setActivePage} />
            <Write />
        </>
    }
}

export default LoggedIn