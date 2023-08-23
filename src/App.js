import React from 'react'
import Navbar from './components/Navbar/index'
import PostsList from './components/PostsLists/index'
import Modal from './components/Modal/index'
import PostForm from './components/PostForm/index'
import { useState } from 'react'

export default function App() {
  let [posts, setPosts] = useState([
    {
      id : 1,
      title : "First Title"
    },
    {
      id : 2,
      title : "Second Title"
    },
    {
      id : 3,
      title : "Third Title"
    }
  ]);
  let [showModal, setShowModadl] = useState(false);
  let addPost = (post) => {
    setPosts(prevState => [...prevState, post]);
    setShowModadl(false);
  }
  return (
    // react fragment
    <>
      <Navbar setShowModal={setShowModadl} />
      {/* exports props */}
      <PostsList posts={posts} testData="test data" />
      {showModal && <Modal setShowModadl={setShowModadl} >
        {/* modal content (slots) */}
        <PostForm addPost={addPost} />
      </Modal>}
    </>
  )
}
