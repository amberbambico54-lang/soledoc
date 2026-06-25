"use client";

const tips = [
  {
    icon: "💧",
    title: "Moisturize Daily",
    desc: "Keep skin soft and healthy by applying a foot cream daily, especially after showering.",
    accent: "#E92064",
  },
  {
    icon: "🧼",
    title: "Cleanse & Exfoliate",
    desc: "Wash your feet daily and gently exfoliate to help remove dead skin and maintain healthy skin.",
    accent: "#E92064",
  },
  {
    icon: "🔍",
    title: "Inspect Your Feet",
    desc: "Regularly check for blisters, irritation, skin changes, or signs of infection.",
    accent: "#E92064",
  },
  {
    icon: "👟",
    title: "Wear Proper Footwear",
    desc: "Supportive shoes can help reduce strain and improve overall foot comfort.",
    accent: "#E92064",
  },
  {
    icon: "✂️",
    title: "Trim Nails Correctly",
    desc: "Trim toenails straight across to help prevent painful ingrown toenails.",
    accent: "#E92064",
  },
  {
    icon: "🦶",
    title: "Practice Good Foot Hygiene",
    desc: "Keep feet clean and dry to reduce the risk of odor, fungal infections, and irritation.",
    accent: "#E92064",
  },
];

export default function DailyCareTips() {
  return (
    <section style={{ background: "#FFF7FA" }}>
      <div className="max-w-7xl mx-auto px-6 py-24">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="section-label mb-3">Prevention & Care</div>
          <h2 style={{ fontFamily: "Poppins", fontWeight: 800, fontSize: "clamp(1.9rem, 3vw, 2.6rem)", color: "#1a1a2e", lineHeight: 1.1 }}>
            Daily Foot{" "}
            <span className="font-brittany" style={{ color: "#E92064", fontSize: "1.2em", fontWeight: 400 }}>
              Health Habits
            </span>
          </h2>
          <p style={{ fontFamily: "Inter", fontSize: "0.975rem", color: "#6B7280", marginTop: "0.875rem", maxWidth: 480, margin: "0.875rem auto 0", lineHeight: 1.75 }}>
            Simple podiatrist-approved habits that support healthy, comfortable feet every day.
          </p>
        </div>

        {/* 3x2 card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {tips.map((t, i) => (
            <div
              key={t.title}
              style={{
                background: "#ffffff",
                borderRadius: 24,
                padding: "32px 28px",
                border: "1px solid rgba(0,0,0,0.05)",
                boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
                transition: "all 0.3s ease",
                display: "flex",
                gap: 18,
                alignItems: "flex-start",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(233,32,100,0.09)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(233,32,100,0.12)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 16px rgba(0,0,0,0.04)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,0,0,0.05)";
              }}
            >
              {/* Icon tile */}
              <div style={{
                width: 48, height: 48,
                borderRadius: 14,
                background: i % 2 === 0 ? "#FFF7FA" : "#ffffff",
                border: "1.5px solid rgba(233,32,100,0.14)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1.4rem",
                flexShrink: 0,
              }}>
                {t.icon}
              </div>

              {/* Text */}
              <div>
                <h3 style={{
                  fontFamily: "Poppins",
                  fontWeight: 700,
                  fontSize: "0.975rem",
                  color: "#1a1a2e",
                  marginBottom: 8,
                  lineHeight: 1.3,
                }}>
                  {t.title}
                </h3>
                <p style={{
                  fontFamily: "Inter",
                  fontSize: "0.875rem",
                  lineHeight: 1.72,
                  color: "#6B7280",
                  margin: 0,
                }}>
                  {t.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div style={{ textAlign: "center", marginTop: 40 }}>
          <p style={{ fontFamily: "Inter", fontSize: "0.82rem", color: "#9CA3AF", lineHeight: 1.6 }}>
            Recommended by Dr. Saylee Tulpule, DPM · Board-Certified Podiatrist
          </p>
        </div>

      </div>
    </section>
  );
}
