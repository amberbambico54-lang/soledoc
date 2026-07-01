"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface ShopSidebarProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const categories = [
  "All Products",
  "Walking Shoes",
  "Running Shoes",
  "Nurse Shoes",
  "Dress Shoes",
  "Sandals",
  "Boots",
  "Recovery Footwear",
  "Foot Care Products",
  "Accessories",
  "Digital Guides",
];

const brands = ["HOKA", "Brooks", "ASICS", "New Balance", "ON", "Nike", "Skechers"];

const bestFor = [
  "Standing All Day",
  "Walking",
  "Travel",
  "Running",
  "Work",
  "Everyday Wear",
];

const conditions = [
  "Plantar Fasciitis",
  "Flat Feet",
  "Heel Pain",
  "Bunions",
  "Neuroma",
];

export default function ShopSidebar({ selectedCategory, onSelectCategory }: ShopSidebarProps) {
  const [expandedSections, setExpandedSections] = useState({
    categories: true,
    brands: true,
    bestFor: true,
    conditions: true,
  });

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="sticky top-24 space-y-6">
      {/* Heading */}
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-1" style={{ fontFamily: "Poppins, sans-serif" }}>
          Find the Right Product
        </h3>
        <div className="h-1 w-12 bg-pink-600 rounded-full mt-2" style={{ backgroundColor: "#E92064" }} />
      </div>

      {/* Shop by Category */}
      <div className="border-b border-gray-200 pb-4">
        <button
          onClick={() => toggleSection("categories")}
          className="flex items-center justify-between w-full text-left mb-3"
        >
          <span className="text-xs font-bold text-gray-900 uppercase tracking-wider" style={{ fontFamily: "Poppins, sans-serif" }}>
            Shop by Category
          </span>
          <ChevronDown
            size={16}
            className={`transition-transform ${expandedSections.categories ? "rotate-180" : ""}`}
            style={{ color: "#6B7280" }}
          />
        </button>
        {expandedSections.categories && (
          <ul className="space-y-2">
            {categories.map((category) => (
              <li key={category}>
                <button
                  onClick={() => onSelectCategory(category)}
                  className={`text-sm transition-colors text-left ${
                    selectedCategory === category
                      ? "font-semibold text-pink-600"
                      : "text-gray-600 hover:text-pink-600"
                  }`}
                  style={selectedCategory === category ? { color: "#E92064" } : {}}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Shop by Condition */}
      <div className="border-b border-gray-200 pb-4">
        <button
          onClick={() => toggleSection("conditions")}
          className="flex items-center justify-between w-full text-left mb-3"
        >
          <span className="text-xs font-bold text-gray-900 uppercase tracking-wider" style={{ fontFamily: "Poppins, sans-serif" }}>
            Shop by Condition
          </span>
          <ChevronDown
            size={16}
            className={`transition-transform ${expandedSections.conditions ? "rotate-180" : ""}`}
            style={{ color: "#6B7280" }}
          />
        </button>
        {expandedSections.conditions && (
          <ul className="space-y-2">
            {conditions.map((condition) => (
              <li key={condition}>
                <button className="text-sm text-gray-600 hover:text-pink-600 transition-colors text-left">
                  {condition}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Shop by Brand */}
      <div className="border-b border-gray-200 pb-4">
        <button
          onClick={() => toggleSection("brands")}
          className="flex items-center justify-between w-full text-left mb-3"
        >
          <span className="text-xs font-bold text-gray-900 uppercase tracking-wider" style={{ fontFamily: "Poppins, sans-serif" }}>
            Shop by Brand
          </span>
          <ChevronDown
            size={16}
            className={`transition-transform ${expandedSections.brands ? "rotate-180" : ""}`}
            style={{ color: "#6B7280" }}
          />
        </button>
        {expandedSections.brands && (
          <ul className="space-y-2">
            {brands.map((brand) => (
              <li key={brand}>
                <button className="text-sm text-gray-600 hover:text-pink-600 transition-colors text-left">
                  {brand}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Best For */}
      <div className="pb-4">
        <button
          onClick={() => toggleSection("bestFor")}
          className="flex items-center justify-between w-full text-left mb-3"
        >
          <span className="text-xs font-bold text-gray-900 uppercase tracking-wider" style={{ fontFamily: "Poppins, sans-serif" }}>
            Best For
          </span>
          <ChevronDown
            size={16}
            className={`transition-transform ${expandedSections.bestFor ? "rotate-180" : ""}`}
            style={{ color: "#6B7280" }}
          />
        </button>
        {expandedSections.bestFor && (
          <ul className="space-y-2">
            {bestFor.map((item) => (
              <li key={item}>
                <button className="text-sm text-gray-600 hover:text-pink-600 transition-colors text-left">
                  {item}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Digital Resources */}
      <div className="pt-4 border-t border-gray-200">
        <span className="text-xs font-bold text-gray-900 uppercase tracking-wider block mb-3" style={{ fontFamily: "Poppins, sans-serif" }}>
          Digital Resources
        </span>
        <ul className="space-y-2">
          <li>
            <button className="text-sm text-gray-600 hover:text-pink-600 transition-colors text-left">
              eBooks
            </button>
          </li>
          <li>
            <button className="text-sm text-gray-600 hover:text-pink-600 transition-colors text-left">
              Buying Guides
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}