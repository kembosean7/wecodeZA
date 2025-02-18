import React from 'react'
import "./feed.css"
import { buttonType, postData, feedFollowData } from './feedTestData'
import Post from '../post/Post';
import { CiHeart } from "react-icons/ci";
import FeedFollow from '../feedFollow/FeedFollow';

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
                buttonType.map(x => {
                  const {id, name} = x;
                  return <button key={id}>{name}</button>
                })
              }
            </section>

            <section className='bottomFeed'>
              {
                postData.map(x => {
                  const {id, name, title, content} = x;
                  return (<Post key={id} buttonTypes={postButtons} id={id} author={name} title={title} content={content} />)
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
                feedFollowData.map(x => {
                  const {id, name} = x;
                  return <FeedFollow key={id} id={id} name={name} />
                })
              }
            </section>
        </article>
    </main>
  )
}

export default Feed