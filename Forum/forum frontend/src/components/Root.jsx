import React, { Component } from "react";
import ReactDOM from "react-dom";
import '../style.css'
import Other from './Other.jsx'
import { HashRouter, Link, Route, Switch } from 'react-router-dom';
import TopNavbar from './TopNavbar.jsx'
import SecondTopNavbar from './SecondTopNavbar.jsx'
import Sidebar from './Sidebar.jsx'
import ChatFooter from './ChatFooter.jsx';
import Posts from './Posts.jsx';
import Post from './Post.jsx'

export default class Root extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    }
  }




  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  render() {
    const { seo_title } = this.state;
    return (
      <div>
        <TopNavbar />
        <SecondTopNavbar />
        <Sidebar />
        <div className='content'>
          
            <Switch>
              <Route path="/posts/:topic" render={(props)=><Posts {...props}/>}/>
              <Route path="/post/:title" render={(props)=><Post {...props}/>}/>
            </Switch>
          
          <ChatFooter />
          <hr />

        </div>
      </div>
    );
  }
}
const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<HashRouter><Root /></HashRouter>, wrapper) : false;