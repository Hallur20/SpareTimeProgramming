import React, {Component} from 'react';

class Sidebar extends Component {
    render() {
      return (
          <div>
            <div className="sidenav">
                <h3>topics</h3>
                <input placeholder='search'/>
  <a href="#about">About</a>
  <a href="#services">Services</a>
  <a href="#clients">Clients</a>
  <a href="#contact">Contact</a>
</div>
          </div>
      );
    }
  }
  
  export default Sidebar;