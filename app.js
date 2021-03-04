const express = require("express");
const app = express();
app.use(express.json());



app.listen(8080, err =>{
    if (err)  
      console.log(err);
    else
      console.log("Server running on port", 8080);  
  });