import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { postAdded } from './postsSlice'

export const AddPostForm = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const dispatch = useDispatch()

  const onTitleChange = (e) => setTitle(e.target.value)
  const onContentChange = (e) => setContent(e.target.value)
  const onSavePostClicked = (e) => {
    if (title && content) {
      dispatch(postAdded(title, content))
    }
    setTitle('')
    setContent('')
  }

  return (
    <section>
      <h2>Add a new post</h2>
      <input
        type="text"
        id="postTitle"
        name="postTitle"
        value={title}
        onChange={onTitleChange}
      />
      <label htmlFor="postContent">Content:</label>
      <textarea
        id="postContent"
        name="postContent"
        value={content}
        onChange={onContentChange}
      />
      <button type="button" onClick={onSavePostClicked}>
        Save post
      </button>
    </section>
  )
}
