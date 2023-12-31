import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://new-user31:EXEY2T9sVmiwh1Nm@cluster0.pepc9yq.mongodb.net/meetups?retryWrites=true&w=majority"
    );

    const db= client.db();

    const todocollection = db.collection('todos');

    const result = await todocollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({message: 'todos inserted!'})
  }
}

export default handler
