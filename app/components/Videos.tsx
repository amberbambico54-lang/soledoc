"use client";
import { Play } from "lucide-react";
import { useState } from "react";

const videos = [
  { title: "Why Your Heels Hurt in the Morning", views: "1.2M views", duration: "6:42", emoji: "🌅" },
  { title: "The Truth About Orthotics — What Podiatrists Won't Tell You", views: "890K views", duration: "8:15", emoji: "🦶" },
  { title: "Best Shoe Brands Recommended By a Podiatrist", views: "2.1M views", duration: "11:08", emoji: "👟" },
];

export default function Videos() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section style={{ background: "#fff" }}>
      <div className="max-w-7xl mx-auto px-6 py-28">
        <div className="text-center mb-16">
          <div className="section-label mb-4">Watch &amp; Learn</div>
          <h2 style={{ fontFamily: "Poppins", fontWeight: 800, fontSize: "clamp(2rem, 3vw, 2.8rem)", color: "#1a1a2e", lineHeight: 1.1 }}>
            Expert Content,{" "}
            <span className="font-brittany" style={{ color: "#E92064", fontSize: "1.2em", fontWeight: 400 }}>
              Millions Watched
            </span>
          </h2>
          <p style={{ fontFamily: "Inter", color: "#9CA3AF", marginTop: "0.85rem", fontSize: "0.95rem" }}>
            Evidence-based. Medically accurate. Actually watchable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map((v, i) => (
            <div
              key={v.title}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                borderRadius: 24,
                overflow: "hidden",
                position: "relative",
                aspectRatio: "16/10",
                cursor: "pointer",
                background: "linear-gradient(160deg, #FFF7FA 0%, #FCE4EC 100%)",
                border: `1px solid ${hovered === i ? "rgba(233,32,100,0.25)" : "rgba(233,32,100,0.08)"}`,
                transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
                transform: hovered === i ? "translateY(-6px)" : "none",
                boxShadow: hovered === i ? "0 20px 60px rgba(233,32,100,0.15)" : "0 4px 20px rgba(0,0,0,0.04)",
              }}
            >
              {/* Decorative emoji */}
              <div style={{
                position: "absolute", top: "50%", left: "50%",
                transform: "translate(-50%, -65%)",
                fontSize: "3.5rem",
                opacity: hovered === i ? 0.2 : 0.35,
                transition: "opacity 0.3s",
                userSelect: "none",
              }}>
                {v.emoji}
              </div>

              {/* Play button */}
              <div style={{
                position: "absolute", top: "50%", left: "50%",
                transform: "translate(-50%, -50%)",
                width: 52, height: 52,
                borderRadius: "50%",
                background: hovered === i
                  ? "linear-gradient(135deg, #E92064, #ff6b9d)"
                  : "rgba(255,255,255,0.85)",
                backdropFilter: "blur(8px)",
                border: `2px solid ${hovered === i ? "transparent" : "rgba(233,32,100,0.2)"}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "all 0.3s ease",
                boxShadow: hovered === i ? "0 8px 24px rgba(233,32,100,0.4)" : "0 4px 16px rgba(0,0,0,0.08)",
              }}>
                <Play size={18} fill={hovered === i ? "#fff" : "#E92064"} color={hovered === i ? "#fff" : "#E92064"} style={{ marginLeft: 3 }} />
              </div>

              {/* Duration */}
              <div style={{
                position: "absolute", top: 14, right: 14,
                background: "rgba(255,255,255,0.9)",
                backdropFilter: "blur(8px)",
                borderRadius: 8, padding: "4px 10px",
                fontFamily: "Inter", fontSize: "0.72rem", fontWeight: 600, color: "#374151",
                border: "1px solid rgba(0,0,0,0.06)",
              }}>
                {v.duration}
              </div>

              {/* Info footer */}
              <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0,
                padding: "18px 20px",
                background: "linear-gradient(to top, rgba(255,247,250,0.98) 0%, transparent 100%)",
              }}>
                <div style={{ fontFamily: "Poppins", fontWeight: 700, fontSize: "0.9rem", color: "#1a1a2e", lineHeight: 1.3, marginBottom: 4 }}>
                  {v.title}
                </div>
                <div style={{ fontFamily: "Inter", fontSize: "0.75rem", color: "#9CA3AF" }}>
                  {v.views}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#" style={{
            fontFamily: "Poppins", fontWeight: 600, fontSize: "0.875rem",
            color: "#E92064",
            borderBottom: "1.5px solid rgba(233,32,100,0.3)",
            paddingBottom: 3,
          }}>
            Watch all videos →
          </a>
        </div>
      </div>
    </section>
  );
}
