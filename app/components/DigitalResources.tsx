import { BookOpen, FileText, Download } from "lucide-react";

const resources = [
  {
    id: 1,
    title: "The Complete Footwear Buying Guide",
    description: "Everything you need to know about choosing the right shoes for your foot type and lifestyle",
    pages: 45,
    icon: BookOpen,
    gradient: "from-pink-500 to-rose-600",
  },
  {
    id: 2,
    title: "Healthy Feet Handbook",
    description: "Daily foot care routines, exercises, and prevention strategies for common foot problems",
    pages: 62,
    icon: FileText,
    gradient: "from-purple-500 to-pink-600",
  },
  {
    id: 3,
    title: "Travel Foot Care Guide",
    description: "Keep your feet comfortable and healthy during long flights and adventures",
    pages: 28,
    icon: BookOpen,
    gradient: "from-blue-500 to-purple-600",
  },
];

export default function DigitalResources() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 bg-gray-50">
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="section-label mb-4">Learn & Educate</div>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>
          Digital Resources
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Expert guides and eBooks to help you make informed decisions about your foot health
        </p>
      </div>

      {/* Resources Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {resources.map((resource) => {
          const Icon = resource.icon;
          return (
            <a
              key={resource.id}
              href={`/resources/${resource.id}`}
              className="group bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.04)" }}
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${resource.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <Icon size={32} className="text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "Poppins, sans-serif" }}>
                {resource.title}
              </h3>

              <p className="text-gray-600 mb-4 leading-relaxed">
                {resource.description}
              </p>

              {/* Meta Info */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <span className="text-sm text-gray-500">
                  {resource.pages} Pages
                </span>
                <div className="flex items-center gap-2 text-pink-600 font-semibold text-sm group-hover:gap-3 transition-all">
                  <Download size={16} />
                  <span>Download</span>
                </div>
              </div>
            </a>
          );
        })}
      </div>

      {/* Additional CTA */}
      <div className="mt-12 text-center">
        <p className="text-gray-600 mb-4">
          Looking for more foot health information?
        </p>
        <a href="/foot-health" className="btn-primary inline-block">
          Explore All Resources
        </a>
      </div>
    </section>
  );
}