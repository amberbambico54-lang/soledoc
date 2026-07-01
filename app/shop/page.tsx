"use client";
import { useState } from "react";
import ProductCarousel from "../components/ProductCarousel";
import ShopSidebar from "../components/ShopSidebar";
import ProductGrid from "../components/ProductGrid";
import FeaturedCollections from "../components/FeaturedCollections";
import DigitalResources from "../components/DigitalResources";
import TrustSection from "../components/TrustSection";
import Newsletter from "../components/Newsletter";

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Products");

  return (
    <div className="min-h-screen bg-white">
      {/* Section 1: Hero Product Carousel */}
      <ProductCarousel />

      {/* Section 2: Shop Products with Sidebar */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Left Sidebar - Filters */}
          <aside className="lg:col-span-1">
            <ShopSidebar 
              selectedCategory={selectedCategory} 
              onSelectCategory={setSelectedCategory} 
            />
          </aside>

          {/* Right Product Grid */}
          <div className="lg:col-span-3">
            <ProductGrid category={selectedCategory} />
          </div>
        </div>
      </section>

      {/* Section 3: Featured Collections */}
      <FeaturedCollections />

      {/* Section 4: Digital Resources */}
      <DigitalResources />

      {/* Section 5: Trust Section */}
      <TrustSection />

      {/* Section 6: Newsletter */}
      <Newsletter />
    </div>
  );
}