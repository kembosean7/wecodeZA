import React from 'react'
import "./feedFollow.css"

function FeedFollow({id, name}) {
  return (
    <div className="feedFollowContainer" key={id}>
        <div className="leftFC">
            <h2>
                {name}
            </h2>
            <p>Student at WTC</p>
            
            <div className="fcFollowing">
                <p>
                    5 Posts
                </p>

                <p>
                    10K Followers
                </p>
            </div>
        </div>

        <div className="rightFC">
            <button>
                Follow
            </button>
        </div>
    </div>
  )
}

export default FeedFollow