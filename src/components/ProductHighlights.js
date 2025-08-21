import Link from 'next/link';
import ProductCard from './shared/PoductCard'; // Assuming your ProductCard is in the same folder
import { featuredProducts } from '@/data/featured-products'; // Using alias for src folder

export default function ProductHighlights() {
  return (
    <section className="bg-base-200 dark:bg-gray-800 py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">
            Featured Products
          </h2>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
            Check out our hand-picked selection of top-quality items.
          </p>
          <div className="divider w-24 mx-auto mt-4"></div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>

        {/* "View All" Button */}
        <div className="text-center mt-12">
          <Link href="/products">
            <button className="btn btn-primary btn-lg">
              View All Products
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};