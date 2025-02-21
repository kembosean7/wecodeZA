import React from 'react'
import "./feedFollow.css"
import { Link } from 'react-router-dom'

function FeedFollow({id, name, followers}) {
  return (
    <Link style={{color: "black", textDecoration: "none"}} to={`/viewAuthor/${id}`} className="feedFollowContainer" key={id}>
        <div className="leftFC">
            <h2>
                {name}
            </h2>
            <p>Student at WTC</p>
            
            <div className="fcFollowing">
                <p>
                    2 Posts
                </p>

                <p>
                    {followers} Followers
                </p>
            </div>
        </div>

        <div className="rightFC">
            <button>
                Follow
            </button>
        </div>
    </Link>
  )
}

export default FeedFollow