const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://komolsaha:RVjfSOuET4bkcc8s@cluster0.geffzt1.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run(){
    try{
        await client.connect();
        const userCollection = client.db("bloodBank").collection("users");

        app.get("/users", async(req,res)=> {
            const query = {};
            const users = await userCollection.find(query).toArray();
            res.send(users);
        });

        app.post("/users", async(req,res)=> {
            const user = req.body;
            const result = await userCollection.insertOne(user);
            res.send(result);
        });

        app.delete("/users/:id", async(req,res)=> {
            const id = req.params.id;
            const query = {_id: ObjectId(id)};
            const result = await userCollection.deleteOne(query);
            res.send(result);
        })

        app.put("/users/:id",async(req,res)=> {
            const id = req.params.id;
            const updatedUser = req.body;
            const query = {_id: ObjectId(id)};
            const options = {upsert: true};
            const updatedDoc = {
                $set: {
                    name: updatedUser.name,
                    email: updatedUser.email
                }
            }
            const result = await userCollection.updateOne(query,updatedDoc,options);
            res.send(result);
        })
    }
    finally{

    }
}
run().catch(console.dir);

app.get("/", (req,res) => {
    res.send("Server is running....");
});

app.listen(port,()=> {
    console.log("listening to port: ",port);
})