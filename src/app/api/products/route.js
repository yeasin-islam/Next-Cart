import clientPromise from "../../../lib/mongodb";
import { NextResponse } from "next/server";

// GET products
export async function GET() {
  const client = await clientPromise;
  const db = client.db("nextcart"); // use your db name
  const products = await db.collection("products").find().toArray();
  return NextResponse.json(products);
}

// POST product
export async function POST(req) {
  const client = await clientPromise;
  const db = client.db("nextcart");

  const data = await req.json();
  const result = await db.collection("products").insertOne(data);

  return NextResponse.json({ message: "Product added", id: result.insertedId });
}
