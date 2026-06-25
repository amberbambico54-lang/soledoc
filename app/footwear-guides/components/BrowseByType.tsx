const types = [
  { label: "Walking Shoes", icon: "🚶‍♀️", href: "/footwear-guides/walking-shoes" },
  { label: "Running Shoes", icon: "🏃‍♀️", href: "/footwear-guides/running-shoes" },
  { label: "Work Shoes", icon: "👔", href: "/footwear-guides/work-shoes" },
  { label: "Dress Shoes", icon: "👠", href: "/footwear-guides/dress-shoes" },
  { label: "Sandals", icon: "🩴", href: "/footwear-guides/sandals" },
  { label: "Recovery Shoes", icon: "🛌", href: "/footwear-guides/recovery-shoes" },
  { label: "Sneakers", icon: "👟", href: "/footwear-guides/sneakers" },
  { label: "Boots", icon: "🥾", href: "/footwear-guides/boots" },
];

export default function BrowseByType() {
  return (
    <section style={{ background: "#FFF7FA", borderTop: "1px solid rgba(233,32,100,0.06)", borderBottom: "1px solid rgba(233,32,100,0.06)" }}>
      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="text-center mb-12">
          <div className="section-label mb-3">Browse by Shoe Type</div>
          <h2 style={{ fontFamily: "Poppins", fontWeight: 800, fontSize: "clamp(1.8rem, 2.5vw, 2.4rem)", color: "#1a1a2e" }}>
            Shop by{" "}
            <span className="font-brittany" style={{ color: "#E92064", fontSize: "1.2em", fontWeight: 400 }}>
              Category
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {types.map((t) => (
            <a key={t.label} href={t.href} style={{ textDecoration: "none" }}>
              <div className="card" style={{
                padding: "20px 12px",
                textAlign: "center",
                background: "#fff",
                cursor: "pointer",
              }}>
                <div style={{ fontSize: "1.8rem", marginBottom: 10 }}>{t.icon}</div>
                <div style={{ fontFamily: "Poppins", fontWeight: 600, fontSize: "0.78rem", color: "#374151", lineHeight: 1.3 }}>
                  {t.label}
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
