import React, { useState } from 'react';  
import { useParams, useHistory } from 'react-router-dom';  

const EditBlog = () => {  
    const { id } = useParams();  
    const history = useHistory();  
    const [title, setTitle] = useState(''); // Fetch existing title  
    const [content, setContent] = useState(''); // Fetch existing content  

    const handleSubmit = (e) => {  
        e.preventDefault();  
        // Update logic here  
        history.push(`/post/${id}`);  
    };  

    return (  
        <form onSubmit={handleSubmit}>  
            <div>  
                <input  
                    type="text"  
                    placeholder="Title"  
                    value={title}  
                    onChange={(e) => setTitle(e.target.value)}  
                    required  
                />  
            </div>  
            <div>  
                <textarea  
                    placeholder="Content"  
                    value={content}  
                    onChange={(e) => setContent(e.target.value)}  
                    required  
                />  
            </div>  
            <button type="submit">Update Post</button>  
        </form>  
    );  
};  

export default EditBlog;