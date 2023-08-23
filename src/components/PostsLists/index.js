import React from 'react'
import './index.css'
import styles from './single_post.module.css'
// import SinglePost from './single-post';
                              // props from App.js
export default function postList({testData ,posts}) {
  return (
    <div className='post-list-component '>
      <div className='postList container'>
        {/* {posts.map(post => <SinglePost post={post}/>)} */}
        {posts.map(post => (
          <div key={post.id} className={`single-post ${styles.card}`}>
            <h3>{post.title}</h3>
            <h4>status - {post.status}</h4>
          </div>
        ))}
      </div>
    </div>

  )
}
