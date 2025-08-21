import ProductList from "@/components/products/ProductList"; // Import the new component

async function getProducts() {
  const res = await fetch("https://next-cart-murex.vercel.app/api/products", {
    cache: "no-store",
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch products');
  }
  return res.json();
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-10 text-gray-800 dark:text-white">
          Our Products
        </h1>
        
        {/* Render the interactive list component with the fetched data */}
        <ProductList products={products} />
      </div>
    </div>
  );
}