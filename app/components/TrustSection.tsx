import { Shield, CheckCircle, Heart } from "lucide-react";

const trustPoints = [
  {
    icon: Shield,
    title: "Evidence-Based",
    description: "Recommendations are guided by podiatric principles and years of clinical experience",
    color: "text-pink-600",
  },
  {
    icon: CheckCircle,
    title: "Personally Evaluated",
    description: "Products are reviewed for comfort, support, stability, and long-term foot health",
    color: "text-purple-600",
  },
  {
    icon: Heart,
    title: "Independent Recommendations",
    description: "Products are selected based on quality and suitability—not simply because they are available through affiliate programs",
    color: "text-blue-600",
  },
];

export default function TrustSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="section-label mb-4">Our Commitment</div>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>
          Why Trust Dr. Saylee&rsquo;s Recommendations
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Every product recommendation is backed by medical expertise and genuine care for your foot health
        </p>
      </div>

      {/* Trust Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {trustPoints.map((point, index) => {
          const Icon = point.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 text-center"
              style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.04)" }}
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center mx-auto mb-6">
                <Icon size={32} className={point.color} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "Poppins, sans-serif" }}>
                {point.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {point.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Trust Badge */}
      <div className="mt-12 text-center">
        <div className="inline-flex items-center gap-3 bg-pink-50 rounded-full px-6 py-3 border border-pink-100">
          <Shield size={20} className="text-pink-600" />
          <span className="text-sm font-semibold text-gray-900" style={{ fontFamily: "Poppins, sans-serif" }}>
            Board-Certified Podiatrist with 10+ Years of Experience
          </span>
        </div>
      </div>
    </section>
  );
}