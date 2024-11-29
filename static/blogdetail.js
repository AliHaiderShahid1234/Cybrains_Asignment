import React from 'react';  
import { useParams } from 'react-router-dom';  

const BlogDetail = () => {  
    const { id } = useParams();  
    const post = {  
        title: 'My First Blog Post',  
        content: 'This is the content of my first blog post.'  
    };  

    return (  
        <div>  
            <h1>{post.title}</h1>  
            <p>{post.content}</p>  
        </div>  
    );  
};  

export default BlogDetail;