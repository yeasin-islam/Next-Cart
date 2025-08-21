import clientPromise from "../../../lib/mongodb";
import { NextResponse } from "next/server";

// GET all users
export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("nextcart"); // same db or use your own
    const users = await db.collection("users").find().toArray();
    return NextResponse.json(users);
  } catch (err) {
    return NextResponse.json({ error: "Failed to fetch users" }, { status: 500 });
  }
}

// POST new user
export async function POST(req) {
  try {
    const client = await clientPromise;
    const db = client.db("nextcart");

    const data = await req.json();

    // Optional: Add validation here
    if (!data.name || !data.email) {
      return NextResponse.json({ error: "Name and email are required" }, { status: 400 });
    }

    const result = await db.collection("users").insertOne(data);
    return NextResponse.json({ message: "User added", id: result.insertedId });
  } catch (err) {
    return NextResponse.json({ error: "Failed to add user" }, { status: 500 });
  }
}
