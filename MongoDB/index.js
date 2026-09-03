/* const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3400;
app.use(cors());
app.use(express.json());

*L1dZffkNbfnPU7Gr
*MongoDB



const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://MongoDB:L1dZffkNbfnPU7Gr@cluster0.0l0ahg2.mongodb.net/?appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

app.get("/", (req, res) => {
  res.send("Server is running");
  console.log("Server is running");
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

run().catch(console.dir);
 */

const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");

const app = express();
const port = process.env.PORT || 3400;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection URI
const uri =
  "mongodb+srv://MongoDB:L1dZffkNbfnPU7Gr@cluster0.0l0ahg2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create MongoClient instance
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server
    await client.connect();
    // Send a ping to confirm connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!",
    );
  } catch (error) {
    console.error("MongoDB Connection Error:", error);
  }
}

// Start DB connection
run().catch(console.dir);

// Express Routes
app.get("/", (req, res) => {
  res.send("Server is runninggggggg");
});

// Start Server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
