import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import Navegacion from './Navegacion';
import Posts from './Posts';
import SinglePost from './SinglePost';

class Router extends Component {
    state={
        posts:[]
    }
    componentDidMount(){
        this.obtenerPosts();
    }
    obtenerPosts=()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
                .then(respuesta=>{
                    this.setState({
                        posts:respuesta.data
                    })
                })
    }
    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <div className="row justified-content-center">
                        <Header />
                        <Navegacion />
                        <Switch>
                            <Route 
                                exact path="/"
                                render={()=>{
                                    return(
                                        <Posts
                                            posts={this.state.posts} 
                                        />
                                    )
                                }}
                            />
                            <Route exact path="/post/:postId" render={(props)=>{
                                let idPost=props.location.pathname.replace('/post/', '')
                                return (
                                    <SinglePost/>
                                )
                                    
                                
                            }}
                            />
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default Router;