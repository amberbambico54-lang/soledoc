"use client";

const stats = [
  { n: "1M+", l: "Monthly Reach" },
  { n: "5M+", l: "Video Views" },
  { n: "Thousands", l: "Lives Improved" },
  { n: "National", l: "Media Features" },
];

const logos = ["CNN", "Women's Health", "Healthline", "Yahoo", "Runner's World"];

export default function SocialProof() {
  return (
    <section style={{ background: "#fff", borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-14">
          {stats.map((s) => (
            <div key={s.l} className="text-center">
              <div className="font-brittany" style={{ fontSize: "2.8rem", color: "#E92064", lineHeight: 1 }}>
                {s.n}
              </div>
              <div style={{ fontFamily: "Inter", fontSize: "0.82rem", color: "#9CA3AF", marginTop: 6, fontWeight: 500, letterSpacing: "0.04em" }}>
                {s.l}
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 14 }}>
          <div style={{ flex: 1, height: 1, background: "rgba(0,0,0,0.06)" }} />
          <p style={{ fontFamily: "Inter", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.16em", color: "#C4C9D4", textTransform: "uppercase", whiteSpace: "nowrap" }}>
            As Seen In
          </p>
          <div style={{ flex: 1, height: 1, background: "rgba(0,0,0,0.06)" }} />
        </div>

        {/* Logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14">
          {logos.map((logo) => (
            <span
              key={logo}
              style={{
                fontFamily: "Poppins",
                fontWeight: 700,
                fontSize: "clamp(0.85rem, 1.4vw, 1.05rem)",
                color: "#C9CDD6",
                letterSpacing: "0.04em",
                transition: "color 0.2s",
                cursor: "default",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#374151")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#C9CDD6")}
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
