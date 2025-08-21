import ProductCard from "@/components/shared/PoductCard";

async function getProducts() {
  const res = await fetch("https://next-cart-murex.vercel.app/api/products", {
    cache: "no-store", // so data is always fresh
  });
  return res.json();
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-10 text-gray-800 dark:text-white">
          Our Products
        </h1>

        {/* Responsive Grid for Products */}
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 dark:text-gray-400">
            No products available.
          </p>
        )}
      </div>
    </div>
  );
}
