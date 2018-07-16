import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';


import Posts from './components/post';
import Profile from './components/profile';
import PostsItem from './components/postItem';
import NotFound from './components/notfound';
import LifeCycle from './components/lifecycle';
 
class App extends Component{
    render(){
        return <div>Home</div>
    }
}


ReactDOM.render(
    <BrowserRouter>
        <div>
            <header>
                <Link to="/">Home</Link>
                <Link to="/posts">Post</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/life">LifeCycle</Link>
            </header>
            <Route exact path="/" component={App}></Route>
            <Route exact path="/posts" component={Posts}></Route>
            <Route exact path="/profile" component={Profile}></Route>
            <Route exact path="/posts/:id" component={PostsItem}></Route>
            <Route exact path="/life" component={LifeCycle}></Route>
            
        </div>
    </BrowserRouter>
    , document.getElementById('root'));

