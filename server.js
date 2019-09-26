const express = require("express");
const app = express();
const bodyParser =require("body-parser");




//MIDDLEWARES
app.use(bodyParser.urlencoded({ extended: false }));


app.get("/app",(req,res)=>{
   res.send("server started");
});


app.get("*",(req,res)=>{
  res.send("404 - page not found.... try /api");
})

app.listen(5000);
