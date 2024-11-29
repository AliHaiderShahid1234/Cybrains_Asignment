import React from 'react';
import { Link } from 'react-router-dom';

const BlogPost = ({ post, onDelete }) => (
  <div className="blog-post">
    <h2 className="blog-title">{post.title}</h2>
    <p className="blog-content">{post.content}</p>
    <p><strong>By: {post.author}</strong></p>
    <Link to={`/blog/${post.id}`} className="button">View</Link>
    <button className="button" onClick={() => onDelete(post.id)}>Delete</button>
  </div>
);

export default BlogPost;
