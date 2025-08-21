import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const formData = await request.formData();
    const image = formData.get("image");

    const imgbbFormData = new FormData();
    // This securely reads the key from your .env.local file on the server
    imgbbFormData.append("key", process.env.IMGBB_API_KEY); 
    imgbbFormData.append("image", image);

    const uploadResponse = await fetch("https://api.imgbb.com/1/upload", {
      method: "POST",
      body: imgbbFormData,
    });

    const uploadJson = await uploadResponse.json();
    if (!uploadResponse.ok) throw new Error("ImgBB upload failed.");

    return NextResponse.json({ url: uploadJson.data.url });
    
  } catch (error) {
    return NextResponse.json({ error: "Image upload failed." }, { status: 500 });
  }
}