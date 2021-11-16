import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { TimeAgo } from './TimeAgo'
import { ReactionButtons } from './ReactionButtons'

export const SinglePostPage = ({ match }) => {
  const { postId } = match.params
  const post = useSelector((state) =>
    state.posts.find((post) => post.id === postId)
  )

  if (!post) {
    return <h2>Not found</h2>
  }

  return (
    <section>
      <article className="post">
        <h2>{post.title}</h2>
        <p className="post-content">{post.content}</p>
        <Link to={`/editPost/${post.id}`} className="button">
          Edit post
        </Link>
        <TimeAgo timestamp={post.date} />
        <ReactionButtons post={post} />
      </article>
    </section>
  )
}
