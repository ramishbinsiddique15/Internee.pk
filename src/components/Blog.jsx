import React from 'react'
import './Blog.css'
import blog1 from '.././assets/img/blog1.png'
import blog2 from '.././assets/img/blog2.png'
import blog3 from '.././assets/img/blog3.png'
import blog4 from '.././assets/img/blog4.png'
const Blog = () => {
  return (
    <div className='blog'>
      <div className="blog-text">
        <p>Our Blog</p>
        <h1>Recent Blog</h1>
      </div>
      <div className="blog-cards">
        <div className="blog-card">
            <div>
            <img src={blog1}/>
            </div>
            <h1>Complete all of the task but didn't get certification yet? 😓🤦‍♀️</h1>
            <p>📧 Drop us a quick email at issues@internee.pk with the subject "Didn't get certification yet." Our team will swiftly resolve the matter, ensuring you get your recognition promptly.</p>
        </div>
        <div className="blog-card">
            <div>
            <img src={blog2}/>
            </div>
            <h1>We've hit a major milestone: 20,000 followers on LinkedIn! 🎉</h1>
            <p>Thank you for being a part of our incredible journey towards empowering students and professionals in the world of IT and services. Your support means the world to us! 🚀</p>
        </div>
        <div className="blog-card">
            <div>
            <img src={blog3}/>
            </div>
            <h1>🚀Calling communities to Empower Students, Collaborate with Internee.pk!✌</h1>
            <p>We'd love to discuss how a collaboration with Internee.pk can benefit your universites , socities, institutes and educational institutions and specially</p>
        </div>
        <div className="blog-card">
            <div>
            <img src={blog4}/>
            </div>
            <h1>Ready to Showcase Your Expertise? Follow These Simple Steps! 🌟</h1>
            <p>To complete the process, send us all the task details via email at careers@internee.pk. This ensures that we have all the necessary information to validate your certification.</p>
        </div>
      </div>
    </div>
  )
}

export default Blog
