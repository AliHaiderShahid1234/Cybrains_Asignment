import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import BlogList from '../components/BlogList';
import CreateBlog from '../components/CreateBlog';

const Home = () => {
  const { user } = useContext(AuthContext);
  const [blogs, setBlogs] = useState([]);

  const createBlog = (newBlog) => {
    setBlogs([...blogs, { ...newBlog, id: blogs.length + 1, author: user.username }]);
  };

  const deleteBlog = (id) => {
    setBlogs(blogs.filter((blog) => blog.id !== id));
  };

  return (
    <div>
      {user && <CreateBlog onCreate={createBlog} />}
      <BlogList posts={blogs} onDelete={deleteBlog} />
    </div>
  );
};

export default Home;
