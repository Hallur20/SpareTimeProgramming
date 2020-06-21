import React, { Component } from 'react';

class TopNavbar extends Component {
    constructor(){
        super();
        this.state = {userLoggedIn : {}}
    }

componentDidMount(){
    console.log(this.props.userLoggedIn);
   
    if( Object.keys(this.props.userLoggedIn).length === 0 && this.props.userLoggedIn.constructor === Object){
        console.log("empty objectttt");
        this.setState({userLoggedIn : {}});
    } else {

    }
}

    render() {
        return (
            <div className='topNav'>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">Forum!</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav mr-auto">
                            
                        </ul>
                        <span className="navbar-text">
        logged in as : {this.props.userLoggedIn.email}
                        </span>
                    </div>
                    
                </nav>
            </div>
        );
    }
}

export default TopNavbar;