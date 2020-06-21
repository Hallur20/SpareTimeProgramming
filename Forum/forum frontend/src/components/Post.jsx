import React from 'react';
import {postByTitle} from '../data/PostLogic';

class Post extends React.Component{

    constructor(){
        super();
        this.state = {post : {
            topic: {}
        }};
    }

    async componentDidMount(){
        const res = await postByTitle(this.props.match.params.title);
        console.log(res);
        this.setState({post: res});
    }

    render(){
        return(<div>
            <div id="postBorder">
            title:{this.state.post.title}<br/>
            description:{this.state.post.description}<br/>
            is locked:{"" + this.state.post.locked}<br/>
            topic:{this.state.post.topic.title}
            </div>
        </div>);
    }
}

export default Post;