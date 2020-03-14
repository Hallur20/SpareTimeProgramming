import React from 'react';
import {postByTitle} from '../data/PostLogic';

class Post extends React.Component{

    constructor(){
        super();
        this.state = {post : {}};
    }

    async componentDidMount(){
        const res = await postByTitle(this.props.match.params.title);
        console.log(res);
        this.setState({post: res});
    }

    render(){
        return(<div>
            {this.state.post.title}<br/>
            {this.state.post.description}<br/>
            {this.state.post.locked}<br/>
        </div>);
    }
}

export default Post;