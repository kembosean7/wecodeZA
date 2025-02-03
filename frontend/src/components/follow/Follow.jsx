import React from 'react'
import "./follow.css"

function Follow({id, author, publishDate, profession, title, post, findPage}) {
  return (
    <div className="followContainer" key={id}>
        <div className="followInfo" onClick={()=> findPage(2)}>
            <h2>
                {author}
            </h2>
            <p>
                {profession}
            </p>

            <p>
                I Post about wethinkcode stuff
            </p>
        </div>

        <button>
            Follow
        </button>
    </div>
  )
}

export default Follow