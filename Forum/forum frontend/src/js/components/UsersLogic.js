var network = require("./Networking.js");

export const allUsers  = 
  fetch(network.url + "api/users/all")
    .then((res) => { return res.json() })
    .then((json) => {return json;})
    .catch((err) => { console.log(err) })


