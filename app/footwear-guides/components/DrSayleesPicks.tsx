const picks = [
  {
    badge: "Editor's Pick",
    category: "Nurses",
    title: "Best Overall Nursing Shoe 2025",
    brand: "Hoka Bondi 8",
    desc: "Maximum cushioning, rocker sole, and clinical durability — Dr. Saylee's top pick for 12-hour shifts.",
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80",
    href: "#",
  },
  {
    badge: "Top Rated",
    category: "Plantar Fasciitis",
    title: "Best Shoe for Heel Pain Relief",
    brand: "Brooks Ghost 16",
    desc: "Exceptional arch support and cushioning that addresses the root cause of plantar fasciitis pain.",
    img: "https://images.unsplash.com/photo-1514989771522-458c9b6c035a?w=500&q=80",
    href: "#",
  },
  {
    badge: "Most Stylish",
    category: "Everyday Walking",
    title: "Best Stylish Supportive Sneaker",
    brand: "New Balance 990v6",
    desc: "Proof that podiatrist-approved doesn't mean sacrificing style. A daily wear staple.",
    img: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=500&q=80",
    href: "#",
  },
];

export default function DrSayleesPicks() {
  return (
    <section style={{ background: "#ffffff" }}>
      <div className="max-w-7xl mx-auto px-6 py-24">

        <div className="text-center mb-14">
          <div className="section-label mb-3">Dr. Saylee&apos;s Favorites</div>
          <h2 style={{ fontFamily: "Poppins", fontWeight: 800, fontSize: "clamp(1.9rem, 3vw, 2.5rem)", color: "#1a1a2e", lineHeight: 1.1 }}>
            Editor&apos;s{" "}
            <span className="font-brittany" style={{ color: "#E92064", fontSize: "1.2em", fontWeight: 400 }}>
              Picks
            </span>
          </h2>
          <p style={{ fontFamily: "Inter", fontSize: "0.95rem", color: "#6B7280", marginTop: "0.75rem", lineHeight: 1.7, maxWidth: 480, margin: "0.75rem auto 0" }}>
            Personally reviewed and recommended by Dr. Saylee Tulpule, DPM.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {picks.map((p) => (
            <a key={p.title} href={p.href} style={{ textDecoration: "none" }}>
              <div className="card" style={{ overflow: "hidden", cursor: "pointer" }}>
                {/* Image */}
                <div style={{
                  height: 200,
                  backgroundImage: `url(${p.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  position: "relative",
                }}>
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.3) 100%)" }} />
                  <div style={{
                    position: "absolute", top: 14, left: 14,
                    background: "linear-gradient(135deg,#E92064,#ff6b9d)",
                    borderRadius: 100, padding: "4px 12px",
                    fontFamily: "Poppins", fontWeight: 700, fontSize: "0.68rem", color: "#fff",
                  }}>
                    {p.badge}
                  </div>
                  <div style={{
                    position: "absolute", top: 14, right: 14,
                    background: "rgba(255,255,255,0.12)", backdropFilter: "blur(8px)",
                    borderRadius: 100, padding: "4px 10px",
                    fontFamily: "Poppins", fontWeight: 600, fontSize: "0.65rem", color: "#fff",
                    border: "1px solid rgba(255,255,255,0.2)",
                  }}>
                    {p.category}
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: "26px 24px" }}>
                  <div style={{ fontFamily: "Poppins", fontWeight: 700, fontSize: "0.78rem", color: "#E92064", marginBottom: 6 }}>
                    {p.brand}
                  </div>
                  <h3 style={{ fontFamily: "Poppins", fontWeight: 700, fontSize: "1.05rem", color: "#1a1a2e", lineHeight: 1.3, marginBottom: 10 }}>
                    {p.title}
                  </h3>
                  <p style={{ fontFamily: "Inter", fontSize: "0.875rem", lineHeight: 1.7, color: "#6B7280" }}>
                    {p.desc}
                  </p>

                  {/* Dr. Saylee trust signal */}
                  <div style={{ marginTop: 18, display: "flex", alignItems: "center", gap: 8, padding: "10px 14px", background: "#FFF7FA", borderRadius: 12, border: "1px solid rgba(233,32,100,0.1)" }}>
                    <span style={{ fontSize: "1rem" }}>👩⚕️</span>
                    <span style={{ fontFamily: "Poppins", fontWeight: 600, fontSize: "0.75rem", color: "#E92064" }}>
                      Dr. Saylee Recommends
                    </span>
                  </div>

                  <div style={{ marginTop: 14, color: "#E92064", fontFamily: "Poppins", fontWeight: 600, fontSize: "0.82rem" }}>
                    Read full review →
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
