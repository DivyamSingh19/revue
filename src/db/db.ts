import { MongoClient } from "mongodb";

const mongo = new MongoClient(process.env.MONGODB_URI!)

await mongo.connect()

 