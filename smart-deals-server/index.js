const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
//middleware
app.use(cors());
app.use(express.json());

const uri =  "mongodb+srv://smartdb:SmartDB2026Pass@smartdb.ld4whe7.mongodb.net/?appName=smartdb";
const client = new MongoClient(uri,{
    family: 4,

    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
})
const port = process.env.PORT || 534;
app.get("/",(req,res)=>{
    res.send("Server is running successfully")      
})

async function run  () {
    try{
        await client.connect();
        console.log("Database connected successfully")

        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    }
    finally{
        // await client.close();
    }
}
run().catch(console.error);
app.listen(port,(req,res)=>{
    console.log(`Server is running on port ${port}`)
})