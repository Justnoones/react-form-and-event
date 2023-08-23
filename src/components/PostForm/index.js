import React from 'react'
import './index.css'
import { useState } from 'react';

export default function PostForm({addPost}) {
  let  [title, setTitle] = useState("");
  let uploadPost = (e) => {
    e.preventDefault();
    let post = {
      id : Math.floor(Math.random() * 1000),
      title : title
    }
    setTitle("");
    addPost(post);
  }
  return (
    <form className='post-form-component' onSubmit={uploadPost}>
        <h1>Create Post</h1>
        <div className='form-control'>
            <label htmlFor=''>Title</label>
            <input type='' name='' id='' className='' onChange={e => setTitle(e.target.value)} value={title} />
        </div>
        <div className='form-control'>
            <button type='submit'>Post Now</button>
        </div>
    </form>
  )
}
