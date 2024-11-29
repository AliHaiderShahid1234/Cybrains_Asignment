import React, { useState } from 'react';  
import { useHistory } from 'react-router-dom';  

const Login = () => {  
    const [email, setEmail] = useState('');  
    const [password, setPassword] = useState('');  
    const history = useHistory();  

    const handleSubmit = (e) => {  
        e.preventDefault();  
        console.log('User logged in:', { email, password });  
        history.push('/'); 
    };  

    return (  
        <div>  
            <h1>Login</h1>  
            <form onSubmit={handleSubmit}>  
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
                <button type="submit">Login</button>  
            </form>  
        </div>  
    );  
};  

export default Login;
