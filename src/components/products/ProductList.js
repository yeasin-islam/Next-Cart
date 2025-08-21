"use client";

import { useState, useMemo } from "react";
import ProductCard from "../shared/PoductCard";

const ITEMS_PER_PAGE = 8;

export default function ProductList({ products }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  // Get unique categories from the products list
  const categories = useMemo(() => {
    const uniqueCategories = new Set(products.map(p => p.category));
    return ["All", ...Array.from(uniqueCategories)];
  }, [products]);

  // Filter products based on search and category
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [products, searchQuery, selectedCategory]);

  // Paginate the filtered products
  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredProducts, currentPage]);

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

  return (
    <div>
      {/* --- Filters and Search Bar --- */}
      <div className="flex gap-4 mb-8 p-4 bg-base-100 rounded-lg shadow">
        <input
          type="text"
          placeholder="Search by product name..."
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setCurrentPage(1); // Reset to first page on new search
          }}
          className="input input-bordered w-full md:w-1/2"
        />
        <select
          value={selectedCategory}
          onChange={(e) => {
            setSelectedCategory(e.target.value);
            setCurrentPage(1); // Reset to first page on new filter
          }}
          className="select select-bordered w-full md:w-auto"
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {/* --- Products Grid --- */}
      {paginatedProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {paginatedProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 dark:text-gray-400 py-16">
          No products found matching your criteria.
        </p>
      )}

      {/* --- Pagination Controls --- */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-12">
          <div className="join">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="join-item btn"
            >
              «
            </button>
            <button className="join-item btn">
              Page {currentPage} of {totalPages}
            </button>
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="join-item btn"
            >
              »
            </button>
          </div>
        </div>
      )}
    </div>
  );
}