import React, { Component } from "react";
import ReactDOM from "react-dom";
import Input from "../presentational/Input.jsx";
var network = require("../Networking.js");
class FormContainer extends Component {
  constructor() {
    super();
    this.state = {
    }
  }


  componentDidMount(){
      fetch(network.url + "api/users/all")
      .then((res)=>{return res.json()})
      .then((json)=>{console.log(json);})
      .catch((err)=>{console.log(err)})
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  render() {
    const { seo_title } = this.state;
    return (
<div>
       here {network.url}
       </div>
    );
  }
}
export default FormContainer;

const wrapper = document.getElementById("create-article-form");
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;