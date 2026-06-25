"use client";
import { Play } from "lucide-react";
import { useState } from "react";

const content = [
  {
    type: "Video",
    platform: "YouTube · TikTok",
    title: "Why Most People Buy the Wrong Shoes",
    stat: "2.1M views",
    img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80",
    isVideo: true,
  },
  {
    type: "Education",
    platform: "The Sole Doctor Blog",
    title: "The Complete Guide to Plantar Fasciitis",
    stat: "180K reads",
    img: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=600&q=80",
    isVideo: false,
  },
  {
    type: "Social",
    platform: "Instagram · TikTok",
    title: "Podiatrist Reacts: Are Crocs Actually Good for Your Feet?",
    stat: "890K views",
    img: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600&q=80",
    isVideo: true,
  },
];

export default function EducatingBeyond() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section style={{ background: "#fff" }}>
      <div className="max-w-7xl mx-auto px-6 py-28">
        <div className="text-center mb-16">
          <div style={{ fontFamily: "Poppins", fontWeight: 700, fontSize: "0.72rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#E92064", marginBottom: 16 }}>
            Impact &amp; Reach
          </div>
          <h2 style={{ fontFamily: "Poppins", fontWeight: 800, fontSize: "clamp(2rem, 3vw, 2.8rem)", color: "#1a1a2e", lineHeight: 1.1 }}>
            Educating{" "}
            <span className="font-brittany" style={{ color: "#E92064", fontSize: "1.25em", fontWeight: 400 }}>
              Beyond the Clinic
            </span>
          </h2>
          <p style={{ fontFamily: "Inter", color: "#6B7280", fontSize: "1rem", marginTop: "1rem", maxWidth: 520, margin: "1rem auto 0", lineHeight: 1.7 }}>
            Reaching millions through content that makes expert foot health advice approachable, actionable, and real.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {content.map((c, i) => (
            <div
              key={c.title}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
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
                boxShadow: hovered === i ? "0 20px 60px rgba(0,0,0,0.14)" : "0 4px 20px rgba(0,0,0,0.06)",
              }}
            >
              {/* Dark overlay */}
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,8,20,0.85) 0%, rgba(10,8,20,0.3) 55%, transparent 100%)" }} />

              {/* Top accent line */}
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg,#E92064,#ff6b9d)" }} />

              {/* Type badge */}
              <div style={{
                position: "absolute", top: 16, left: 16,
                background: "rgba(255,255,255,0.12)",
                backdropFilter: "blur(8px)",
                borderRadius: 100,
                padding: "4px 12px",
                fontFamily: "Poppins", fontWeight: 700, fontSize: "0.68rem",
                color: "#fff", letterSpacing: "0.08em",
                border: "1px solid rgba(255,255,255,0.15)",
              }}>
                {c.type}
              </div>

              {/* Play button */}
              {c.isVideo && (
                <div style={{
                  position: "absolute", top: "50%", left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: 48, height: 48, borderRadius: "50%",
                  background: hovered === i ? "linear-gradient(135deg,#E92064,#ff6b9d)" : "rgba(255,255,255,0.18)",
                  backdropFilter: "blur(8px)",
                  border: "2px solid rgba(255,255,255,0.3)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  transition: "all 0.3s ease",
                  boxShadow: hovered === i ? "0 8px 24px rgba(233,32,100,0.4)" : "none",
                }}>
                  <Play size={16} fill="#fff" color="#fff" style={{ marginLeft: 2 }} />
                </div>
              )}

              {/* Bottom content */}
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "20px 22px 20px" }}>
                <div style={{ fontFamily: "Poppins", fontWeight: 600, fontSize: "0.7rem", color: "rgba(255,255,255,0.55)", marginBottom: 6, letterSpacing: "0.06em" }}>
                  {c.platform}
                </div>
                <div style={{ fontFamily: "Poppins", fontWeight: 700, fontSize: "0.95rem", color: "#fff", lineHeight: 1.3, marginBottom: 6 }}>
                  {c.title}
                </div>
                <div style={{ fontFamily: "Inter", fontSize: "0.75rem", color: "#ff6b9d", fontWeight: 600 }}>
                  {c.stat}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Reach stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {[
            { n: "1M+", l: "Monthly Reach" },
            { n: "5M+", l: "Total Video Views" },
            { n: "50+", l: "Articles Published" },
            { n: "4", l: "Platforms Active" },
          ].map((s) => (
            <div key={s.l} style={{
              background: "#FFF7FA",
              borderRadius: 20,
              padding: "24px 20px",
              textAlign: "center",
              border: "1px solid rgba(233,32,100,0.08)",
            }}>
              <div className="font-brittany" style={{ fontSize: "2.4rem", color: "#E92064", lineHeight: 1 }}>{s.n}</div>
              <div style={{ fontFamily: "Inter", fontSize: "0.8rem", color: "#9CA3AF", marginTop: 6, fontWeight: 500 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
