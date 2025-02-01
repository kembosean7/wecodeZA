import React from 'react'
import './Profile.css'
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";


function Profile() {
  return (
    <main className='profile'>
      <section className='profile_info'>
        <div className='profile_details'>
          <div className='info'>
            <h1>Username</h1>
            <p>Email: useremail@email.com</p>
            <p>Location: Lagos, Nigeria</p>
            <p>Phone: 08012345678</p>
          </div>
          <button>Edit Profile</button>
        </div>
        <div className='profile_stats'>
          <div className='stats'>
            <h1>Articles</h1>
            <p>15</p>
          </div>
          <div className='stats'>
            <h1>Followers</h1>
            <p>2000</p>
          </div>
          <div className='stats'>
            <h1>Following</h1>
            <p>150</p>
          </div>
          <div className='stats'>
            <h1>Likes</h1>
            <p>300 000</p>
          </div>
        </div>
        <div className='profile_bio'>
          <h1>Bio</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas animi cum adipisci, neque rem vitae consectetur. Ducimus ipsum sit fuga iusto. Vero voluptatum quasi officia nam? Ratione libero natus enim.</p>
        </div>
        <div className='profile_socials'>
          <h1>Socials</h1>
          <div className='socials'>
           <div className='social_icons'>
            <FaFacebook />
            <p>facebook</p>
           </div>
           <div className='social_icons'>
            <FaSquareInstagram />
            <p>instagram</p>
           </div>
           <div className='social_icons'>
            <FaLinkedin />
            <p>LinkedIn</p>
           </div>
           <div className='social_icons'>
            <FaTwitterSquare />
            <p>Twitter</p>
           </div>
          </div>
        </div>
      </section>
      <section className='profile_posts'>
        <h1>Posted Articles</h1>
        <div className='profile_posts_container'>
          <div className='profile_post'>
            <div className='profile_post_header'>
              <h1>Article title</h1>
              <p className='post_date'>Date posted</p>
            </div>
            <p className='post'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio sit facere quasi et expedita pariatur libero repellendus, commodi asperiores ducimus consequuntur autem repudiandae sed. Praesentium, labore! Odit maxime esse fugiat?</p>
            <p className='post_likes'>15 Likes</p>
            <div className='profile_post_footer'>
              <button>Delete</button>
              <button>Edit</button>
            </div>
          </div>

          <div className='profile_post'>
            <div className='profile_post_header'>
              <h1>Article title</h1>
              <p className='post_date'>Date posted</p>
            </div>
            <p className='post'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio sit facere quasi et expedita pariatur libero repellendus, commodi asperiores ducimus consequuntur autem repudiandae sed. Praesentium, labore! Odit maxime esse fugiat?</p>
            <p className='post_likes'>15 Likes</p>
            <div className='profile_post_footer'>
              <button>Delete</button>
              <button>Edit</button>
            </div>
          </div>

          <div className='profile_post'>
            <div className='profile_post_header'>
              <h1>Article title</h1>
              <p className='post_date'>Date posted</p>
            </div>
            <p className='post'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio sit facere quasi et expedita pariatur libero repellendus, commodi asperiores ducimus consequuntur autem repudiandae sed. Praesentium, labore! Odit maxime esse fugiat?</p>
            <p className='post_likes'>15 Likes</p>
            <div className='profile_post_footer'>
              <button>Delete</button>
              <button>Edit</button>
            </div>
          </div>

          <div className='profile_post'>
            <div className='profile_post_header'>
              <h1>Article title</h1>
              <p className='post_date'>Date posted</p>
            </div>
            <p className='post'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio sit facere quasi et expedita pariatur libero repellendus, commodi asperiores ducimus consequuntur autem repudiandae sed. Praesentium, labore! Odit maxime esse fugiat?</p>
            <p className='post_likes'>15 Likes</p>
            <div className='profile_post_footer'>
              <button>Delete</button>
              <button>Edit</button>
            </div>
          </div>

          <div className='profile_post'>
            <div className='profile_post_header'>
              <h1>Article title</h1>
              <p className='post_date'>Date posted</p>
            </div>
            <p className='post'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio sit facere quasi et expedita pariatur libero repellendus, commodi asperiores ducimus consequuntur autem repudiandae sed. Praesentium, labore! Odit maxime esse fugiat?</p>
            <p className='post_likes'>15 Likes</p>
            <div className='profile_post_footer'>
              <button>Delete</button>
              <button>Edit</button>
            </div>
          </div>

          <div className='profile_post'>
            <div className='profile_post_header'>
              <h1>Article title</h1>
              <p className='post_date'>Date posted</p>
            </div>
            <p className='post'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio sit facere quasi et expedita pariatur libero repellendus, commodi asperiores ducimus consequuntur autem repudiandae sed. Praesentium, labore! Odit maxime esse fugiat?</p>
            <p className='post_likes'>15 Likes</p>
            <div className='profile_post_footer'>
              <button>Delete</button>
              <button>Edit</button>
            </div>
          </div>

          <div className='profile_post'>
            <div className='profile_post_header'>
              <h1>Article title</h1>
              <p className='post_date'>Date posted</p>
            </div>
            <p className='post'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio sit facere quasi et expedita pariatur libero repellendus, commodi asperiores ducimus consequuntur autem repudiandae sed. Praesentium, labore! Odit maxime esse fugiat?</p>
            <p className='post_likes'>15 Likes</p>
            <div className='profile_post_footer'>
              <button>Delete</button>
              <button>Edit</button>
            </div>
          </div>

          <div className='profile_post'>
            <div className='profile_post_header'>
              <h1>Article title</h1>
              <p className='post_date'>Date posted</p>
            </div>
            <p className='post'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio sit facere quasi et expedita pariatur libero repellendus, commodi asperiores ducimus consequuntur autem repudiandae sed. Praesentium, labore! Odit maxime esse fugiat?</p>
            <p className='post_likes'>15 Likes</p>
            <div className='profile_post_footer'>
              <button>Delete</button>
              <button>Edit</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Profile