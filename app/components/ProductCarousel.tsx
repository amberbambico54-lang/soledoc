"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const featuredProducts = [
  {
    id: 1,
    name: "HOKA Bondi 9",
    category: "Walking Shoes",
    rating: 9.4,
    image: "👟",
    recommendation: "Maximum cushioning for long days on your feet.",
    badge: "Editor's Pick",
  },
  {
    id: 2,
    name: "Brooks Ghost 16",
    category: "Running Shoes",
    rating: 9.2,
    image: "👟",
    recommendation: "Smooth transition and reliable comfort for daily runs.",
    badge: "Best Seller",
  },
  {
    id: 3,
    name: "New Balance 990v6",
    category: "Walking Shoes",
    rating: 9.5,
    image: "👟",
    recommendation: "Premium stability with timeless craftsmanship.",
    badge: "Top Rated",
  },
  {
    id: 4,
    name: "ASICS Gel-Kayano 31",
    category: "Running Shoes",
    rating: 9.1,
    image: "👟",
    recommendation: "Exceptional support for overpronation control.",
    badge: "Editor's Pick",
  },
  {
    id: 5,
    name: "ON Cloud 5",
    category: "Everyday Wear",
    rating: 9.3,
    image: "👟",
    recommendation: "Lightweight comfort with innovative cloud technology.",
    badge: "New Arrival",
  },
];

export default function ProductCarousel() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % featuredProducts.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const goTo = (index: number) => {
    setCurrent(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + featuredProducts.length) % featuredProducts.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const next = () => {
    setCurrent((prev) => (prev + 1) % featuredProducts.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const product = featuredProducts[current];

  return (
    <section className="relative bg-gradient-to-b from-white to-pink-50/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden" style={{ minHeight: "500px" }}>
          <div className="grid md:grid-cols-2 gap-8 items-center h-full">
            {/* Left - Product Image */}
            <div className="relative bg-gradient-to-br from-pink-50 to-white flex items-center justify-center p-12" style={{ minHeight: "400px" }}>
              <div className="text-9xl">{product.image}</div>
              
              {/* Badge */}
              <div className="absolute top-6 left-6 bg-white rounded-full px-4 py-2 shadow-lg">
                <span className="text-sm font-semibold text-pink-600">⭐ {product.badge}</span>
              </div>
            </div>

            {/* Right - Product Info */}
            <div className="p-12 flex flex-col justify-center">
              <div className="section-label mb-4">{product.category}</div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>
                {product.name}
              </h2>

              <div className="flex items-center gap-2 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} fill="#E92064" color="#E92064" />
                  ))}
                </div>
                <span className="text-2xl font-bold text-gray-900">{product.rating}/10</span>
              </div>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                &ldquo;{product.recommendation}&rdquo;
              </p>

              <a href={`/shop/${product.id}`} className="btn-primary inline-block text-center">
                View Details
              </a>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all"
            style={{ color: "#1a1a2e" }}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all"
            style={{ color: "#1a1a2e" }}
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {featuredProducts.map((_, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              className={`transition-all rounded-full ${
                index === current ? "w-8 h-3 bg-pink-600" : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
              }`}
              style={index === current ? { backgroundColor: "#E92064" } : {}}
            />
          ))}
        </div>
      </div>
    </section>
  );
}