"use client";

const publications = [
  "CNN", "New York Times", "Women's Health", "Healthline", "Yahoo", "InStyle", "Runner's World", "Self",
];

export default function FeaturedIn() {
  return (
    <section style={{ background: "#FAFAFA", borderTop: "1px solid rgba(0,0,0,0.04)", borderBottom: "1px solid rgba(0,0,0,0.04)" }}>
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <div style={{ fontFamily: "Poppins", fontWeight: 700, fontSize: "0.72rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#E92064", marginBottom: 16 }}>
            Media
          </div>
          <h2 style={{ fontFamily: "Poppins", fontWeight: 800, fontSize: "clamp(1.8rem, 2.5vw, 2.4rem)", color: "#1a1a2e" }}>
            As{" "}
            <span className="font-brittany" style={{ color: "#E92064", fontSize: "1.2em", fontWeight: 400 }}>
              Seen In
            </span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
          {publications.map((pub) => (
            <span
              key={pub}
              style={{
                fontFamily: "Poppins",
                fontWeight: 700,
                fontSize: "clamp(0.85rem, 1.4vw, 1.05rem)",
                color: "#C9CDD6",
                letterSpacing: "0.04em",
                transition: "color 0.25s ease",
                cursor: "default",
                userSelect: "none",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#374151")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#C9CDD6")}
            >
              {pub}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
