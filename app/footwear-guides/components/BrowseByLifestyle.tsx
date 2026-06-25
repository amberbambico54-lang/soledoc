"use client";
import { useState } from "react";

const lifestyles = [
  { label: "Nurses", desc: "12-hour shift support", href: "/footwear-guides/nurses", img: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=500&q=80", count: "12 guides" },
  { label: "Teachers", desc: "All-day classroom comfort", href: "/footwear-guides/teachers", img: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=500&q=80", count: "8 guides" },
  { label: "Warehouse Workers", desc: "Safety meets support", href: "/footwear-guides/warehouse", img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80", count: "6 guides" },
  { label: "Healthcare", desc: "Hospital-floor approved", href: "/footwear-guides/healthcare", img: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=500&q=80", count: "10 guides" },
  { label: "Travel", desc: "Miles without the pain", href: "/footwear-guides/travel", img: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500&q=80", count: "7 guides" },
  { label: "Running", desc: "Speed with proper support", href: "/footwear-guides/running", img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&q=80", count: "9 guides" },
  { label: "Walking", desc: "Everyday comfort & style", href: "/footwear-guides/walking", img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=500&q=80", count: "11 guides" },
  { label: "Standing All Day", desc: "Fatigue-fighting footwear", href: "/footwear-guides/standing", img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&q=80", count: "8 guides" },
];

export default function BrowseByLifestyle() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="nurses" style={{ background: "#FAFAFA" }}>
      <div className="max-w-7xl mx-auto px-6 py-24">

        <div className="text-center mb-14">
          <div className="section-label mb-3">Browse by Lifestyle</div>
          <h2 style={{ fontFamily: "Poppins", fontWeight: 800, fontSize: "clamp(1.9rem, 3vw, 2.5rem)", color: "#1a1a2e", lineHeight: 1.1 }}>
            Shoes for{" "}
            <span className="font-brittany" style={{ color: "#E92064", fontSize: "1.2em", fontWeight: 400 }}>
              Your Life
            </span>
          </h2>
          <p style={{ fontFamily: "Inter", fontSize: "0.95rem", color: "#6B7280", marginTop: "0.75rem", lineHeight: 1.7 }}>
            Tailored footwear guides for every profession and lifestyle — with SEO-proven recommendations from a DPM.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {lifestyles.map((l, i) => (
            <a
              key={l.label}
              href={l.href}
              style={{ textDecoration: "none" }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <div style={{
                borderRadius: 24,
                overflow: "hidden",
                position: "relative",
                aspectRatio: "3/4",
                cursor: "pointer",
                backgroundImage: `url(${l.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                border: `1px solid ${hovered === i ? "rgba(233,32,100,0.3)" : "rgba(0,0,0,0.06)"}`,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                transform: hovered === i ? "translateY(-5px)" : "none",
                boxShadow: hovered === i ? "0 20px 56px rgba(0,0,0,0.16)" : "0 4px 16px rgba(0,0,0,0.06)",
              }}>
                {/* Overlay */}
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,8,20,0.82) 0%, rgba(10,8,20,0.2) 55%, transparent 100%)" }} />

                {/* Top accent */}
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg,#E92064,#ff6b9d)", opacity: hovered === i ? 1 : 0, transition: "opacity 0.3s" }} />

                {/* Count badge */}
                <div style={{
                  position: "absolute", top: 14, right: 14,
                  background: "rgba(255,255,255,0.12)", backdropFilter: "blur(8px)",
                  borderRadius: 100, padding: "3px 10px",
                  fontFamily: "Poppins", fontWeight: 600, fontSize: "0.65rem",
                  color: "#fff", border: "1px solid rgba(255,255,255,0.15)",
                }}>
                  {l.count}
                </div>

                {/* Label */}
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "18px 18px 16px" }}>
                  <div style={{ fontFamily: "Poppins", fontWeight: 800, fontSize: "1rem", color: "#fff", lineHeight: 1.2 }}>
                    {l.label}
                  </div>
                  <div style={{ fontFamily: "Inter", fontSize: "0.75rem", color: "rgba(255,255,255,0.65)", marginTop: 4 }}>
                    {l.desc}
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
