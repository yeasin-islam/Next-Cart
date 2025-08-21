'use client';

import Image from 'next/image';
import Link from 'next/link';
import { CgEye } from 'react-icons/cg';

export default function ProductCard({ product }) {
  return (
    <div className="card w-full bg-base-100 shadow-xl border border-gray-200 dark:border-gray-700 transition-transform duration-300 hover:scale-105">
      <figure className="relative h-48 w-full">
        <Image
          src={product.image}
          alt={product.name}
          height={500}
          width={400}
          className="object-contain p-4" // Use 'contain' to show the full product
        />
      </figure>
      <div className="card-body p-6">
        <h2 className="card-title text-lg font-bold truncate">{product.name}</h2>
        <p className="text-gray-600 dark:text-gray-300 text-sm mt-1 h-10 overflow-hidden">
          {product.description}
        </p>
        <div className="card-actions justify-between items-center mt-4">
          <p className="text-xl font-semibold text-primary">${product.price}</p>
          <Link href={`/products/${product._id}`}>
            <button className="btn btn-secondary py-1">
              <CgEye className='text-xl' />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}