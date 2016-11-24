var express = require("express");

var app = express();

app.get('/parse', function (req, res) {
    
    var responseToSend = {};
    
    var agent = req.headers["user-agent"]; 
    responseToSend.software = agent.substring(agent.indexOf('(')+1, agent.indexOf(')'));
    responseToSend.language = req.headers["accept-language"].substring(0, 5);
    responseToSend.ipaddress = req.headers["x-forwarded-for"];
    return res.json(responseToSend);
});

app.listen(8080, function () {
  console.log('Request Parser app listening on port 8080!');
});