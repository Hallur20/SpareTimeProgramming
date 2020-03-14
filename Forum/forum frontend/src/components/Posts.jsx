import React from 'react';
import {Link} from 'react-router-dom';
import { postsByTopicTitle } from '../data/PostLogic';

class Posts extends React.Component {
    constructor() {
        super();
        this.state = { posts: [], someState : ''};
    }
    

async componentDidMount(){
    const byTitle = await postsByTopicTitle(this.props.match.params.topic);
    this.setState({ posts: byTitle });
}

static getDerivedStateFromProps(nextProps, prevState){
    if(nextProps.someValue!==prevState.someValue){
      return { someState: nextProps.someValue};
   }
   else return null;
 }

 async componentDidUpdate(prevProps, prevState) {
    if(prevProps.match.params.topic !== this.props.match.params.topic){
        const byTitle = await postsByTopicTitle(this.props.match.params.topic);
        this.setState({ posts: byTitle });
    }
  }
 


    render() {
        return (
            <div>
                <p>topic choice: {this.props.match.params.topic}</p>
                {this.state.posts.map((item, index) => { return <Link to={'/post/'+item.title} key={index}>{item.title}</Link> })}
            </div>
        );
    }
}

export default Posts;