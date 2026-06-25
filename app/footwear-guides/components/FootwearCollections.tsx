const collections = [
  { label: "Walking", desc: "Everyday comfort, all-day support", icon: "🚶♀️", img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=500&q=80", href: "#" },
  { label: "Running", desc: "Performance-engineered footwear", icon: "🏃♀️", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80", href: "#" },
  { label: "Recovery", desc: "Post-workout comfort & relief", icon: "🛌", img: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=500&q=80", href: "#" },
  { label: "Work", desc: "Professional support for long shifts", icon: "👔", img: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=500&q=80", href: "#" },
  { label: "Travel", desc: "Comfort across every time zone", icon: "✈️", img: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500&q=80", href: "#" },
];

export default function FootwearCollections() {
  return (
    <section style={{ background: "#FAFAFA", borderTop: "1px solid rgba(0,0,0,0.05)" }}>
      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="text-center mb-12">
          <div className="section-label mb-3">Shop Collections</div>
          <h2 style={{ fontFamily: "Poppins", fontWeight: 800, fontSize: "clamp(1.8rem, 2.5vw, 2.4rem)", color: "#1a1a2e", lineHeight: 1.1 }}>
            Recommended{" "}
            <span className="font-brittany" style={{ color: "#E92064", fontSize: "1.15em", fontWeight: 400 }}>
              Collections
            </span>
          </h2>
          <p style={{ fontFamily: "Inter", fontSize: "0.9rem", color: "#6B7280", marginTop: "0.75rem", lineHeight: 1.7 }}>
            Curated collections of Dr. Saylee&apos;s top-rated shoes for every need.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {collections.map((c) => (
            <a key={c.label} href={c.href} style={{ textDecoration: "none" }}>
              <div className="card" style={{ overflow: "hidden", cursor: "pointer" }}>
                <div style={{
                  height: 120,
                  backgroundImage: `url(${c.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  position: "relative",
                }}>
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 30%, rgba(0,0,0,0.4) 100%)" }} />
                  <span style={{ position: "absolute", bottom: 10, left: 12, fontSize: "1.4rem" }}>{c.icon}</span>
                </div>
                <div style={{ padding: "14px 14px 16px" }}>
                  <div style={{ fontFamily: "Poppins", fontWeight: 700, fontSize: "0.875rem", color: "#1a1a2e" }}>{c.label}</div>
                  <div style={{ fontFamily: "Inter", fontSize: "0.75rem", color: "#9CA3AF", marginTop: 3 }}>{c.desc}</div>
                  <div style={{ marginTop: 8, fontFamily: "Poppins", fontWeight: 600, fontSize: "0.72rem", color: "#E92064" }}>Shop →</div>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
