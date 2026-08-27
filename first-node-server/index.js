const express = require("express");
const cors = require('cors');
const app = express();
const port = process.env.PORT || 1001;
app.use(cors())
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello I am Node Js");
});
app.get("/data", (req, res) => {
  res.send("A data form the data route  ");
});
app.get("/jsonData", (req, res) => {
  res.send("Json Data from json malu mafi 😂🫡 ");
});

const user = [
    {id:1,name:"Mafi",email:"m@gamil.com"},
    {id:2,name:"Mafi",email:"m@gamil.com"},
    {id:3,name:"Mafi",email:"m@gamil.com"},
]

app.get('/users',(req,res)=>{
    res.send(user);
})

app.post('/users',(req,res)=>{
    console.log('post method called',req.body);
    
})

app.listen(port, () => {
  console.log(`Express form the port : ${port}`);
});
