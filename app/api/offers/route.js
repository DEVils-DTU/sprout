import { NextApiRequest, NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.mongoURI);

export async function GET(request) {
  const database = client.db("sprout");
  const collection = database.collection("offers");

  let postings = await collection.find().toArray();

  return NextResponse.json(postings, { status: 200 });
}
