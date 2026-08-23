const express = require('express')
const app = express()
const port = 1001

app.get('/',(req,res) =>{
    res.send("Hello I am Node Js")
})
app.get ('/data',(req,res) =>{
    res.send("A data form the data route hehehehehehehehe ");
})

app.listen(port , () =>{
    console.log(`Express form the port : ${port}`);
    
})