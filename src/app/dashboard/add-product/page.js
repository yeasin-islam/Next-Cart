"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import toast from "react-hot-toast";

const initialFormState = {
  name: "",
  description: "",
  price: "",
  category: "", // <-- NEW: Added category to state
  imgLink: "",
  imgFile: null,
};

// <-- NEW: Define your product categories
const categories = [
  "DSLR Camera",
  "Mirrorless Camera",
  "Action Camera",
  "Film Camera",
  "Accessories",
  "Other",
];

export default function AddProductPage() {
  const { status } = useSession();
  const router = useRouter();

  const [form, setForm] = useState(initialFormState);
  const [useFile, setUseFile] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(null);

  // ... (useEffect hooks remain the same)
  useEffect(() => {
    if (status === "unauthenticated") router.push("/login");
  }, [status, router]);

  useEffect(() => {
    if (!form.imgFile) {
      setPreviewUrl(null);
      return;
    }
    const objectUrl = URL.createObjectURL(form.imgFile);
    setPreviewUrl(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [form.imgFile]);


  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "imgFile") {
      setForm({ ...form, imgFile: files ? files[0] : null });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (parseFloat(form.price) <= 0) {
      toast.error("Price must be a positive number.");
      return;
    }

    setIsSubmitting(true);
    const toastId = toast.loading("Adding product...");

    try {
      let imageUrl = form.imgLink;
      if (useFile && form.imgFile) {
        const formData = new FormData();
        formData.append("image", form.imgFile);

        const uploadRes = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });

        const uploadJson = await uploadRes.json();
        if (!uploadRes.ok) throw new Error(uploadJson.error || "Image upload failed");

        imageUrl = uploadJson.url;
      }

      const productData = {
        name: form.name,
        description: form.description,
        price: parseFloat(form.price),
        category: form.category, // <-- NEW: Include category in submission
        image: imageUrl,
      };

      const productRes = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(productData),
      });

      if (!productRes.ok) throw new Error("Failed to add product.");

      toast.success("Product added successfully!", { id: toastId });
      setForm(initialFormState);
      router.refresh();
      router.push("/products");

    } catch (err) {
      toast.error(err.message || "An unexpected error occurred.", { id: toastId });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (status === "loading") return <p className="text-center p-8">Loading...</p>;
  if (status !== "authenticated") return null;

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-sm bg-white dark:bg-gray-800">
      <h1 className="text-2xl font-bold mb-6 text-center">Add a New Product</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input name="name" placeholder="Product Name" value={form.name} onChange={handleChange} required className="input input-bordered w-full" />
        <textarea name="description" placeholder="Product Description" value={form.description} onChange={handleChange} required className="textarea textarea-bordered w-full h-24" />
        <input name="price" placeholder="Price" type="number" step="0.01" min="0" value={form.price} onChange={handleChange} required className="input input-bordered w-full" />

        {/* --- NEW: Category Selector --- */}
        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          required
          className="select select-bordered w-full"
        >
          <option value="" disabled>Select a category</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        {/* ----------------------------- */}

        <div className="flex gap-2 items-center">
          <button type="button" onClick={() => setUseFile(false)} className={`btn btn-sm ${!useFile ? "btn-primary" : "btn-ghost"}`}>Use Link</button>
          <button type="button" onClick={() => setUseFile(true)} className={`btn btn-sm ${useFile ? "btn-primary" : "btn-ghost"}`}>Use File</button>
        </div>

        {!useFile ? (
          <input name="imgLink" placeholder="Image Link" type="url" value={form.imgLink} onChange={handleChange} required={!useFile} className="input input-bordered w-full" />
        ) : (
          <div>
            <input name="imgFile" type="file" accept="image/*" onChange={handleChange} required={useFile} className="file-input file-input-bordered w-full" />
            {previewUrl && (
              <div className="mt-4 border p-2 rounded-md relative w-32 h-32">
                <Image src={previewUrl} alt="Image preview" fill className="object-contain" />
              </div>
            )}
          </div>
        )}

        <button type="submit" disabled={isSubmitting} className="btn btn-primary w-full">
          {isSubmitting ? "Adding..." : "Add Product"}
        </button>
      </form>
    </div>
  );
}