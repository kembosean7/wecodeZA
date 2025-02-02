import React, { useState } from 'react'
import "./viewProfileHome.css"
import FeedPost from '../post/FeedPost'
import ViewPost from './ViewPost'
import PostHome from '../postHome/PostHome';

function ViewProfileHome({userProfileData, dataState, getData, toPage}) {
    const [viewPage, setViewPage] = useState(0);


    if (viewPage == 0){
        return (
            <section className="viewHomeContainer">
                {
                    userProfileData.map(x => {
                        const {id, author, publishDate,proffesion, title, description} = x;
                        
                        return (
                            <ViewPost 
                                id={id}
                                author={author}
                                publishDate={publishDate} 
                                profession={proffesion}
                                title={title} 
                                post={description}
                                dataState={dataState} 
                                getData={getData}
                                toPage={toPage}
                            />
                        )
                    })
                }
            </section>
        )
    } 
}

export default ViewProfileHome