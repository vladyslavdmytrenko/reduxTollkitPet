import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { postAdded } from './postsSlice'

export const AddPostForm = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [userId, setUserId] = useState('')
  const dispatch = useDispatch()

  const users = useSelector((state) => state.users)

  const onTitleChange = (e) => setTitle(e.target.value)
  const onContentChange = (e) => setContent(e.target.value)
  const onAuthorChange = (e) => setUserId(e.target.value)

  const onSavePostClicked = (e) => {
    if (title && content) {
      dispatch(postAdded(title, content, userId))
    }
    setTitle('')
    setContent('')
  }

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

  const userOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.id}
    </option>
  ))

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
      <label htmlFor="postAuthor">Author:</label>
      <select id="postAuthor" value={userId} onChange={onAuthorChange}>
        <option value=""></option>
        {userOptions}
      </select>
      <label htmlFor="postContent">Content:</label>
      <textarea
        id="postContent"
        name="postContent"
        value={content}
        onChange={onContentChange}
      />
      <button disabled={!canSave} type="button" onClick={onSavePostClicked}>
        Save post
      </button>
    </section>
  )
}
