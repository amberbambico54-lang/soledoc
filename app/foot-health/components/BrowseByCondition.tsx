"use client";
import { useState } from "react";

const conditions = [
  { label: "Plantar Fasciitis", desc: "Stabbing heel pain from inflamed fascia — highly treatable", href: "/foot-health/plantar-fasciitis", img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&q=80", articles: "18 articles" },
  { label: "Bunions", desc: "Bony bumps at the big toe joint — prevention & treatment", href: "/foot-health/bunions", img: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=500&q=80", articles: "12 articles" },
  { label: "Flat Feet", desc: "Collapsed arches causing pain, fatigue & misalignment", href: "/foot-health/flat-feet", img: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=500&q=80", articles: "14 articles" },
  { label: "Neuromas", desc: "Nerve pain in the ball of the foot from tight shoes", href: "/foot-health/neuromas", img: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&q=80", articles: "9 articles" },
  { label: "Heel Pain", desc: "Multiple causes — spurs to tendinitis — each with solutions", href: "/foot-health/heel-pain", img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=500&q=80", articles: "16 articles" },
  { label: "Athlete's Foot", desc: "Fungal infections — prevention, treatment & footwear tips", href: "/foot-health/athletes-foot", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80", articles: "8 articles" },
];

export default function BrowseByCondition() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section style={{ background: "#ffffff" }}>
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-14">
          <div className="section-label mb-3">Browse by Condition</div>
          <h2 style={{ fontFamily: "Poppins", fontWeight: 800, fontSize: "clamp(1.9rem, 3vw, 2.6rem)", color: "#1a1a2e", lineHeight: 1.1 }}>
            Common Foot{" "}
            <span className="font-brittany" style={{ color: "#E92064", fontSize: "1.2em", fontWeight: 400 }}>
              Conditions
            </span>
          </h2>
          <p style={{ fontFamily: "Inter", fontSize: "0.95rem", color: "#6B7280", marginTop: "0.75rem", lineHeight: 1.7 }}>
            Select your condition for evidence-based causes, treatments, and podiatrist-approved footwear recommendations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {conditions.map((c, i) => (
            <a
              key={c.label}
              href={c.href}
              style={{ textDecoration: "none" }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <article style={{
                borderRadius: 24,
                overflow: "hidden",
                position: "relative",
                minHeight: 280,
                cursor: "pointer",
                backgroundImage: `url(${c.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                border: `1px solid ${hovered === i ? "rgba(233,32,100,0.3)" : "rgba(0,0,0,0.06)"}`,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                transform: hovered === i ? "translateY(-5px)" : "none",
                boxShadow: hovered === i ? "0 20px 56px rgba(0,0,0,0.16)" : "0 4px 16px rgba(0,0,0,0.06)",
              }}>
                {/* Overlay */}
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,8,20,0.88) 0%, rgba(10,8,20,0.35) 55%, rgba(10,8,20,0.1) 100%)" }} />

                {/* Top pink accent */}
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg,#E92064,#ff6b9d)", opacity: hovered === i ? 1 : 0.6, transition: "opacity 0.3s" }} />

                {/* Article count */}
                <div style={{
                  position: "absolute", top: 14, right: 14,
                  background: "rgba(255,255,255,0.12)", backdropFilter: "blur(8px)",
                  borderRadius: 100, padding: "3px 10px",
                  fontFamily: "Poppins", fontWeight: 600, fontSize: "0.65rem",
                  color: "#fff", border: "1px solid rgba(255,255,255,0.15)",
                }}>
                  {c.articles}
                </div>

                {/* Content */}
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "24px 24px 20px" }}>
                  <h3 style={{ fontFamily: "Poppins", fontWeight: 700, fontSize: "1.1rem", color: "#fff", lineHeight: 1.2, marginBottom: 6 }}>
                    {c.label}
                  </h3>
                  <p style={{ fontFamily: "Inter", fontSize: "0.82rem", lineHeight: 1.6, color: "rgba(255,255,255,0.72)" }}>
                    {c.desc}
                  </p>
                  <div style={{ marginTop: 12, fontFamily: "Poppins", fontWeight: 600, fontSize: "0.78rem", color: "#ff6b9d" }}>
                    Learn more →
                  </div>
                </div>
              </article>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
