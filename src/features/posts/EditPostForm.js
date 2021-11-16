import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { postUpdate } from './postsSlice'

export const EditPostForm = ({ match }) => {
  const { postId } = match.params

  const dispatch = useDispatch()
  const history = useHistory()

  const post = useSelector((state) =>
    state.posts.find((post) => post.id === postId)
  )

  const [title, setTitle] = useState(post.title)
  const [content, setContent] = useState(post.content)

  const onChangeTitle = (e) => setTitle(e.target.value)
  const onChangeContent = (e) => setContent(e.target.value)

  const onSavePostClicked = () => {
    if (title && setTitle) {
      dispatch(
        postUpdate({
          id: postId,
          title,
          content,
        })
      )
      history.push('posts/' + postId)
    }
  }

  return (
    <section>
      <h2>Edit Post</h2>
      <form>
        <input
          type="text"
          name="postTitle"
          id="postTitle"
          value={title}
          onChange={onChangeTitle}
        />
        <label htmlFor="postContent">Content: </label>
        <textarea
          name="postContent"
          id="postContent"
          value={content}
          onChange={onChangeContent}
        />
        <button onClick={onSavePostClicked}>Save post</button>
      </form>
    </section>
  )
}
