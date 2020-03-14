import React, { Component } from 'react';
import { allTopics } from '../data/TopicsLogic';
import {Link} from 'react-router-dom';

class Sidebar extends Component {

  constructor() {
    super();
    this.state = { topics: [] };
  }

  async componentDidMount() {
    const topicsFetched = await allTopics;
    console.log(topicsFetched);
    this.setState({ topics: topicsFetched });
  }

  render() {
    return (
      <div>
        <div className="sidenav">
          <h3>topics</h3>
          <input placeholder='search' />
          {this.state.topics.map((item, index) => { return <Link replace={true} to={'/posts/' + item.title} key={index}>{item.title}</Link> })}
        </div>
      </div>
    );
  }
}

export default Sidebar;