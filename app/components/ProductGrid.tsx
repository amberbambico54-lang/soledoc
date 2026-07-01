"use client";
import { useState } from "react";
import { Star, Search, SlidersHorizontal } from "lucide-react";

interface ProductGridProps {
  category: string;
}

const products = [
  {
    id: 1,
    name: "HOKA Bondi 9",
    brand: "HOKA",
    category: "Walking Shoes",
    rating: 9.4,
    tags: ["Walking", "Heel Pain"],
    note: "Excellent cushioning for prolonged standing.",
    badge: "Editor's Pick",
    image: "👟",
  },
  {
    id: 2,
    name: "Brooks Ghost 16",
    brand: "Brooks",
    category: "Running Shoes",
    rating: 9.2,
    tags: ["Running", "Everyday Wear"],
    note: "Smooth transition for daily runs.",
    badge: "Best Seller",
    image: "👟",
  },
  {
    id: 3,
    name: "New Balance 990v6",
    brand: "New Balance",
    category: "Walking Shoes",
    rating: 9.5,
    tags: ["Walking", "Work"],
    note: "Premium stability with timeless craftsmanship.",
    badge: "Top Rated",
    image: "👟",
  },
  {
    id: 4,
    name: "ASICS Gel-Kayano 31",
    brand: "ASICS",
    category: "Running Shoes",
    rating: 9.1,
    tags: ["Running", "Flat Feet"],
    note: "Exceptional support for overpronation control.",
    badge: null,
    image: "👟",
  },
  {
    id: 5,
    name: "ON Cloud 5",
    brand: "ON",
    category: "Everyday Wear",
    rating: 9.3,
    tags: ["Everyday Wear", "Travel"],
    note: "Lightweight comfort with cloud technology.",
    badge: "New Arrival",
    image: "👟",
  },
  {
    id: 6,
    name: "Nike Air Max 270",
    brand: "Nike",
    category: "Walking Shoes",
    rating: 8.9,
    tags: ["Walking", "Standing All Day"],
    note: "Maximum cushioning for all-day comfort.",
    badge: null,
    image: "👟",
  },
  {
    id: 7,
    name: "Skechers Go Walk 7",
    brand: "Skechers",
    category: "Walking Shoes",
    rating: 8.7,
    tags: ["Walking", "Travel"],
    note: "Ultra-lightweight and flexible design.",
    badge: null,
    image: "👟",
  },
  {
    id: 8,
    name: "Brooks Addiction Walker",
    brand: "Brooks",
    category: "Walking Shoes",
    rating: 9.0,
    tags: ["Walking", "Standing All Day", "Bunions"],
    note: "Supportive walker for all-day comfort.",
    badge: null,
    image: "👟",
  },
  {
    id: 9,
    name: "HOKA Clifton 9",
    brand: "HOKA",
    category: "Running Shoes",
    rating: 9.3,
    tags: ["Running", "Everyday Wear"],
    note: "Lightweight cushioning for daily training.",
    badge: "Editor's Pick",
    image: "👟",
  },
];

export default function ProductGrid({ category }: ProductGridProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("Most Recommended");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredProducts = products.filter((product) => {
    const matchesCategory = category === "All Products" || product.category === category || 
      (category === "Digital Guides" && product.category === "Digital Guides");
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "Most Recommended") return b.rating - a.rating;
    if (sortBy === "Highest Rated") return b.rating - a.rating;
    if (sortBy === "Name A-Z") return a.name.localeCompare(b.name);
    return 0;
  });

  return (
    <div>
      {/* Toolbar */}
      <div className="mb-8 space-y-4">
        {/* Search and Filters Row */}
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search Products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-600/20 focus:border-pink-600 transition-all"
              style={{ fontFamily: "Inter, sans-serif" }}
            />
          </div>

          {/* Sort By */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none px-4 py-3 pr-10 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-600/20 focus:border-pink-600 transition-all bg-white"
              style={{ fontFamily: "Inter, sans-serif", minWidth: "180px" }}
            >
              <option>Most Recommended</option>
              <option>Highest Rated</option>
              <option>Name A-Z</option>
            </select>
            <SlidersHorizontal className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
          </div>
        </div>

        {/* Results Info and View Toggle */}
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-600" style={{ fontFamily: "Inter, sans-serif" }}>
            Showing: <span className="font-semibold text-gray-900">{sortedProducts.length}</span> Products
          </p>

          {/* View Toggle */}
          <div className="flex items-center gap-2 border border-gray-200 rounded-lg p-1">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded transition-all ${
                viewMode === "grid" ? "bg-pink-600 text-white" : "text-gray-600 hover:bg-gray-100"
              }`}
              style={viewMode === "grid" ? { backgroundColor: "#E92064" } : {}}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <rect x="0" y="0" width="6" height="6" />
                <rect x="10" y="0" width="6" height="6" />
                <rect x="0" y="10" width="6" height="6" />
                <rect x="10" y="10" width="6" height="6" />
              </svg>
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded transition-all ${
                viewMode === "list" ? "bg-pink-600 text-white" : "text-gray-600 hover:bg-gray-100"
              }`}
              style={viewMode === "list" ? { backgroundColor: "#E92064" } : {}}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <rect x="0" y="0" width="16" height="2" />
                <rect x="0" y="4" width="16" height="2" />
                <rect x="0" y="8" width="16" height="2" />
                <rect x="0" y="12" width="16" height="2" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Product Grid/List */}
      {viewMode === "grid" ? (
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {sortedProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 group"
              style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.04)" }}
            >
              {/* Product Image */}
              <div className="relative bg-gradient-to-br from-pink-50 to-white rounded-xl mb-4 flex items-center justify-center" style={{ height: "200px" }}>
                <div className="text-6xl">{product.image}</div>
                {product.badge && (
                  <div className="absolute top-3 left-3 bg-white rounded-full px-3 py-1 shadow-md">
                    <span className="text-xs font-semibold text-pink-600">⭐ {product.badge}</span>
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="space-y-3">
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1" style={{ fontFamily: "Poppins, sans-serif" }}>
                    {product.brand}
                  </p>
                  <h3 className="text-lg font-bold text-gray-900" style={{ fontFamily: "Poppins, sans-serif" }}>
                    {product.name}
                  </h3>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="#E92064" color="#E92064" />
                    ))}
                  </div>
                  <span className="text-sm font-bold text-gray-900">{product.rating}/10</span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Dr. Saylee's Note */}
                <div className="pt-2 border-t border-gray-100">
                  <p className="text-xs font-semibold text-pink-600 mb-1" style={{ fontFamily: "Poppins, sans-serif" }}>
                    Dr. Saylee&rsquo;s Note
                  </p>
                  <p className="text-sm text-gray-600 italic">
                    &ldquo;{product.note}&rdquo;
                  </p>
                </div>

                {/* View Details Button */}
                <a
                  href={`/shop/${product.id}`}
                  className="block w-full text-center py-3 px-4 bg-gray-900 text-white rounded-xl font-semibold text-sm hover:bg-gray-800 transition-all mt-4"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {sortedProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-xl transition-all duration-300"
              style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.04)" }}
            >
              <div className="flex gap-6">
                {/* Product Image */}
                <div className="relative bg-gradient-to-br from-pink-50 to-white rounded-xl flex items-center justify-center flex-shrink-0" style={{ width: "150px", height: "150px" }}>
                  <div className="text-5xl">{product.image}</div>
                  {product.badge && (
                    <div className="absolute top-2 left-2 bg-white rounded-full px-2 py-1 shadow-md">
                      <span className="text-xs font-semibold text-pink-600">⭐ {product.badge}</span>
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1" style={{ fontFamily: "Poppins, sans-serif" }}>
                        {product.brand}
                      </p>
                      <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: "Poppins, sans-serif" }}>
                        {product.name}
                      </h3>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} fill="#E92064" color="#E92064" />
                      ))}
                    </div>
                    <span className="text-sm font-bold text-gray-900">{product.rating}/10</span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {product.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Dr. Saylee's Note */}
                  <div className="mb-4">
                  <p className="text-xs font-semibold text-pink-600 mb-1" style={{ fontFamily: "Poppins, sans-serif" }}>
                    Dr. Saylee&rsquo;s Note
                  </p>
                    <p className="text-sm text-gray-600 italic">
                      &ldquo;{product.note}&rdquo;
                    </p>
                  </div>

                  {/* View Details Button */}
                  <a
                    href={`/shop/${product.id}`}
                    className="inline-block px-6 py-2.5 bg-gray-900 text-white rounded-xl font-semibold text-sm hover:bg-gray-800 transition-all"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    View Details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}