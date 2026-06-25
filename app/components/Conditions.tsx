"use client";

const conditions = [
  {
    name: "Plantar Fasciitis",
    desc: "Stabbing heel pain from inflamed fascia tissue — highly treatable with the right approach.",
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80",
  },
  {
    name: "Flat Feet",
    desc: "Collapsed arches causing pain, fatigue, and alignment issues throughout your body.",
    img: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=600&q=80",
  },
  {
    name: "Bunions",
    desc: "Bony bumps at the big toe joint that worsen without proper footwear and early care.",
    img: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&q=80",
  },
  {
    name: "Neuromas",
    desc: "Nerve pain in the ball of the foot, often triggered by narrow or unsupportive shoes.",
    img: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&q=80",
  },
  {
    name: "Heel Pain",
    desc: "Multiple causes — from spurs to tendinitis — each with targeted, effective solutions.",
    img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&q=80",
  },
  {
    name: "Orthotics",
    desc: "Custom and OTC insoles designed to correct biomechanical imbalances and relieve pain.",
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
  },
];

export default function Conditions() {
  return (
    <section id="conditions" style={{ background: "#fff" }}>
      <div className="max-w-7xl mx-auto px-6 py-28">
        <div className="text-center mb-16">
          <div className="section-label mb-4">Common Conditions</div>
          <h2 style={{ fontFamily: "Poppins", fontWeight: 800, fontSize: "clamp(2rem, 3vw, 2.8rem)", color: "#1a1a2e", lineHeight: 1.1 }}>
            Conditions I Treat{" "}
            <span className="font-brittany" style={{ color: "#E92064", fontSize: "1.2em", fontWeight: 400 }}>
              &amp; Talk About
            </span>
          </h2>
          <p style={{ fontFamily: "Inter", color: "#6B7280", fontSize: "1rem", marginTop: "1rem", maxWidth: 480, margin: "1rem auto 0", lineHeight: 1.7 }}>
            Evidence-based guidance for the most common foot and ankle conditions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {conditions.map((c) => (
            <article
              key={c.name}
              style={{
                borderRadius: 24,
                overflow: "hidden",
                position: "relative",
                minHeight: 320,
                cursor: "pointer",
                backgroundImage: `url(${c.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                border: "1px solid rgba(0,0,0,0.06)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-5px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 56px rgba(0,0,0,0.18)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              {/* Dark gradient overlay */}
              <div style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(10,8,20,0.88) 0%, rgba(10,8,20,0.45) 55%, rgba(10,8,20,0.15) 100%)",
              }} />

              {/* Pink tint accent at top edge */}
              <div style={{
                position: "absolute",
                top: 0, left: 0, right: 0,
                height: 3,
                background: "linear-gradient(90deg, #E92064, #ff6b9d)",
              }} />

              {/* Text content */}
              <div style={{
                position: "absolute",
                bottom: 0, left: 0, right: 0,
                padding: "28px 28px 24px",
              }}>
                <h3 style={{
                  fontFamily: "Poppins",
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  color: "#fff",
                  marginBottom: 8,
                  lineHeight: 1.2,
                }}>
                  {c.name}
                </h3>
                <p style={{
                  fontFamily: "Inter",
                  fontSize: "0.85rem",
                  lineHeight: 1.65,
                  color: "rgba(255,255,255,0.75)",
                }}>
                  {c.desc}
                </p>
                <div style={{
                  marginTop: 16,
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  color: "#ff6b9d",
                  fontFamily: "Poppins",
                  fontWeight: 600,
                  fontSize: "0.82rem",
                }}>
                  Learn more →
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
