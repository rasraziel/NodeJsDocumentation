//Imports
const express = require("express");
const favicon = require('serve-favicon');


const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));
app.use(favicon(__dirname + '/public/images/favicon.ico'));

//Navigation
app.get('/', (req, res)=>{
    res.sendFile(__dirname + "/public/index.html");
});

app.get('/getting-started', (req, res)=>{
    res.sendFile(__dirname + "/public/getting-started.html");
});

app.get('/js', (req, res)=>{
    res.sendFile(__dirname + "/public/js.html");
});

app.get('/node-modules', (req, res)=>{
    res.sendFile(__dirname + "/public/node-modules.html");
});

app.get('/rest-api', (req, res)=>{
    res.sendFile(__dirname + "/public/rest.html");
});

app.get('/express', (req, res)=>{
    res.sendFile(__dirname + "/public/express.html");
});

app.listen(port, err =>{
    if (err)  
      console.log(err);
    else
      console.log("Server running on port", port);  
  });