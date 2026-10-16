import express from 'express';
import cors from 'cors'
import { MongoClient, ObjectId } from 'mongodb';
import 'dotenv/config'

const app = express()
const port = process.env.PORT || 5000;



app.use(cors())
app.use(express.json())

const client = new MongoClient(`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ac-ez5nunr-shard-00-00.hpkuazb.mongodb.net:27017,ac-ez5nunr-shard-00-01.hpkuazb.mongodb.net:27017,ac-ez5nunr-shard-00-02.hpkuazb.mongodb.net:27017/?ssl=true&replicaSet=atlas-8l7sww-shard-0&authSource=admin`);

export async function connectToMongoDB(){

  try{
await client.connect()
console.log("Successfully connected to mongodb")
return client;  
}
  catch(err){
 console.dir(err);
  }

}
const connectedClient=  await connectToMongoDB();
const db = connectedClient.db('simpleCrudDB')
const users = db.collection('users')

app.get('/',(req, res) =>{
  res.send('Simple Clud Server is running')
})

app.get('/users', async (req, res) => {
   const cursor = users.find({})
   const allUsers = await cursor.toArray()
   res.send(allUsers)
})

app.get('/users/:id', async (req, res) =>{
  console.log(req.params)
  const id = req.params.id;

  const query = { _id: new ObjectId(id) }
const result = await users.findOne(query)
res.send(result)

})

app.post('/users', async (req, res) => {
    const newUser = req.body;
    console.log('Adding new user:', newUser);

    const result = await users.insertOne(newUser);
    res.send(result);
})

app.patch('/users/:id', async (req, res) => {

  const id = req.params.id;
  const updatedUser = req.body;
  console.log('Updating user with ID:', id, 'with data:', updatedUser);
 const filter = { _id: new ObjectId(id) }

 const options = { upsert: true };
 const updateDoc={
  $set:{
    name: updatedUser.name,
    email: updatedUser.email,

  }
 }
 const result = await users.updateOne(filter, updateDoc, options)
 res.send(result)

})
app.delete('/users/:id',async (req, res) => {

  const id = req.params.id;
  const query = { _id: new ObjectId(id) }
  const result = await users.deleteOne(query)
  res.send(result)
})


app.listen(port, () =>{
  console.log(`Simple CLUD Server is running on port: ${port})`)
})