import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

// Best Practice: Function to get a SINGLE product by its ID
async function getProduct(id) {
  // This fetch should point to an API that can return one product
  // For now, we'll simulate it by fetching all and finding one.
  const res = await fetch("https://next-cart-murex.vercel.app/api/products", { cache: "no-store" });
  if (!res.ok) return undefined;
  const products = await res.json();
  return products.find(p => p._id === id);
}

// Function to get all products (for the "Related" section)
async function getAllProducts() {
  const res = await fetch("https://next-cart-murex.vercel.app/api/products", { cache: "no-store" });
  if (!res.ok) return [];
  return res.json();
}

export default async function ProductDetails({ params }) {
  const { id } = params;
  const product = await getProduct(id);
  const allProducts = await getAllProducts();

  if (!product) {
    return notFound();
  }

  // Find 3 other random products to display as "related"
  const relatedProducts = allProducts
    .filter(p => p._id !== product._id) // Exclude the current product
    .sort(() => 0.5 - Math.random()) // Shuffle the array
    .slice(0, 3); // Take the first 3

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Image Column */}
          <div className="relative w-full h-80 md:h-96 rounded-lg bg-white dark:bg-gray-800 shadow-lg overflow-hidden">
            <Image
              width={500}
              height={500}
              src={product.image}
              alt={product.name}
              className="object-contain p-8"
            />
          </div>

          {/* Details Column */}
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">
              {product.name}
            </h1>
            <div className="flex items-center gap-2">
              <span className="badge badge-success text-white">In Stock</span>
              {/* Star Rating Simulation */}
              <div className="flex items-center">
                {'★★★★☆'.split('').map((star, i) => (
                  <span key={i} className="text-yellow-400 text-xl">{star}</span>
                ))}
                <span className="ml-2 text-sm text-gray-500">(12 Reviews)</span>
              </div>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              {product.description}
            </p>
            <div className="text-4xl font-bold text-primary mt-2">
              ${product.price.toFixed(2)}
            </div>

            {/* Quantity Selector */}
            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text">Quantity</span>
              </label>
              <div className="relative flex items-center max-w-[8rem]">
                <button type="button" className="btn btn-square btn-ghost">-</button>
                <input type="text" defaultValue="1" className="input input-bordered w-full text-center" />
                <button type="button" className="btn btn-square btn-ghost">+</button>
              </div>
            </div>

            {/* Action Button */}
            <button className="btn btn-primary btn-lg w-full md:w-auto mt-4">
              Add to Cart
            </button>
          </div>
        </div>

        {/* You Might Also Like Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center mb-10">You Might Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedProducts.map(related => (
              <RelatedProductCard key={related._id} product={related} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// A smaller card component for the related products section
function RelatedProductCard({ product }) {
  return (
    <Link href={`/products/${product._id}`}>
      <div className="card w-full bg-base-100 shadow-md border border-gray-200 dark:border-gray-700 transition-transform duration-300 hover:scale-105">
        <figure className="relative h-48 w-full">
          <Image
            width={200}
            height={200}
            src={product.image}
            alt={product.name}
            className="object-contain p-4"
          />
        </figure>
        <div className="card-body p-4 text-center">
          <h3 className="font-bold truncate">{product.name}</h3>
          <p className="text-primary">${product.price.toFixed(2)}</p>
        </div>
      </div>
    </Link>
  );
}