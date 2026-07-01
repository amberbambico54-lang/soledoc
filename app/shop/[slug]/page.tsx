"use client";
import { useState } from "react";
import { Star, CheckCircle, XCircle, ExternalLink, ChevronRight } from "lucide-react";

interface Product {
  id: number;
  name: string;
  brand: string;
  category: string;
  rating: number;
  price: string;
  images: string[];
  recommendation: string;
  note: string;
  pros: string[];
  considerations: string[];
  specifications: Record<string, string>;
  bestFor: string[];
  relatedArticles: { title: string; href: string }[];
  relatedProducts: number[];
}

const products: Record<string, Product> = {
  "1": {
    id: 1,
    name: "HOKA Bondi 9",
    brand: "HOKA",
    category: "Walking Shoes",
    rating: 9.4,
    price: "$165",
    images: ["👟", "👟", "👟", "👟"],
    recommendation: "Maximum cushioning for long days on your feet.",
    note: "The HOKA Bondi 9 is my top recommendation for patients who spend extended periods on their feet. The exceptional cushioning reduces impact on joints while the wide base provides excellent stability.",
    pros: [
      "Exceptional cushioning and shock absorption",
      "Wide base for superior stability",
      "Lightweight despite maximum cushioning",
      "Accommodates orthotics easily",
      "Durable outsole for long-lasting wear",
    ],
    considerations: [
      "Higher price point than basic walking shoes",
      "Bulkier profile may not suit all styles",
      "Runs slightly large - consider sizing down",
    ],
    specifications: {
      weight: "10.3 oz (Men's size 9)",
      heelToToeDrop: "4mm",
      stackHeight: "37mm (heel) / 33mm (forefoot)",
      material: "Engineered mesh upper",
      sole: "Rubber outsole with strategic rubber placement",
      availableWidths: "Regular, Wide, Extra Wide",
    },
    bestFor: ["Standing All Day", "Walking", "Heel Pain", "Plantar Fasciitis", "Flat Feet"],
    relatedArticles: [
      { title: "Best Walking Shoes for Standing All Day", href: "/blog/best-walking-shoes-standing" },
      { title: "How to Choose Shoes for Plantar Fasciitis", href: "/blog/shoes-plantar-fasciitis" },
      { title: "The Complete Guide to Orthotic-Friendly Shoes", href: "/blog/orthotic-friendly-shoes" },
    ],
    relatedProducts: [2, 3, 6, 8],
  },
};

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const product = products[params.slug] || products["1"];

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 py-4">
        <nav className="flex items-center gap-2 text-sm text-gray-600">
          <a href="/shop" className="hover:text-pink-600 transition-colors">Shop</a>
          <ChevronRight size={16} />
          <a href={`/shop?category=${product.category}`} className="hover:text-pink-600 transition-colors">{product.category}</a>
          <ChevronRight size={16} />
          <span className="text-gray-900 font-medium">{product.name}</span>
        </nav>
      </div>

      {/* Product Gallery & Summary */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Gallery */}
          <div>
            {/* Main Image */}
            <div className="bg-gradient-to-br from-pink-50 to-white rounded-3xl flex items-center justify-center mb-4" style={{ height: "500px" }}>
              <div className="text-9xl">{product.images[selectedImage]}</div>
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`rounded-xl border-2 transition-all ${
                    selectedImage === index ? "border-pink-600" : "border-gray-200 hover:border-gray-300"
                  }`}
                  style={selectedImage === index ? { borderColor: "#E92064" } : {}}
                >
                  <div className="bg-gradient-to-br from-pink-50 to-white rounded-lg flex items-center justify-center aspect-square">
                    <div className="text-4xl">{img}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right - Product Summary */}
          <div>
            <div className="section-label mb-3">{product.category}</div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2" style={{ fontFamily: "Poppins, sans-serif" }}>
              {product.name}
            </h1>
            <p className="text-lg text-gray-600 mb-4">{product.brand}</p>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="#E92064" color="#E92064" />
                ))}
              </div>
              <span className="text-2xl font-bold text-gray-900">{product.rating}/10</span>
            </div>

            {/* Recommendation */}
            <div className="bg-pink-50 rounded-2xl p-6 mb-6 border border-pink-100">
              <p className="text-lg text-gray-800 leading-relaxed italic">
                &ldquo;{product.recommendation}&rdquo;
              </p>
            </div>

            {/* Best For Tags */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3" style={{ fontFamily: "Poppins, sans-serif" }}>
                Best For
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.bestFor.map((tag: string) => (
                  <span key={tag} className="text-sm px-3 py-1 bg-gray-100 text-gray-700 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <a
              href="https://amazon.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 w-full justify-center"
            >
              View on Amazon
              <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Dr. Saylee's Review */}
      <section className="max-w-7xl mx-auto px-6 py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="section-label mb-4">Expert Review</div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: "Poppins, sans-serif" }}>
            Dr. Saylee&rsquo;s Review
          </h2>
          <div className="bg-white rounded-2xl p-8 border border-gray-100">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              {product.note}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I&rsquo;ve recommended this shoe to hundreds of patients with excellent results. The combination of cushioning and stability makes it versatile enough for daily wear while providing the support needed for those with foot conditions.
            </p>
          </div>
        </div>
      </section>

      {/* Pros & Considerations */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Pros */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2" style={{ fontFamily: "Poppins, sans-serif" }}>
              <CheckCircle size={24} className="text-green-600" />
              Pros
            </h3>
            <ul className="space-y-3">
              {product.pros.map((pro: string, index: number) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{pro}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Considerations */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2" style={{ fontFamily: "Poppins, sans-serif" }}>
              <XCircle size={24} className="text-orange-600" />
              Considerations
            </h3>
            <ul className="space-y-3">
              {product.considerations.map((consideration: string, index: number) => (
                <li key={index} className="flex items-start gap-3">
                  <XCircle size={20} className="text-orange-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{consideration}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="max-w-7xl mx-auto px-6 py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8" style={{ fontFamily: "Poppins, sans-serif" }}>
            Specifications
          </h2>
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            {Object.entries(product.specifications).map(([key, value], index) => (
              <div
                key={key}
                className={`flex justify-between py-4 px-6 ${index !== Object.keys(product.specifications).length - 1 ? "border-b border-gray-100" : ""}`}
              >
                <span className="text-sm font-semibold text-gray-900 uppercase tracking-wider" style={{ fontFamily: "Poppins, sans-serif" }}>
                  {key.replace(/([A-Z])/g, " $1").trim()}
                </span>
                <span className="text-sm text-gray-700 text-right max-w-md">{value as string}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8" style={{ fontFamily: "Poppins, sans-serif" }}>
          Related Foot Health Articles
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
            {product.relatedArticles.map((article, index) => (
            <a
              key={index}
              href={article.href}
              className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 group"
              style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.04)" }}
            >
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors" style={{ fontFamily: "Poppins, sans-serif" }}>
                {article.title}
              </h3>
              <div className="flex items-center gap-2 text-pink-600 text-sm font-semibold">
                <span>Read Article</span>
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Related Products */}
      <section className="max-w-7xl mx-auto px-6 py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-gray-900 mb-8" style={{ fontFamily: "Poppins, sans-serif" }}>
          Related Products
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {product.relatedProducts.map((relatedId: number) => {
            const related = products[relatedId.toString()];
            if (!related) return null;
            return (
              <a
                key={related.id}
                href={`/shop/${related.id}`}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.04)" }}
              >
                <div className="bg-gradient-to-br from-pink-50 to-white rounded-xl mb-4 flex items-center justify-center" style={{ height: "150px" }}>
                  <div className="text-5xl">{related.images[0]}</div>
                </div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1" style={{ fontFamily: "Poppins, sans-serif" }}>
                  {related.brand}
                </p>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors" style={{ fontFamily: "Poppins, sans-serif" }}>
                  {related.name}
                </h3>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} fill="#E92064" color="#E92064" />
                    ))}
                  </div>
                  <span className="text-sm font-bold text-gray-900">{related.rating}/10</span>
                </div>
              </a>
            );
          })}
        </div>
      </section>
    </div>
  );
}