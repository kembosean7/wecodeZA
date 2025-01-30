import React from 'react'
import "./postHome.css"
import FeedHeader from '../feedHeader/FeedHeader'
import { FaArrowLeft } from "react-icons/fa";
import { BiLike } from "react-icons/bi";

function PostHome() {
  return (
    <article className='postHome'>
        <FeedHeader />

        <section className='authorDetails'>
            <FaArrowLeft />
            <h2>Alexander I. Agu</h2>
            <p>Software Developer at wethinkcode</p>
            <p>Updated on 25 November 2025</p>
        </section>

        <div className='postType'>
            <h2>Article</h2>
            <BiLike />
        </div>

        <section className="postDetails">
            <h1 className='postHomeTitle'>
                How to pass the bootcamp and become a wethinkcoder.
            </h1>
            
            <div className="mainPost">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto temporibus dolorem rem beatae, quod, natus eveniet modi laudantium rerum dolor commodi accusamus voluptatibus suscipit autem ad, cumque in fuga vitae.
                    Ea autem at facilis pariatur ut error sapiente corporis nisi ratione optio quod libero eligendi sint nobis, maxime laboriosam consequuntur nostrum in ex. Architecto iusto eius hic, ea perspiciatis eveniet?
                </p>
                <p>
                    Commodi culpa, nisi amet suscipit, harum nihil nostrum, officia aperiam alias mollitia quae autem quidem sunt quod inventore obcaecati laudantium! Cumque neque officiis hic similique nam totam velit ab deleniti!
                    Tenetur, ratione vero. Repudiandae, quisquam, dolorum similique debitis quae corporis iusto nemo eligendi rem vel non doloribus quam itaque delectus voluptas illo explicabo magni sunt impedit, natus esse reiciendis ut?
                </p>
                <p>
                    Alias incidunt ratione nostrum cupiditate ipsum, laboriosam omnis corrupti culpa iure dolorum iste velit rem reiciendis magni corporis voluptatum assumenda praesentium, quod labore adipisci repudiandae vitae saepe! Aut, eius dolorem.
                </p>
            </div>

        </section>
    </article>
  )
}

export default PostHome