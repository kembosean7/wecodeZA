import React, { useState } from 'react'
import "./viewProfileHome.css"
import FeedPost from '../post/FeedPost'
import ViewPost from './ViewPost'
import PostHome from '../postHome/PostHome';

function ViewProfileHome() {
    const [viewPage, setViewPage] = useState(0);
    const [getData, setData] = useState({
        id: 1,
        author: "Alexander Agu",
        publishDate: "25 November 2025",
        profession: "Software Developer",
        title: "How to be a boss man like ALEXANDER I. AGU",
        post: "They say he is handsome and might just be the strongest man known to mankind. He eats steel for breakfast and kill OPPS desert because he is hime and nobody else can be him coz he is the only him to ever exist in the himolayian world of HIM'S"
    })
    if (viewPage == 0){
        return (
            <section className="viewHomeContainer">
        {/*         <FeedPost id={1} author={"Alexander I. Agu"} publishDate={"25 November 2025"} profession={"Software Developer"} title={"Why Alexander I. Agu is the main character"}
                
                description={"They say he is handsome and might just be the strongest man known to mankind. He eats steel for breakfast and kill OPPS desert because he is hime and nobody else can be him coz he is the only him to ever exist in the himolayian world of HIM'S"}/> */}
            
                <ViewPost />
            </section>
        )
    } else if (viewPage == 2){
        return (
            <PostHome />
        )
    }
}

export default ViewProfileHome