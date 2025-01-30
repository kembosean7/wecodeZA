import React from 'react'
import "./feed.css"
import Post from '../post/FeedPost'
import { CiSearch } from "react-icons/ci";
import FeedPost from '../post/FeedPost';
import Follow from '../follow/Follow';
import { IoMdPersonAdd } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

function Feed() {
  return (
    <main className='feedContainer'>
              <input type="checkbox" id='followSide'/>
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

            <div className="typeHeader">
              <h2 className='head'>Articles</h2>
              <label htmlFor="followSide"><IoMdPersonAdd /></label>
              
            </div>

          </div>

          <div className="posts">
            <FeedPost />
            <FeedPost />
            <FeedPost />
            <FeedPost />
          </div>
        </section>

        <section className="rightFeed">
          <label htmlFor="followSide">
            <IoMdClose />
          </label>
          

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