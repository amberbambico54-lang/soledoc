"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  { type: "patient", quote: "Dr. Saylee's advice on plantar fasciitis shoes literally changed my life. I went from barely walking to running 5Ks again.", name: "Sarah M.", role: "Nurse, Chicago" },
  { type: "brand", quote: "Partnering with Dr. Saylee delivered the most authentic, high-converting campaign we've ever run. Her audience trusts her deeply.", name: "Marketing Director", role: "Major Footwear Brand" },
  { type: "patient", quote: "I'd tried everything for my bunion pain. One article from The Sole Doctor and I finally had answers that actually worked.", name: "Jennifer K.", role: "Elementary School Teacher" },
  { type: "brand", quote: "The engagement rates and quality of her content are unmatched in the medical influencer space.", name: "Brand Partnership Lead", role: "Wellness Company" },
  { type: "patient", quote: "As a runner with flat feet, I was losing hope. Dr. Saylee's shoe guides are the only reason I'm still running.", name: "Marcus T.", role: "Marathon Runner" },
];

export default function Testimonials() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % testimonials.length), 5500);
    return () => clearInterval(t);
  }, []);

  const prev = () => setIdx((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIdx((i) => (i + 1) % testimonials.length);
  const t = testimonials[idx];

  return (
    <section style={{ background: "#FAFAFA" }}>
      <div className="max-w-4xl mx-auto px-6 py-28 text-center">
        <div className="section-label mb-4">Testimonials</div>
        <h2 style={{ fontFamily: "Poppins", fontWeight: 800, fontSize: "clamp(2rem, 3vw, 2.8rem)", color: "#1a1a2e", lineHeight: 1.1, marginBottom: 48 }}>
          What People Are{" "}
          <span className="font-brittany" style={{ color: "#E92064", fontSize: "1.2em", fontWeight: 400 }}>
            Saying
          </span>
        </h2>

        <div style={{
          background: "#fff",
          borderRadius: 28,
          padding: "52px 44px",
          boxShadow: "0 4px 40px rgba(0,0,0,0.06)",
          border: "1px solid rgba(233,32,100,0.07)",
          minHeight: 200,
          position: "relative",
        }}>
          {/* Quote icon */}
          <div style={{
            fontFamily: "Georgia, serif",
            fontSize: "5rem",
            color: "rgba(233,32,100,0.1)",
            lineHeight: 0.8,
            position: "absolute",
            top: 28,
            left: 36,
            userSelect: "none",
          }}>
            &ldquo;
          </div>

          <blockquote style={{
            fontFamily: "Inter",
            fontSize: "clamp(1rem, 2vw, 1.15rem)",
            lineHeight: 1.8,
            color: "#374151",
            maxWidth: 620,
            margin: "0 auto",
            fontStyle: "italic",
            position: "relative",
          }}>
            {t.quote}
          </blockquote>

          <div style={{ marginTop: 28 }}>
            <div style={{ fontFamily: "Poppins", fontWeight: 700, fontSize: "0.95rem", color: "#1a1a2e" }}>
              {t.name}
            </div>
            <div style={{ fontFamily: "Inter", fontSize: "0.8rem", color: "#E92064", marginTop: 3 }}>
              {t.role}
            </div>
          </div>

          {/* Type badge */}
          <div style={{
            position: "absolute", top: 20, right: 20,
            background: t.type === "patient" ? "#FFF7FA" : "#FAFAFA",
            borderRadius: 100,
            padding: "4px 12px",
            fontFamily: "Poppins",
            fontWeight: 600,
            fontSize: "0.68rem",
            color: t.type === "patient" ? "#E92064" : "#6B7280",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            border: `1px solid ${t.type === "patient" ? "rgba(233,32,100,0.15)" : "rgba(0,0,0,0.06)"}`,
          }}>
            {t.type === "patient" ? "Patient" : "Brand"}
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button onClick={prev} style={{ width: 40, height: 40, borderRadius: "50%", border: "1.5px solid rgba(0,0,0,0.1)", background: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.2s" }}>
            <ChevronLeft size={17} color="#374151" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setIdx(i)} style={{
                width: i === idx ? 22 : 7, height: 7,
                borderRadius: 100,
                background: i === idx ? "#E92064" : "#E5E7EB",
                border: "none", cursor: "pointer",
                transition: "all 0.3s ease",
              }} />
            ))}
          </div>
          <button onClick={next} style={{ width: 40, height: 40, borderRadius: "50%", border: "1.5px solid rgba(0,0,0,0.1)", background: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.2s" }}>
            <ChevronRight size={17} color="#374151" />
          </button>
        </div>
      </div>
    </section>
  );
}
