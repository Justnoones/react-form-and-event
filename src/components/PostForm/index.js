import React from 'react'
import './index.css'
import { useState } from 'react';
import { useRef } from 'react';

export default function PostForm({addPost}) {
  let title = useRef();
  let uploadPost = (e) => {
    e.preventDefault();
    let post = {
      id : Math.floor(Math.random() * 1000),
      title : title.current.value
    }
    title.current.value = "";
    addPost(post);
  }
  return (
    <form className='post-form-component' onSubmit={uploadPost}>
        <h1>Create Post</h1>
        <div className='form-control'>
            <label htmlFor=''>Title</label>
            <input type='' ref={title} />
        </div>
        <div className='form-control'>
            <button type='submit'>Post Now</button>
        </div>
    </form>
  )
}
