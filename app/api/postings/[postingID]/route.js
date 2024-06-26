import { NextApiRequest, NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.mongoURI);

export async function GET(request, params) {
  let { postingID } = params.params;
  const database = client.db("sprout");
  const collection = database.collection("postings");

  let posting = await collection.findOne({ postingID });
  console.log(posting);

  if (!posting) {
    return NextResponse.json({ message: "Posting not found" }, { status: 404 });
  }
  return NextResponse.json(posting, { status: 200 });
}
