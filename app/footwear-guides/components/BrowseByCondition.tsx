const conditions = [
  { label: "Flat Feet", desc: "Best shoes for collapsed arches and overpronation", href: "/footwear-guides/flat-feet", icon: "🦶", count: "14 guides" },
  { label: "Plantar Fasciitis", desc: "Podiatrist picks to relieve heel pain fast", href: "/footwear-guides/plantar-fasciitis", icon: "⚡", count: "11 guides" },
  { label: "Bunions", desc: "Wide toe box shoes that don't sacrifice style", href: "/footwear-guides/bunions", icon: "🦴", count: "8 guides" },
  { label: "Neuroma", desc: "Forefoot relief with cushioned metatarsal support", href: "/footwear-guides/neuroma", icon: "🔬", count: "6 guides" },
  { label: "Heel Pain", desc: "Evidence-based footwear for all types of heel pain", href: "/footwear-guides/heel-pain", icon: "🩹", count: "9 guides" },
  { label: "Arthritis", desc: "Low-impact, joint-friendly shoes for daily comfort", href: "/footwear-guides/arthritis", icon: "🛡️", count: "7 guides" },
];

export default function BrowseByCondition() {
  return (
    <section id="plantar-fasciitis" style={{ background: "#ffffff" }}>
      <div className="max-w-7xl mx-auto px-6 py-24">

        <div className="text-center mb-14">
          <div className="section-label mb-3">Browse by Foot Condition</div>
          <h2 style={{ fontFamily: "Poppins", fontWeight: 800, fontSize: "clamp(1.9rem, 3vw, 2.5rem)", color: "#1a1a2e", lineHeight: 1.1 }}>
            Shoes for{" "}
            <span className="font-brittany" style={{ color: "#E92064", fontSize: "1.2em", fontWeight: 400 }}>
              Your Condition
            </span>
          </h2>
          <p style={{ fontFamily: "Inter", fontSize: "0.95rem", color: "#6B7280", marginTop: "0.75rem", lineHeight: 1.7 }}>
            Most people search by their condition first — find exactly what you need.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {conditions.map((c) => (
            <a key={c.label} href={c.href} style={{ textDecoration: "none" }}>
              <div className="card" style={{ padding: "32px 28px", background: "#fff", cursor: "pointer", display: "flex", gap: 18, alignItems: "flex-start" }}>
                <div style={{
                  width: 52, height: 52, borderRadius: 14, background: "#FFF7FA",
                  border: "1.5px solid rgba(233,32,100,0.12)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1.4rem", flexShrink: 0,
                }}>
                  {c.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                    <h3 style={{ fontFamily: "Poppins", fontWeight: 700, fontSize: "1rem", color: "#1a1a2e", lineHeight: 1.2 }}>
                      {c.label}
                    </h3>
                    <span style={{ fontFamily: "Inter", fontSize: "0.68rem", color: "#C4C9D4", whiteSpace: "nowrap", marginLeft: 8 }}>
                      {c.count}
                    </span>
                  </div>
                  <p style={{ fontFamily: "Inter", fontSize: "0.85rem", lineHeight: 1.65, color: "#6B7280" }}>
                    {c.desc}
                  </p>
                  <div style={{ marginTop: 12, color: "#E92064", fontFamily: "Poppins", fontWeight: 600, fontSize: "0.8rem" }}>
                    View guides →
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
