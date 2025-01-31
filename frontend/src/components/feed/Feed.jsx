import React, { useReducer, useState } from 'react'
import "./feed.css"
import Post from '../post/FeedPost'
import { CiSearch } from "react-icons/ci";
import FeedPost from '../post/FeedPost';
import Follow from '../follow/Follow';
import { IoMdPersonAdd } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { feedData } from '../testData/TestData';
import PostHome from '../postHome/PostHome';

function Feed() {
  const [findPage, setFoundPage] = useState(0);
  const [getData, setData] = useState({
    id: null,
    author: null,
    publishDate: null,
    profession: null,
    title: null,
    description: null
  });


  if(findPage == 0){
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
              {
                feedData.map(x =>{
                  const {id, author, publishDate, proffesion, title, description} = x;

                  return <FeedPost id={id} author={author} publishDate={publishDate} profession={proffesion} title={title} description={description} findPage={setFoundPage} getData={setData} reducerSate={getData}/>
                })
              }
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
  } else if(findPage == 1){
    return (
      <PostHome id={getData.id} author={getData.author} publishDate={getData.publishDate} profession={getData.profession} title={getData.title} post={getData.description} getPage={setFoundPage}/>
    )
  }
}

export default Feed