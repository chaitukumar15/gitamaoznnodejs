
var express=require("express")
var app= express();



app.get("/",(req,res)=>{


    res.send("hi this is root api")
})


app.listen(port,()=>{

    console.log("server has been started");
    
})