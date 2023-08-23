import React from 'react'

export default function SinglePost({post}) {
  return  <div key={post.id} className='single-post'>{post.title}</div>
}
