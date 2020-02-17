import React, { Component } from "react";
import ReactDOM from "react-dom";
import {allUsers} from '../UsersLogic';
import '../style.css'
var network = require("../Networking.js");
class FormContainer extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    }
  }


  async componentDidMount() {
    let data = await allUsers;

    console.log(data);
    this.setState({users : data});
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  render() {
    const { seo_title } = this.state;
    return (
      <div>
        {this.state.users.map((data) => <p key={data.id}>{data.id} {data.userName} {data.email} {data.password} {data.role.type}</p>)}
      </div>
    );
  }
}
export default FormContainer;
const wrapper = document.getElementById("create-article-form");
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;