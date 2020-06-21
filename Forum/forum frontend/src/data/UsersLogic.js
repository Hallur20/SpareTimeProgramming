var network = require("./Networking.js");

export const allUsers  = 
  fetch(network.url + "api/users/all")
    .then((res) => { return res.json() })
    .then((json) => {return json;})
    .catch((err) => { console.log(err) })

export const login = (userNameOrEmail, password) =>
  fetch(network.url + "api/users/login?userNameOrEmail=" + userNameOrEmail + "&password=" + password, {method: 'POST'})
  .then((res)=>{ 
    console.log(res);
    if(res.email){
      console.log("yes for email");
    }
    return res.json()})
  .then((json)=>{return json})
  .catch((err)=>{
    console.log(err);
    console.log("login not successful");
    return null;
  })


