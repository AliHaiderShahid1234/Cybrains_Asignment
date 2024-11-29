import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Home from './pages/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import BlogDetail from './pages/BlogDetail';
import AuthContext from './authcontext';
import BlogList from './bloglist';
import NavBar from './navbar';
import CreateBlog from './createblog';
import BlogPost from './BlogPost';
import EditBlog from './editblog'
const App = () => {
  return (
    <AuthProvider>
      <Router>
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </nav>
        <div className="container">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/blog/:id" component={BlogDetail} />
            <Route path="/blog/:id" component={BlogDetail} />
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
