var network = require("./Networking");

export const allTopics  = 
  fetch(network.url + "api/topics/all")
    .then((res) => { return res.json() })
    .then((json) => {return json;})
    .catch((err) => { console.log(err) })
