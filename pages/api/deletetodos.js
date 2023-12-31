import { MongoClient, ObjectId } from "mongodb";

async function handler(req, res) {
  if (req.method === "DELETE") {
    const {id} = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://new-user31:EXEY2T9sVmiwh1Nm@cluster0.pepc9yq.mongodb.net/meetups?retryWrites=true&w=majority"
    );

    const db = client.db();

    const todocollection = db.collection("todos");

    const filter = { _id: new ObjectId(id) }; // Convert id to ObjectId

    const result = await todocollection.deleteOne(filter);

    client.close();

    res.status(200).json({ message: "Document deleted successfully" , result});
  }
}
export default handler;
