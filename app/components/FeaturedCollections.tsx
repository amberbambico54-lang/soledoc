import { ArrowRight } from "lucide-react";

const collections = [
  {
    id: 1,
    title: "Editor's Picks",
    description: "Hand-selected by Dr. Saylee for exceptional comfort and support",
    count: 12,
    gradient: "from-pink-500 to-rose-600",
  },
  {
    id: 2,
    title: "Best Sellers",
    description: "Most recommended by our community of patients",
    count: 24,
    gradient: "from-purple-500 to-pink-600",
  },
  {
    id: 3,
    title: "New Arrivals",
    description: "Latest footwear innovations and releases",
    count: 8,
    gradient: "from-blue-500 to-purple-600",
  },
  {
    id: 4,
    title: "Summer Favorites",
    description: "Lightweight and breathable for warm weather",
    count: 15,
    gradient: "from-orange-500 to-pink-600",
  },
  {
    id: 5,
    title: "Travel Essentials",
    description: "Perfect for long flights and exploring",
    count: 10,
    gradient: "from-teal-500 to-blue-600",
  },
  {
    id: 6,
    title: "Most Comfortable",
    description: "Maximum cushioning for all-day wear",
    count: 18,
    gradient: "from-pink-600 to-rose-700",
  },
];

export default function FeaturedCollections() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="section-label mb-4">Curated For You</div>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>
          Featured Collections
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore our carefully curated collections designed to help you find the perfect footwear for every occasion
        </p>
      </div>

      {/* Collections Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {collections.map((collection) => (
          <a
            key={collection.id}
            href={`/shop?collection=${collection.id}`}
            className="group relative overflow-hidden rounded-2xl aspect-[4/3] flex items-end p-6 text-white transition-all duration-300 hover:shadow-2xl hover:scale-105"
            style={{ background: `linear-gradient(135deg, var(--tw-gradient-stops))` }}
          >
            {/* Gradient Background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${collection.gradient} opacity-90 group-hover:opacity-100 transition-opacity`} />

            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: "Poppins, sans-serif" }}>
                {collection.title}
              </h3>
              <p className="text-sm text-white/90 mb-3">
                {collection.description}
              </p>
              <div className="flex items-center gap-2 text-sm font-semibold">
                <span>{collection.count} Products</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
          </a>
        ))}
      </div>
    </section>
  );
}