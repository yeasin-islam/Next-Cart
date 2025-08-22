"use client";

import { useState, useMemo } from "react";
import ProductCard from "../shared/PoductCard";
// import ProductCard from "@/components/shared/ProductCard"; // Ensure this path and name is correct

const ITEMS_PER_PAGE = 8;

export default function ProductList({ products }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default"); // <-- NEW: State for sorting
  const [currentPage, setCurrentPage] = useState(1);

  const categories = useMemo(() => {
    const uniqueCategories = new Set(products.map(p => p.category));
    return ["All", ...Array.from(uniqueCategories)];
  }, [products]);

  // Step 1: Filter products based on search and category
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [products, searchQuery, selectedCategory]);

  // <-- NEW: Step 2: Sort the filtered products
  const sortedProducts = useMemo(() => {
    const sortableProducts = [...filteredProducts]; // Create a new array to avoid mutating the original
    if (sortBy === "price-asc") {
      sortableProducts.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-desc") {
      sortableProducts.sort((a, b) => b.price - a.price);
    }
    // if "default", no sorting is applied
    return sortableProducts;
  }, [filteredProducts, sortBy]);


  // Step 3: Paginate the sorted products
  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return sortedProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [sortedProducts, currentPage]);

  const totalPages = Math.ceil(sortedProducts.length / ITEMS_PER_PAGE);

  const handleFilterChange = () => {
    setCurrentPage(1); // Reset to first page on any filter/search/sort change
  };

  return (
    <div>
      {/* --- Filters, Search, and Sort Bar --- */}
      <div className="flex flex-col md:flex-row flex-wrap gap-4 mb-8 p-4 bg-base-100 rounded-lg shadow">
        <input
          type="text"
          placeholder="Search by product name..."
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            handleFilterChange();
          }}
          className="input input-bordered md:flex-grow"
        />
        <select
          value={selectedCategory}
          onChange={(e) => {
            setSelectedCategory(e.target.value);
            handleFilterChange();
          }}
          className="select select-bordered w-full md:w-auto"
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        
        {/* --- NEW: Sorting Dropdown --- */}
        <select
          value={sortBy}
          onChange={(e) => {
            setSortBy(e.target.value);
            handleFilterChange();
          }}
          className="select select-bordered w-full md:w-auto"
        >
          <option value="default">Default Sorting</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
        {/* --------------------------- */}
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
            <button className="join-item btn btn-active">
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