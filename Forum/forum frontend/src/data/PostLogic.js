var network = require("./Networking");

export const postsByTopicTitle = (food) => fetch(network.url + '/api/posts/topic/' + food).then((res)=>{
    return res.json();
}).then((json)=>{
    return json;
});

export const postByTitle = (title) => fetch(network.url + '/api/posts/title/'+title).then((res)=>{
    return res.json();
}).then((json)=>{
    return json;
});