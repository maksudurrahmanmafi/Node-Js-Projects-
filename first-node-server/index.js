const express = require('express')
const app = express()
const port = 1001

app.get('/',(req,res) =>{
    res.send("Hello I am Node Js")
})

app.listen(port , () =>{
    console.log(`Express form the port : ${port}`);
    
})