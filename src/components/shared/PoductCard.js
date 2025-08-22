'use client';

import Image from 'next/image'; // Use the optimized Image component
import Link from 'next/link';
import { CgEye } from 'react-icons/cg';

export default function ProductCard({ product }) {
  return (
    <div className="card w-full bg-base-100 shadow-xl border border-gray-200 dark:border-gray-700 transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      <figure className="relative h-48 w-full bg-white">
        {/* IMPROVEMENT 1: Use next/image for performance */}
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-4" // 'fill' requires the parent to be relative
        />
      </figure>
      <div className="card-body p-6">
        <h2 className="card-title text-lg font-bold truncate" title={product.name}>
          {product.name}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-sm mt-1 h-10 overflow-hidden">
          {product.description}
        </p>
        <div className="card-actions justify-between items-center mt-4">
          {/* IMPROVEMENT 2: Format the price consistently */}
          <p className="text-xl font-semibold text-primary">
            ${product.price.toFixed(2)}
          </p>
          {/* IMPROVEMENT 3: Use the cleaner 'id' for the link */}
          <Link href={`/products/${product._id}`}>
            <button className="btn btn-sm btn-outline py-1
            border border-gray-400 text-gray-700 font-semibold rounded-md hover:bg-gray-200 transition-colors duration-300">
              <CgEye className='text-xl' />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}