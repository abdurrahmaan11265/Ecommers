import React from 'react'
import { Link } from 'react-router-dom';

const BlogCard = () => {
  return (
    // <div className='col-3'>
      <div className="blog-card">
        <div className="card-image">
          <img src="images/blog-1.jpg" className='img-fluid w-100' alt="blog" />
        </div>
        <div className="blog-content">
          <p className="date">27 APR, 2024</p>
          <h5 className="title">A beautiful sunday morning renaissance</h5>
          <p className="desc">tempore fuga vitae itaque aperiam similique reiciendis harum molestiae laborum aliquid. Aliquid ut nemo officiis odit laboriosam explicabo impedit consectetur ipsa.</p>
          <Link to='/blog/:id' className='button'>READ MORE</Link>
        </div>
      </div>
    // </div>
  )
}

export default BlogCard;