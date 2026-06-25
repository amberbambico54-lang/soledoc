"use client";
import { useState } from "react";

const categories = [
  { label: "Walking Shoes", desc: "Everyday comfort & support", icon: "🚶‍♀️", img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=500&q=80", href: "/blog?type=footwear-guide&shoeType=walking-shoes" },
  { label: "Running Shoes", desc: "Performance with proper biomechanics", icon: "🏃‍♀️", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80", href: "/blog?type=footwear-guide&shoeType=running-shoes" },
  { label: "Work Shoes", desc: "All-day support for professionals", icon: "👔", img: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=500&q=80", href: "/blog?type=footwear-guide&shoeType=work-shoes" },
  { label: "Dress Shoes", desc: "Style without sacrificing foot health", icon: "👠", img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500&q=80", href: "/blog?type=footwear-guide&shoeType=dress-shoes" },
  { label: "Sandals", desc: "Warm-weather support done right", icon: "🩴", img: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=500&q=80", href: "/blog?type=footwear-guide&shoeType=sandals" },
  { label: "Boots", desc: "Cold-weather comfort & ankle support", icon: "🥾", img: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500&q=80", href: "/blog?type=footwear-guide&shoeType=boots" },
];

export default function FootwearCategories() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="categories" style={{ background: "#ffffff" }}>
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-14">
          <div className="section-label mb-3">Browse by Category</div>
          <h2 style={{ fontFamily: "Poppins", fontWeight: 800, fontSize: "clamp(1.9rem, 3vw, 2.6rem)", color: "#1a1a2e", lineHeight: 1.1 }}>
            What Kind of Shoe Are You{" "}
            <span className="font-brittany" style={{ color: "#E92064", fontSize: "1.15em", fontWeight: 400 }}>
              Looking For?
            </span>
          </h2>
          <p style={{ fontFamily: "Inter", fontSize: "0.975rem", color: "#6B7280", marginTop: "0.875rem", lineHeight: 1.7 }}>
            Start here — browse by shoe type to find podiatrist-approved recommendations for your lifestyle.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {categories.map((c, i) => (
            <a
              key={c.label}
              href={c.href}
              style={{ textDecoration: "none" }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <div style={{
                borderRadius: 24,
                overflow: "hidden",
                position: "relative",
                aspectRatio: "4/3",
                cursor: "pointer",
                backgroundImage: `url(${c.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                border: `1px solid ${hovered === i ? "rgba(233,32,100,0.3)" : "rgba(0,0,0,0.06)"}`,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                transform: hovered === i ? "translateY(-5px)" : "none",
                boxShadow: hovered === i ? "0 20px 56px rgba(0,0,0,0.15)" : "0 4px 16px rgba(0,0,0,0.06)",
              }}>
                {/* Overlay */}
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,8,20,0.82) 0%, rgba(10,8,20,0.15) 55%, transparent 100%)" }} />

                {/* Top accent */}
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg,#E92064,#ff6b9d)", opacity: hovered === i ? 1 : 0.5, transition: "opacity 0.3s" }} />

                {/* Icon */}
                <div style={{
                  position: "absolute", top: 16, right: 16,
                  width: 40, height: 40, borderRadius: "50%",
                  background: "rgba(255,255,255,0.12)", backdropFilter: "blur(8px)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1.2rem",
                }}>
                  {c.icon}
                </div>

                {/* Label */}
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "20px 20px 18px" }}>
                  <div style={{ fontFamily: "Poppins", fontWeight: 800, fontSize: "1.05rem", color: "#fff", lineHeight: 1.2 }}>{c.label}</div>
                  <div style={{ fontFamily: "Inter", fontSize: "0.78rem", color: "rgba(255,255,255,0.65)", marginTop: 4 }}>{c.desc}</div>
                  <div style={{ fontFamily: "Poppins", fontWeight: 600, fontSize: "0.75rem", color: "#ff6b9d", marginTop: 8 }}>
                    View guides →
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
