import React, { Component } from "react";
import ReactDOM from "react-dom";
import '../style.css'
import Other from './Other.jsx'
import { HashRouter,Link, Route, Switch} from 'react-router-dom';
import TopNavbar from './TopNavbar.jsx'
import SecondTopNavbar from './SecondTopNavbar.jsx'
import Sidebar from './Sidebar.jsx'
import ChatFooter from './ChatFooter.jsx';
var network = require("../data/Networking.js");



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
        <TopNavbar/>
        <SecondTopNavbar/>
        <Sidebar/>

        <div className='content'>
          <HashRouter>
          <Switch>
    
            <Route to="/test" component={Other}></Route>
          </Switch>
          </HashRouter>
<ChatFooter/>
          <hr />
 
        </div>
      </div>
    );
  }
}
const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<Root />, wrapper) : false;