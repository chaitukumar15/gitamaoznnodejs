
var express=require("express")
var app= express();

require("dotenv").config()


console.log(process.env.chaitanya);



app.get("/",(req,res)=>{


    res.send("hi this is root api")
})


var port=process.env.port || 4000

console.log(port);


app.listen(port,()=>{

    console.log("server has been started");
    
})