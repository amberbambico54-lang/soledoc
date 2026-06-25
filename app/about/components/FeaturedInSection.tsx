"use client";

const publications = [
  "CNN",
  "New York Times",
  "Women's Health",
  "Healthline",
  "InStyle",
  "Yahoo",
  "Runner's World",
  "Self",
];

export default function FeaturedInSection() {
  return (
    <section style={{ background: "#ffffff", borderTop: "1px solid rgba(0,0,0,0.04)", borderBottom: "1px solid rgba(0,0,0,0.04)" }}>
      <div className="max-w-6xl mx-auto px-6 py-20">

        <div className="text-center mb-12">
          <div style={{ fontFamily: "Poppins", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#E92064", marginBottom: 16 }}>
            Media
          </div>
          <h2 style={{ fontFamily: "Poppins", fontWeight: 800, fontSize: "clamp(1.8rem, 2.5vw, 2.4rem)", color: "#1a1a2e" }}>
            Featured{" "}
            <span className="font-brittany" style={{ color: "#E92064", fontSize: "1.2em", fontWeight: 400 }}>
              In
            </span>
          </h2>
        </div>

        {/* Divider */}
        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 20 }}>
          <div style={{ flex: 1, height: 1, background: "rgba(0,0,0,0.05)" }} />
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#E92064", opacity: 0.4 }} />
          <div style={{ flex: 1, height: 1, background: "rgba(0,0,0,0.05)" }} />
        </div>

        <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-5">
          {publications.map((pub) => (
            <span
              key={pub}
              style={{
                fontFamily: "Poppins",
                fontWeight: 700,
                fontSize: "clamp(0.85rem, 1.3vw, 1rem)",
                color: "#CBD5E0",
                letterSpacing: "0.03em",
                transition: "color 0.22s ease",
                cursor: "default",
                userSelect: "none",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#374151")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#CBD5E0")}
            >
              {pub}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}
