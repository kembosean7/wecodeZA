import React from 'react'
import "./managePost.css"

function ManagePost({id, author, publishDate, profession,title, description}) {
  return (
    <section className='managePost'>
        <h2>{author}</h2>
        <p>{publishDate}</p>
        <h1>{title}</h1>

        <div className="buttonManager">
          <p>6K like</p>
          <p>delete</p>
        </div>
    </section>
  )
}

export default ManagePost