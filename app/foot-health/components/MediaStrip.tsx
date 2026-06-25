"use client";

const pubs = ["CNN", "New York Times", "Women's Health", "Healthline", "InStyle", "Yahoo", "Runner's World"];

export default function MediaStrip() {
  return (
    <section style={{ background: "#ffffff", borderTop: "1px solid rgba(0,0,0,0.04)", borderBottom: "1px solid rgba(0,0,0,0.04)" }}>
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 0 }}>
          <p style={{ fontFamily: "Inter", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.16em", color: "#C4C9D4", textTransform: "uppercase", whiteSpace: "nowrap" }}>
            As Seen In
          </p>
          <div style={{ flex: 1, height: 1, background: "rgba(0,0,0,0.05)" }} />
        </div>
        <div className="flex flex-wrap items-center gap-x-10 gap-y-4 mt-5">
          {pubs.map((p) => (
            <span
              key={p}
              style={{
                fontFamily: "Poppins", fontWeight: 700,
                fontSize: "clamp(0.82rem, 1.2vw, 0.98rem)",
                color: "#CBD5E0", letterSpacing: "0.03em",
                transition: "color 0.22s", cursor: "default", userSelect: "none",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#374151")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#CBD5E0")}
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
