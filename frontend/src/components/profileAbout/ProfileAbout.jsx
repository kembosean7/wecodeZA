import React from 'react'
import "./profileAbout.css"

function ProfileAbout({des, following, followers, dateJoined}) {
  return (
    <div className="profileAbout">
        <p>
          {des}
        </p>

        <p>Memeber since {dateJoined}</p>

        <div className="aboutBottom">
            <p>{following} Following</p>
            <p>{followers} Followers</p>
        </div>
    </div>
  )
}

export default ProfileAbout