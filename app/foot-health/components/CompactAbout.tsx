export default function CompactAbout() {
  return (
    <section style={{ background: "#FAFAFA", borderTop: "1px solid rgba(0,0,0,0.04)" }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: 32,
          background: "#fff",
          borderRadius: 24,
          padding: "36px 40px",
          border: "1px solid rgba(0,0,0,0.05)",
          boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
        }}>
          {/* Avatar */}
          <div style={{
            width: 80, height: 80, borderRadius: "50%",
            background: "linear-gradient(135deg, #FCE4EC, #FFF7FA)",
            border: "3px solid rgba(233,32,100,0.15)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "2.2rem", flexShrink: 0,
          }}>
            👩⚕️
          </div>

          {/* Info */}
          <div style={{ flex: 1, minWidth: 220 }}>
            <div className="section-label mb-2">Meet Your Expert</div>
            <h3 style={{ fontFamily: "Poppins", fontWeight: 800, fontSize: "1.2rem", color: "#1a1a2e", marginBottom: 6 }}>
              Dr. Saylee Tulpule, DPM
            </h3>
            <p style={{ fontFamily: "Inter", fontSize: "0.9rem", lineHeight: 1.7, color: "#6B7280", maxWidth: 480 }}>
              Board-certified podiatrist with 14+ years of clinical experience in Washington D.C. and Maryland. Helping people make informed decisions about foot health and footwear.
            </p>
          </div>

          {/* Tags + CTA */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "flex-start" }}>
            <div className="flex flex-wrap gap-2">
              {["Board Certified", "14+ Years", "DPM"].map((tag) => (
                <span key={tag} style={{
                  background: "#FFF7FA", color: "#E92064",
                  fontFamily: "Poppins", fontWeight: 600, fontSize: "0.72rem",
                  padding: "4px 12px", borderRadius: 100,
                  border: "1px solid rgba(233,32,100,0.15)",
                }}>
                  {tag}
                </span>
              ))}
            </div>
            <a href="/about" className="btn-primary" style={{ fontSize: "0.85rem", padding: "10px 22px" }}>
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
