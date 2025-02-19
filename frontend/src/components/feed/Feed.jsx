import React from 'react'
import "./feed.css"
import { feedFollowData } from './feedTestData'
import { buttonTypes } from './buttonTypes';
import Post from '../post/Post';
import { CiHeart } from "react-icons/ci";
import FeedFollow from '../feedFollow/FeedFollow';
import { Link } from 'react-router-dom';
import { postData } from '../../testData/testData';
import { users } from '../../testData/testData';

function Feed({}) {
  // Makes sure post only has 1 button type -> like button
  const postButtons = [
    {
      id: "l",
      icon: <CiHeart />
    }
  ]

  return (
    <main className='feedMain'>
        <article className='feedLeft'>
            <section className='topFeed'>
              <p>+</p>

              {
                buttonTypes.map(x => {
                  const {id, name} = x;
                  return <button key={id}>{name}</button>
                })
              }
            </section>

            <section className='bottomFeed'>
              {
                postData.map(x => {
                  const {postId, name, title, content, topic} = x;
                  return (
                    <Link to={`/postHome/${postId}`} style={{color: "black", textDecoration: "none"}} >
                      <Post key={postId} buttonTypes={postButtons} id={postId} author={name} title={title} content={content} />
                    </Link>
                  )
                })
              }
            </section>
        </article>

        <article className='rightFeed'>
            <h2 className='fh'>
                Follow new Author's
            </h2>

            <section className='feedFollow'>
              {
                users.map(x => {
                  const {userId, name} = x;
                  return userId != 1? <FeedFollow key={userId} id={userId} name={name} /> : "";
                })
              }
            </section>
        </article>
    </main>
  )
}

export default Feed