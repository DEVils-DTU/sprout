import { NextApiRequest, NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.mongoURI);

export const dynamic = "force-dynamic";

export async function GET(request, params) {
  let { postingID } = params.params;
  const database = client.db("sprout");
  const collection = database.collection("offers");

  let offers = await collection.find({ postingID }).toArray();
  console.log(offers);

  return NextResponse.json(offers, { status: 200 });
}
