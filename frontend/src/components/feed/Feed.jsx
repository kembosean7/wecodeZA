import React from 'react'
import "./feed.css"
import Post from '../post/FeedPost'
import { CiSearch } from "react-icons/ci";
import FeedPost from '../post/FeedPost';
import Follow from '../follow/Follow';

function Feed() {
  return (
    <main className='feedContainer'>
        <section className="leftFeed">

          <div className="feedTopHeader">

            <div className="feedSearch">
              <div className="search">
                <button>
                  <CiSearch />
                </button>

                <input type="text" placeholder='How to get into wethinkcode' />
              </div>

              <div className="filter">
                <p>My Topics:</p>

                <p className='feedTopics'>Game Dev</p>
                <p className='feedTopics'>Game Dev</p>
                <p className='feedTopics'>Game Dev</p>
                <p className='feedTopics'>Game Dev</p>
                <p className='feedTopics'>Coding stuff</p>
              </div>
            </div>

            <h2 className='head'>Articles</h2>

          </div>

          <div className="posts">
            <FeedPost />
            <FeedPost />
            <FeedPost />
            <FeedPost />
          </div>
        </section>

        <section className="rightFeed">
          <h2>People you might be intrested in:</h2>

          <div className="feedFollows">
            <Follow />
            <Follow />
            <Follow />
            <Follow />
            <Follow />
            <Follow />
            <Follow />
            <Follow />
          </div>
        </section>
    </main>
  )
}

export default Feed