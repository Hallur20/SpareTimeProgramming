import React, {Component} from 'react';
import { allUsers } from '../data/UsersLogic';

class Other extends Component {

  constructor(props){ 
    super(props);
    this.state = {users : []}
  }


  async componentDidMount() {
    let data = await allUsers;
    console.log(data);
    this.setState({ users: data });
  }

    render() {
      return (
          <div>
                    {this.state.users.map((data) => <p key={data.id}>{data.id} {data.userName} {data.email} {data.password} {data.role.type}</p>)}
          </div>
      );
    }
  }
  
  export default Other;