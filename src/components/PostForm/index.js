import React from 'react'
import './index.css'
import { useState } from 'react';

export default function PostForm() {
    let  [title, setTitle] = useState("");
  return (
    <form className='post-form-component'>
        <h1>Create Post</h1>
        <div className='form-control'>
            <label htmlFor=''>Title</label>
            <input type='' name='' id='' className='' onChange={e => setTitle(e.target.value)} value={title} />
        </div>
        <p>{title}</p>
        <button type='button' onClick={_ => setTitle('')}>Reset Form</button>
        <div className='form-control'>
            <button type='submit'>Post Now</button>
        </div>
    </form>
  )
}
