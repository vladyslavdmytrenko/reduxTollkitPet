import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const PostsList = () => {
  const posts = useSelector((state) => state.posts);

  const renderPost = posts.map((post) => (
    <article className="post-excerpt" key={post.id}>
      <h3>{post.title}</h3>
      <p className="post-content">{post.content.substring(0, 100)}</p>
      <Link to={`posts/${post.id}`} className="button muted-button">
        Viwe post
      </Link>
    </article>
  ));

  return (
    <section className="post-list">
      <h2>Posts</h2>
      {renderPost}
    </section>
  );
};
