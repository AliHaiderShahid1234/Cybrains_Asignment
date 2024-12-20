import React, { useState } from 'react';  
import { useHistory } from 'react-router-dom';  

const Signup = () => {  
    const [username, setUsername] = useState('');  
    const [email, setEmail] = useState('');  
    const [password, setPassword] = useState('');  
    const history = useHistory();  

    const handleSubmit = (e) => {  
        e.preventDefault();  
        console.log('User signed up:', { username, email, password });  
        history.push('/login'); 
    };  

    return (  
        <div>  
            <h1>Sign Up</h1>  
            <form onSubmit={handleSubmit}>  
                <input  
                    type="text"  
                    placeholder="Username"  
                    value={username}  
                    onChange={(e) => setUsername(e.target.value)}  
                    required  
                />  
                <input  
                    type="email"  
                    placeholder="Email"  
                    value={email}  
                    onChange={(e) => setEmail(e.target.value)}  
                    required  
                />  
                <input  
                    type="password"  
                    placeholder="Password"  
                    value={password}  
                    onChange={(e) => setPassword(e.target.value)}  
                    required  
                />  
                <button type="submit">Sign Up</button>  
            </form>  
        </div>  
    );  
};  

export default Signup;
